import axios from 'axios';
import uuid from 'uuid/v4';

const store = {
    state: {
        items: []
    },
    async fetchItems() {
        this.state.items = await axios.get('https://NflArrest.com/api/v1/crime').then(res => res.data.map((v) => {
            return {id: uuid(), name: v.Category}
        }));
    }
};
export default store;