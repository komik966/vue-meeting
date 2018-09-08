<template>
    <div id="app">
        <list :items="sharedState.items" @remove-item="removeItem"/>
        <add-item-form @add-item="addItem"/>
        <input type="number" v-model="sharedState.itemsLimit" @change="reloadItems()"/>
    </div>
</template>

<script>
    import uuid from 'uuid/v4';
    import List from './components/List';
    import AddItemForm from './components/AddItemForm';
    import store from './store';

    export default {
        name: 'app',
        components: {
            List,
            AddItemForm
        },
        data() {
            return {
                sharedState: store.state
            }
        },
        created() {
            store.fetchItems()
        },
        methods: {
            reloadItems() {
                store.fetchItems()
            },
            addItem(name) {
                this.sharedState.items.push({id: uuid(), name})
            },
            removeItem(id) {
                this.sharedState.items = this.sharedState.items.filter(item => item.id !== id);
            }
        }
    }
</script>

<style lang="scss">

</style>
