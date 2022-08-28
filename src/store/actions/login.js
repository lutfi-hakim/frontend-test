import { LOGIN } from "../types";

export const login = (username, pass) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN, payload: { username, pass } });
    localStorage.setItem("user", JSON.stringify({ username, pass }));
  } catch (error) {
    console.log(error);
  }
};
