import axios from "axios";
import { showLoader, hideLoader } from "../store/actions/UI.actions";

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
      return await axios.get(url);
    } catch (error) {
      return error;
    }
  };

  post = async (url: string, data: any) => {
    try {
      this.dispatch(showLoader());
      const response = await axios.post(url, data);
      console.log("ininnnn", response);
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
