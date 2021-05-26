import { globalVariable } from "./globalvariable";
import axios from "axios";

export const GetData = async (url) => {
  let BaseUrl = globalVariable.baseURL + url;
  return await axios.get(BaseUrl).then(function (response) {
    return response.data;
  });
};
