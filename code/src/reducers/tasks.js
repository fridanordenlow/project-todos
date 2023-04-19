import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    /* {
      id: '1',
      description: 'Do laundry',
      isCompleted: false
    },
    {
      id: '2',
      description: 'Buy milk',
      isCompleted: false
    } */
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references the state of the store, second argument references the data that is
    // passed down from a component
    addTask: (store, action) => {
    // Mutable, avoid because it's unpredictable
    //   store.items.push(action.payload);
    // Immutable
      store.items = [...store.items, action.payload];
      // const x = ['a','b','c']
      // const y = [x, 'd'] => [['a','b','c'], 'd']
      // const z = [...x, 'd']  => ['a','b','c','d']
      // const superObject = {a: 'test', b:'other test'}
      // const supererObject = {...superObject, c: 'third test'}
    },
    removeTask: (store, action) => {
      /* store.items.splice(action.payload, 1) */
      store.items = store.items.filter((item) => item.id !== action.payload.id)
    },
    toggleComplete: (store, action) => {
      store.items.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted
        }
      })
    }
  }
});

export default tasks;