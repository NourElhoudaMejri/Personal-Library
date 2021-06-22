import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState:
    [{title:'t1',
    author:'auth1',
    rating:5,
    id:'1'
  }]

  ,
  reducers: {
    addBook: (state, action) => {
      console.log('here',state)
      const book= {
          title: action.payload.title,
          author: action.payload.author,
          rating:action.payload.rating

      };
      console.log('book',book)
      state.push(book)
      console.log('state',state)
  },
    deleteBook(state, action) {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index > -1) {
          state.splice(index, 1);
      }
      return state;
      },    
  
    //  addBook(state, action) {
    //   state.books.push(action.payload);
    // },
  


    // addBook: {
    //   reducer: (state, action) => {
    //     state.books.push(action.payload);
    //   },
    //   prepare: (value) => {
    //     return {
    //       payload: {
    //         ...value,
    //         createdAt: new Date(),
    //       },
    //     };
    //   },
    // },



  
  },
});


console.log(booksSlice);

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
