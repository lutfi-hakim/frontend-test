import { LOGIN } from "../types";

const initialState = "";

function loginUser(users = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...users, payload };

    default:
      return users;
  }
}
export default loginUser;
