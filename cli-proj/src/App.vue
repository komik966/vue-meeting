<template>
    <div id="app">
        <list :items="list" @remove-item="removeItem"/>
        <add-item-form @add-item="addItem"/>
    </div>
</template>

<script>
    import uuid from 'uuid/v4';
    import List from './components/List';
    import AddItemForm from './components/AddItemForm';

    export default {
        name: 'app',
        components: {
            List,
            AddItemForm
        },
        data() {
            return {
                list: [{id: 1, name: "Foo"}, {id: 2, name: "Bar"}]
            }
        },
        methods: {
            addItem(name) {
                this.list.push({id: uuid(), name})
            },
            removeItem(id) {
                this.list = this.list.filter(item => item.id !== id);
            }
        }
    }
</script>

<style lang="scss">

</style>
