import axios from "axios";
import { setAuth } from "../redux/Reducers/AuthSlice";
import { setUser } from "../redux/Reducers/UserSlice";
import AuthService from "../services/AuthService";
import { API_URL } from "../services/useAxios";

export default class UserFetch {
  static async login(email, password, dispatch) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      console.log(response.data);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      return e.response?.data?.message;
    }
  }
  static async registration(email, password, dispatch) {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response.data);

      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.log(e);
      return e.response?.data?.message;
    }
  }
  static async logout(dispatch) {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      dispatch(setAuth(false));
      dispatch(setUser({}));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
  static async checkAuth(dispatch) {
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
