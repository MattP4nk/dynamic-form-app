<template>
    <v-select 
    :items="options"
    :label = "label"
    @input = "$emit('update:returnValue', '$event.target.value')"
    required>
    </v-select>
</template>
<script>
    export default {
        props: { 
            label: {
                type: String,
                default: ''
            },
            options: {
                type: {},
                default: {}
            },
            returnValue:{
                type: [String, Number],
                default: ''
            }
        }
    }
</script>