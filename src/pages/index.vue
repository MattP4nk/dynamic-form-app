<template>
    <container style="text-align: center;">
        <br>
        <h1>Dynamic form app.</h1>
        <h3> Como usar. </h3>
        <p>
            Intente que sea lo mas simple posible, con la idea de que pueda usarse sin dar
            muchas vueltas. <br>
            Separe la app en 4 vistas:<br>

            <v-btn icon href="/">
                <v-icon>mdi-home</v-icon>
                <v-tooltip activator="parent" location="bottom">Home</v-tooltip>
            </v-btn>
            1- Home: No tiene gran funcionalidad salvo dar algunas indicaciones.<br>


            <v-btn icon href="/setup">
                <v-icon>mdi-code-json</v-icon>
                <v-tooltip activator="parent" location="bottom">Configure Form</v-tooltip>
            </v-btn>
            2- Setup (o configure json): es un editor para el json que crea los campos del formulario.<br>
            

            <v-btn icon href="/form">
                <v-icon>mdi-text-box-outline</v-icon>
                <v-tooltip activator="parent" location="bottom">Fill Form</v-tooltip>
            </v-btn>
            3- Fill form: Aca se va a generar el formulario. La app cuenta con un json default en caso de<br>
            que no se genere (o modifique el default). De esta manera se puede cargar un formulario ni bien se ingresa.<br>
            
            
            <v-btn icon href="/surveys">
                <v-icon>mdi-file-document-multiple-outline</v-icon>
                <v-tooltip activator="parent" location="bottom">Completed Forms</v-tooltip>
            </v-btn>
            4- Completed Forms: Aca se van a mostrar los formularios completados y guardados en el store.

        </p>




    </container>
</template>

<script lang="ts" setup>
</script>