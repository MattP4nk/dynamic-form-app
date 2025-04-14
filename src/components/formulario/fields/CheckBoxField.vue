<template>
    <v-checkbox
    :label="label"
    @input="$emit('update:returnValue', '$event.target.value')"
    ></v-checkbox>
</template>
<script>
    export default {
        props: { 
            label: {
                type: String,
                default: ''
            },
            returnValue:{
                type: Boolean,
                default: false
            }
        }
    }
</script>