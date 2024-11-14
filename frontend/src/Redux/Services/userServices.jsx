import axios from "axios";

export const userListApi = async()=>{
  try {
    const response = await axios.get("http://localhost:4000/user/list");
    
    return response;
  } catch (error) {
    console.error(`Error: ${error.response?.status} ${error.response?.statusText}`);
    throw error; // Re-throw the error if further handling is needed
  }
}