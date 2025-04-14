<template>
    <v-card class="mx-auto center" width="auto" max-width="90vw" max-height="100vh" @submit.prevent="saveChanges">
        <v-card-title primary-title>
                <h3 class="headline mb-0">BLUEPRINT SETUP</h3>
        </v-card-title>
        <v-card-text style="padding-bottom: 0px;">
            <v-textarea v-model="json" multi-line></v-textarea>
        </v-card-text>
        <v-card-actions class="center" style="padding-top: 0px;">
            <v-btn flat color="primary" @click="discardChanges">Discard</v-btn>
            <v-btn flat color="primary" @click="saveChanges">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
    .center{
        text-align: center;
        justify-content: center;
    }
    .v-textarea{
        height:75vh;
    }
</style>

<script setup>
import { useFormStore } from '../../stores/app.ts';
import { ref } from 'vue';
import data from "../../data/example.json";
import blueprintAPI from '../../axios/blueprintAPI.ts'



const store = useFormStore()
const json = ref('');


//No esta conectado.
const loadBlueprint = async () => {
    try{
        const respuesta = await blueprintAPI.getBlueprint()
        json.value = respuesta
    }catch(e){
        console.warn(e);
        json.value = JSON.stringify(store.formBlueprint ?? data, null, 2);
    }
}

//Si no hay ningun JSON cargado en el store, toma el JSON guardado en example.json
watchEffect(() => {
  json.value = JSON.stringify(store.formBlueprint ?? data, null, 2);
});

//Desecha todos los cambios realizados al json y vuelve al estado original (example.json)
function discardChanges() {
    json = JSON.stringify(data, null, 2);
    console.log(JSON.stringify(data, null, 2))
    store.updateBlueprint(JSON.parse(json.value))
}

//Guarda un nuevo json en el store.
function saveChanges() {
    try {
        store.updateBlueprint(JSON.parse(json.value))
        alert('Blueprint guardado!');
        console.log(JSON.stringify(store.formBlueprint, null, 2))
    } catch (e) {
        alert('JSON en formato no valido');
    }
    
}
/*
Este componente es bastante sensillo, solo cuenta con un textfield y un par de botones
para guardar o desechar los cambios realizados al JSON. La opcion de desechar los cambios
la agregue porque me parecio practico tener un estado "por defecto" a la hora de estar trabajando
*/
</script>