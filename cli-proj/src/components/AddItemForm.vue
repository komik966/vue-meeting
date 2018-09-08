<template>
    <form @submit.prevent="addItem()">
        <input type="text" v-model="newItemName" name="newItemName" v-validate="'required|min:3'"/>
        <button>Add item</button>

        <div v-show="errors.has('newItemName')">
            {{ errors.first('newItemName') }}
        </div>
    </form>
</template>

<script>
    export default {
        name: "AddItemForm",
        data() {
            return {
                newItemName: ''
            }
        },
        methods: {
            addItem() {
                this.$validator.validateAll().then(result => {
                    if (!result) {
                        return;
                    }

                    this.$emit('add-item', this.newItemName);

                    this.$validator.reset();
                });
            }
        }
    }
</script>

<style scoped>

</style>