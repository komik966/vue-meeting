<template>
    <div id="app">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.id}} {{ item.name }}
                <button @click="removeItem(item.id)">x</button>
            </li>
        </ul>
        <form @submit.prevent="addItem()">
            <input type="text" v-model="newItemName" name="newItemName" v-validate="'required|min:3'"/>
            <button>Add item</button>

            <div v-show="errors.has('newItemName')">
                {{ errors.first('newItemName') }}
            </div>
        </form>
    </div>
</template>

<script>
    import uuid from 'uuid/v4';

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
                this.$validator.validateAll().then(result => {
                    if (!result) {
                        return;
                    }

                    this.list.push({id: uuid(), name: this.newItemName})

                    this.$validator.reset();
                });
            },
            removeItem(id) {
                this.list = this.list.filter(item => item.id !== id);
            }
        }
    }
</script>

<style lang="scss">

</style>
