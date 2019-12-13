const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Email ou Password est invalide"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
     case "RESET_SUCCESS":
       return {
         ...state,
         authError: action.payload
       }
      case "RESET_ERROR":
        return{
          ...state,
          authError: action.payload
        }
      case "RESET_MAIL_SUCCESS":
        return {
          ...state,
          authError: action.payload
         }
      case "RESET_MAIL_ERROR":
          return{
           ...state,
           authError: action.payload
         }
    default:
      return state;
  }
};
export default authReducer;
