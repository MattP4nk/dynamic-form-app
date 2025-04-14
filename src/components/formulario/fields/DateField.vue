<template>
    <v-date-picker class="date"
    :title="label"
    @input="$emit('update:returnValue', '$event.target.value')"
    required>
    </v-date-picker>
</template>

<style scoped>
.date {
    width: 100%;
}
</style>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        returnValue: {
            type: new Date(),
            timezone: ''
        }
    }
}
</script>