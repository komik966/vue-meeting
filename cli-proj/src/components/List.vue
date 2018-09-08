<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <list-item :name="item.name" :id="item.id" @remove-item="$emit('remove-item', $event)"/>
        </li>
    </ul>
</template>

<script>
    import ListItem from './ListItem';

    export default {
        name: "List",
        props: {
            items: {
                type: Array
            }
        },
        components: {
            ListItem
        }
    }
</script>

<style scoped>

</style>