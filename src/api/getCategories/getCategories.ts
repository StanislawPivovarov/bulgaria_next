import axios from "axios"
import { writeFileSync } from "fs";
import path from "path";



const getCategories = async () => {
    try {
        // console.log(process.env.REACT_APP_STRAPI)
        const result = await axios.get(`http://localhost:1337/api/categories?populate=*`);
        // console.log(result.data.data);


        return result.data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; // rethrow the error to handle it elsewhere, if needed
    }
}


export default getCategories;