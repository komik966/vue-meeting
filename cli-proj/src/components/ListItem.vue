<template>
    <div>
        {{id}} {{ name }}
        <button @click="$emit('remove-item', id)">x</button>
    </div>
</template>

<script>
    export default {
        name: "ListItem",
        props: {
            id: {
                type: String
            },
            name: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>