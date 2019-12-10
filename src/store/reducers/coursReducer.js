const initState = {
  cours: []
};

const coursReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_COURS":
      console.log("get all cours success");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state
      };

    default:
      return state;
  }
};
export default coursReducer;
