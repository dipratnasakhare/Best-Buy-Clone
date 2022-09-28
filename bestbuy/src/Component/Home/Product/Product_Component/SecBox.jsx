import { Box, Text} from "@chakra-ui/react";

import ViewStyle from "./CSS Box/SecBox.module.css"
import axios from "axios"

export default function ViewPage(){

    const axios = require("axios");

    const encodedParams = new URLSearchParams();
    encodedParams.append("apiKey", "4e62510335mshc40f2e8ca200742p183d7fjsnc5a6cfb23e63");
    
    const options = {
      method: 'POST',
      url: 'https://bestbuyraygorodskijv1.p.rapidapi.com/getAllCategories',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '4e62510335mshc40f2e8ca200742p183d7fjsnc5a6cfb23e63',
        'X-RapidAPI-Host': 'BestBuyraygorodskijV1.p.rapidapi.com'
      },
      data: encodedParams
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });










    return(

        <Box h={250} className={ViewStyle.boxview} >
           <Text>Manage all your recently viewed items</Text>
        </Box>
    )
}