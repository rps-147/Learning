import * as type from "../types";

const initialState = {
  loader: false,
  successful: false,
  messages: [],
  errors: [], // fixed typo here
  data: null,
  registerData: null,
  showModal: false,
};

export default (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case type.LOGIN_REQUESTING:
      newState = {
        ...state,
        loader: true,
        successful: false,
        messages: [{ body: "Logging in...", time: new Date() }],
        errors: [], // fixed typo here
      };
      break;
    case type.LOGIN_SUCCESS:
      newState = {
        ...state,
        data: action.users.user,
        loader: false,
        successful: true,
        errors: null, // fixed typo here
      };
      break;
    case type.LOGIN_FAILURE:
      newState = {
        ...state,
        data: null,
        successful: false,
        errors: action.error, // fixed typo here
        loader: false,
      };
      break;
    case type.REGISTER_REQUESTING:
      newState = {
        ...state,
        registerData: null,
        loader: true,
        successful: false,

        errors: [],
        messages: [{ body: "Signing up...", time: new Date() }],
      };
      break;
    case type.REGISTER_SUCCESS:
      newState = {
        ...state,
        registerData: action.users.user,
        loader: false,
        successful: true,
        errors: null, // fixed typo here
        showModal: true,
      };
      break;
    case type.REGISTER_FAILURE:
      newState = {
        ...state,
        registerData: null,
        successful: false,
        errors: action.error, // fixed typo here
        loader: false,
        showModal: false,
      };
      break;
    case type.HIDE_MODAL:
      newState = {
        ...state,
        showModal: false,
      };
      break;
    default:
      newState = newState;
  }
  return newState;
};
