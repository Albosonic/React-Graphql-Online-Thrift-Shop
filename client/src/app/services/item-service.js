import axios from 'axios';

export const saveNewItem = item => {  
  axios.post('/item/new', item)
  .then(resp => {
    console.log(resp);
    //save to redux store.
  })
}