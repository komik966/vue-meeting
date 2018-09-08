<template>
    <div id="app">
        <ul>
            <li v-for="item in list">
                {{item.id}} {{ item.name }}
                <button @click="removeItem(item.id)">x</button>
            </li>
        </ul>
        <input type="text" v-model="newItemName"/>
        <button @click="addItem()">Add item</button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                list: [{id: 1, name: "Foo"}, {id: 2, name: "Bar"}],
                newItemName: ''
            }
        },
        methods: {
            addItem() {
                this.list.push({id: this.list[this.list.length - 1].id + 1, name: this.newItemName})
            },
            removeItem(id) {
                this.list = this.list.filter(item => item.id !== id);
            }
        }
    }
</script>

<style lang="scss">

</style>
