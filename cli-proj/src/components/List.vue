<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            {{item.id}} {{ item.name }}
            <button @click="$emit('remove-item', item.id)">x</button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "List",
        props: {
            items: {
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>