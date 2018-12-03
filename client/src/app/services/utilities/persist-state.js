import store from '../../../redux/store';

export const loadState = () => {
  try {
    let serializedState = localStorage.getItem('appState');
    if(localStorage.getItem('appState') === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
}

export const persisitState = () => {
  store.subscribe(()=> {  
    localStorage.setItem('appState', JSON.stringify(store.getState()));
  })
}