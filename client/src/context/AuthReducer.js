const reducer = (state, action) => {
  switch (action.type) {
    // add new user data:
    case "SAVE_USER_DATA":
      return {
        ...state,
        username: [action.payload.username],
        password: [action.payload.password]
      };
    default:
      return state;
  }
};
export default reducer;
