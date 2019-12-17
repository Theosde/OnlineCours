const initState = {
  cours: []
};

const coursReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_COURS":
      console.log("get all cours success");
      return state;
    case "CREATE_COURS":
      console.log("created cours", action.cours);
      return state;
    case "CREATE_COURS_ERROR":
      console.log("create cours error", action.err);
      return state;
    default:
      return state;
  }
};
export default coursReducer;
