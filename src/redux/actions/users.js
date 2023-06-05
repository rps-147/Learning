import * as type from "../types";
const loginRequest = function loginRequest(payload) {
  return {
    type: type.LOGIN_REQUESTING,
    payload,
  };
};
const registerRequest = function registerRequest(payload) {
  console.log("From Register Request....", payload);
  return {
    type: type.REGISTER_REQUESTING,
    payload,
  };
};

const hideModal = (payload) => {
  console.log("From Action Modal....");
  return {
    type: type.HIDE_MODAL,
    payload,
  };
};
export { loginRequest, registerRequest, hideModal };