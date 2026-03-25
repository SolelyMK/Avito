import axiosConfig from "../api/axiosConfig";

async function GetUserById(id: number) {
        
        const result = await axiosConfig.get(`/items/${id}`);

        return result;
}

export default GetUserById;