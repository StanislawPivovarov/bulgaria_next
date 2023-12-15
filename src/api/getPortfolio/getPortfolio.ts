import axios from "axios"

const getPortfolio = async () => {
    try {
        const result = await axios.get(process.env.STRAPI_API + `/api/portfolios?populate[product_category][populate][0]=direction`);
        return result.data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}


export default getPortfolio;