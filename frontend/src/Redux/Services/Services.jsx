import axios from 'axios';

export const signupApi = async (user) => {
  try {
    const response = await axios.post('http://localhost:4000/auth/register', user);
    return response; // axios automatically parses JSON response
  } catch (error) {
    console.error(`Error: ${error.response?.status} ${error.response?.statusText}`);
    throw error; // Re-throw the error if further handling is needed
  }
}; 


export const loginApi = async(user)=>{
  try {
    const response = await axios.post("http://localhost:4000/auth/login", user);
    console.log("response", response);
    const token = response.data.token;

    // Store token in localStorage
    if (token) {
      localStorage.setItem("authToken", token);
    }
    return response.data;
  } catch (error) {
    console.error(`Error: ${error.response?.status} ${error.response?.statusText}`);
    throw error; // Re-throw the error if further handling is needed
  }
}
