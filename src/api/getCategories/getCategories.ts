import axios from "axios"
import { writeFileSync } from "fs";
import path from "path";



const getCategories = async () => {
    try {
        const result = await axios.get(`http://localhost:1337/api/categories?populate=*`);
        return result.data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}


export default getCategories;