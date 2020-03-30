const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null
    };
  }
  switch (action.type) {
    case "FETCH_BOOKS_REQUESTED":
      return {
        books: [],
        loading: true,
        error: null
      };
    case "FETCH_BOOKS_LOADED":
      return {
        books: action.payload,
        loading: false,
        error: null
      };
    default:
      return state.bookList;
  }
};

export default updateBookList;
