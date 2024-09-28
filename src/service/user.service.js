import axios from "axios";

//Handle User Register

export const registerUser = async(userData) => {
    try {
        
        const response = await axios.post(
            "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register",
            userData,
            {
                headers: {
                    "Content-Type" : "application/json",
                    "apikey" : "24405e01-fbc1-45a5-9f5a-be13afcd757c",
                },
            }
        );
        
        console.log("Register success!", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const loginUser = () => {

}

export const logoutUser = () => {

}

export const deleteAccountUser = () => {

}

