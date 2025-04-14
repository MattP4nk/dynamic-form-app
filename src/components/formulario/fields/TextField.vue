<template>
    <v-text-field
    :label = "label"
    :placeholder = "placeholder"
    :maxLength = "maxLength"
    counter
    @input = "$emit('update:returnValue', '$event.target.value')">
    </v-text-field>
</template>
<script>
    export default {
        props: { 
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxLength: {
                type: Number,
                default: 300
            },
            returnValue:{
                type: [String, Number],
                default: ''
            }
        }
    }
</script>