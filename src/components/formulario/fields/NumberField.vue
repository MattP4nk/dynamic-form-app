<template>
    <v-number-input
    :label="label"
    type="text"
    control-variant="hidden"
    :placeholder="placeholder"
    counter
    @input="$emit('update:returnValue', '$event.target.value')"
    required>
    </v-number-input>
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
            returnValue: {
                type: String,
                default: ''
            }
        }
    }
</script>