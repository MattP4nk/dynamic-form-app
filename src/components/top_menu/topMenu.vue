<template>
    <v-app-bar style="padding-left:5vw;">
        <v-app-bar-title>Forms App</v-app-bar-title>
        <div style="padding-right: 5vw;">
            <v-btn icon href="/">
                <v-icon>mdi-home</v-icon>
                <v-tooltip activator="parent" location="bottom">Home</v-tooltip>
            </v-btn>
            <v-btn icon href="/setup">
                <v-icon>mdi-code-json</v-icon>
                <v-tooltip activator="parent" location="bottom">Configure Form</v-tooltip>
            </v-btn>
            <v-btn icon href="/form">
                <v-icon>mdi-text-box-outline</v-icon>
                <v-tooltip activator="parent" location="bottom">Fill Form</v-tooltip>
            </v-btn>
            <v-btn icon href="/surveys">
                <v-icon>mdi-file-document-multiple-outline</v-icon>
                <v-tooltip activator="parent" location="bottom">Completed Forms</v-tooltip>
            </v-btn>
        </div>
    </v-app-bar>
</template>