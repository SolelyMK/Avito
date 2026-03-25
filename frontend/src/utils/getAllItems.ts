import axiosConfig from "../api/axiosConfig";

export async function GetAllItems() {

    const result = await axiosConfig.get("/items");

    return result;
}