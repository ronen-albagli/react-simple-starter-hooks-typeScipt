import axios from "axios";
import {
  showLoader,
  hideLoader,
  moveToHomeScreen
} from "../store/actions/UI.actions";
import { userLoggedOut } from "../store/actions/auth.action";

/**
 * This is Api class for generic HTTP request. ==> Base on Axios library.
 * Each request get URL, DATA if need.
 * all the token work used where.
 */

class API implements httpFactory {
  private dispatch: any;
  constructor(dispatch: any) {
    this.dispatch = dispatch; // Action dispatcher.
  }

  get = async (url: string) => {
    try {
      const response = await axios.get(url, {
        headers: {
          "x-auth-token": localStorage.getItem("token")
        }
      });
      return response;
    } catch (error) {
      this.dispatch(userLoggedOut());
      // this.dispatch(moveToHomeScreen());
      return error;
    }
  };

  post = async (url: string, data: any) => {
    try {
      this.dispatch(showLoader());
      const response = await axios.post(url, data, {
        headers: {
          "x-auth-token": localStorage.getItem("token")
        }
      });
      this.dispatch(hideLoader());
      return response;
    } catch (error) {
      this.dispatch(hideLoader());
      return error;
    }
  };

  put = async (url: string, data: any) => {
    try {
      return await axios.post(url, data);
    } catch (error) {
      return error;
    }
  };

  delete = async (url: string, data: any) => {
    try {
      return await axios.post(url, data);
    } catch (error) {
      return error;
    }
  };
}

export default API;
