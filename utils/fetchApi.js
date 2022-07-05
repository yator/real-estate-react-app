import axios from "axios";



export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{

        headers: {
            'X-RapidAPI-Key': '8f83d3bb1emshf95d676cb476f7fp1c5b6cjsn938082057ddb',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}