<template>
    <div v-for="form in filledForms"  :key="form._form_">
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    {{  form._form_ + ' - ID: ' + form._id_ }}
                </v-expansion-panel-title>
                <v-expansion-panel-text v-for="key in getFieldKeys(form)">
                    <p> >> {{ key }}:    {{ form[key] }}</p>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script setup>
import { useFormStore } from '../../stores/app.ts'

const store = useFormStore()
const filledForms = store.forms

//Esto nos va a dar los keys para construir la seudo tabla.
function getFieldKeys(form){
    let keys = [];
    Object.keys(form).forEach(key => {
        
        if (key != "_form_" && key != "_id_"){
            keys.push(key);
        }
        
    });
    console.log(keys)
    return keys
}
/*
Este componente basicamente va a revisar el store buscando formularios ya completados
en caso de encontrar, los carga en "filledForms". Aca comienza la generacion del template,
creando expansion-panels, el titulo de cada panel es el nombre del formulario guardado
en _form_ y su id _id_ -Estos valores se van a guardar siempre en cada formulario-
luego de esto el template hace una llamada a getFieldKeys enviando el formulario en el
que esta trabajando, la funcion devuelve un array con los keys del objeto.
Usando esos keys se termina de crear cada campo del formulario antes de pasar al proximo.
*/
</script>
