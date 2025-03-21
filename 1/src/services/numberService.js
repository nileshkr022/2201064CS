const axios = require("axios");
const THIRD_PARTY_API = process.env.THIRD_PARTY_API;

const fetchNumbers = async(type)=>{
    try{
        const response = await axios.get(`${THIRD_PARTY_API}/${type}`,{timeout:500,});
        return response.data.numbers || [];
    }
    catch(error){
        console.log(`error fetching numbers for type ${type}:`,error.message);
        return [];
    }
};

module.exports = {fetchNumbers}