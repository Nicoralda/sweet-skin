import axios from "axios";

const searchImage = async (term)=>{
        const response = await axios.get("https://api.unsplash.com/search/photos" , {
                headers:{
                    Authorization:"Client-ID RHwFP7Ta-QnCnuoYa2T2X4IlgnYQDZg4_XIHkkxt48Q"
                },
                params:{
                    query:term
                }
            });
        //console.log(response.data.results);
        return response.data.results
}

export default searchImage;