import axios from "axios"

const getCategoriesByLink = async (params:any) => {
    try {
        const result = await axios.get(process.env.STRAPI_API + `/api/categories/${params}/?populate=*`);
        return result.data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error; // rethrow the error to handle it elsewhere, if needed
    }
}


export default getCategoriesByLink;