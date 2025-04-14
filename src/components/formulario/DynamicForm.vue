<template>
    <v-sheet class="mx-auto contenedor" height="90vh" max-width="90vw">
        <v-divider :thickness="10"></v-divider>
        <h1>{{ title }}</h1>
        <v-divider :thickness="10"></v-divider>
        <v-form ref="formRef" fast-fail @submit.prevent="onSubmit">
            <div v-for="field in fields" :key="field.name">
                <component :is="componentProxy[field.type]"
                :type="field.type"
                :label="field.label"
                :placeholder="field.default" 
                :maxLength="field.maxLength" 
                :rules="loopValidations(field.validations)"
                :options="field.options"
                v-model="formData[field.name]" />
            </div>
            <v-divider :thickness="5"></v-divider>
            <div>
                <button>Submit</button>
            </div>
            <v-divider :thickness="10"></v-divider>
        </v-form>
    </v-sheet>
</template>

<style scoped>
.contenedor {
    text-align: center;
    align-items: center;
}
</style>

<script setup>
import { ref, reactive } from "vue";
import { useRules } from 'vuetify/labs/rules';
import TextField from './fields/TextField.vue';
import SelectField from './fields/SelectField.vue';
import DateField from './fields/DateField.vue';
import NumberField from './fields/NumberField.vue';
import CheckBox from './fields/CheckBoxField.vue';
import { customRules } from './customRules.ts'
import { useFormStore } from '../../stores/app.ts'
import formsAPI from '../../axios/formsAPI.ts'
import data from "../../data/example.json";

const store = useFormStore()

//Aca encontramos los datos para crear el formulario. Lo desarme en dos variables porque es mas facil de trabajar asi.
let blueprint;
watchEffect(() => {
    blueprint = (store.formBlueprint ?? data)
});
const fields = blueprint.fields;
const title = blueprint.formTitle;
const id = (store.formId).toString()
const formRef = ref();


//Aca agregamos los diferentes campos que creemos. Utilizo esto mas por una opcion estetica, text-field podria realizar las tareas de la mayor parte de estos campos, pero renunciando a ciertas facilidades y honestamente date-picker se ve mucho mejor que text-field usando type date.  
const fieldsMap = new Map([
    ["text", TextField],
    ["date", DateField],
    ["selectable", SelectField],
    ["checkbox", CheckBox]
])
//Esto es simplemente un proxy para que en caso de que el JSON solicite un type que no maneja la app, se intente crear el campo usando un text-field. Uso text-field como default porque es lo mas versatil si dejamos cierta funcionalidad de lado.
var componentProxy = new Proxy(fieldsMap, {
    get: function (target, key) {
        return target.has(key) ? target.get(key) : target.get("text");
    },
})

/*"useRules()" es parte del plugin de Vuetify, lo cual simplifica mucho las cosas, pero 
leyendo la documentacion vi que faltaban algunas validaciones que me gusta tener asi que
las escribi en "customRules"
*/
const rules = useRules()
const moreRules = customRules;

function loopValidations(validations) {
    //pedacito de codigo para no repetir tanto.
    function verification(type, rule) {
        if (rule == undefined) {
            console.warn("Error: no such rule in systm: " + type);
        } else {
            rulesList.push(rule)
        }
    }
    const rulesList = [];
    if (validations == undefined) { return [] }
    validations.forEach(validation => {
        //suponiendo que "complex" es una nueva lista de validaciones <<simples>>
        if (validation.type == "complex") {
            validation.rules.forEach(complexRule => {
                if (Object.values(complexRule) != false) {
                    validation.type = Object.keys(complexRule)[0]
                    verification(validation.type, callRule(validation))
                }
            })
        } else {
            verification(validation.type, callRule(validation))
        }
    })
    return rulesList;
}

function callRule(validation) {
    /*Primero chequeamos si la regla esta incluida en el plugin de Vuetify. De estar, ejecutamos desde ahi.*/
    if (rules[validation.type] != undefined) {
        return rules[validation.type](validation.value, validation.message);
    }
    /**De no encontrarla en el plugin puede que haya algun typo en el JSON o que la regla tenga otro nombre, como pasa con regex que en Vuetify se llama Pattern. Podemos modificar el plugin o crear la regla aca. Yo preferi crear un conjunto de relglas extra.*/
    else if (customRules[validation.type] != undefined) {
        return moreRules[validation.type](validation.message, validation.pattern);
    }
}

const formData = reactive({
    "_form_": title,
    "_id_": id,
});

/*Post method sin conexion
const postForm(form) = async () => {
    const respuesta = await formsAPI.postForm(form)
    console.log(respuesta)
}
*/
const onSubmit = async () => {
    const { valid } = await formRef.value.validate();
    if (valid) {
        //postForm(form)
        alert("Done.");
        store.addForm(formData);
    } else {
        alert("Formulario not valid");
    }
}
/*
Este es el componente que mas vueltas da creo, al principio loopValidations y callRules eran
una misma funcion, pero ante la posiblidad de que la validacion "complex" anide otras reglas
dentro preferi separar el metodo en dos partes, el loop y la ejecucion, y finalmente agregue 
una validacion extra para tener algun aviso en el caso de que alguna validacion no este
contemplada en el sistema. 
En cuanto a los campos: Cree 5 campos "genericos" aunque en realidad solo voy a usar 4 ya 
que al final de las cuentas text-field es simplemente demasiado versatil y soluciona un monton
de problemas. Los otros 3 campos los elegi porque o esteticamente se ven mejor o porque text-field
no puede realizar esa tarea.
*/

</script>

