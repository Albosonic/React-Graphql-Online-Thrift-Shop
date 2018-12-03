import axios from 'axios';

export const saveNewItem = item => {  
  axios.post('/new/item', item)
  .then(resp => {
    console.log(resp);
    //save to redux store.
  })
}