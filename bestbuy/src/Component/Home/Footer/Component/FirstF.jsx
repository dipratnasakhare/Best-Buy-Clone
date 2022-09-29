import { Box, Text,Image} from "@chakra-ui/react"
import style from './Footercss/FirstF.module.css'
export default function footer(){

    let data = [
        
        {
            name:'Visit our Support Center',
            img:'https://cdn-icons-png.flaticon.com/512/471/471664.png'
        },
        {
            name:'Cheak your Order Status',
            img:'https://cdn-icons-png.flaticon.com/512/2900/2900216.png'
        },
        {
            name:'Shipping,Deliver & Store Pickup',
            img:'https://cdn-icons-png.flaticon.com/512/1332/1332612.png'
        },
        {
            name:'Returns & Exchanges',
            img:'https://cdn-icons-png.flaticon.com/512/5469/5469919.png'
        },
        {
            name:'Price Match Guarantee',
            img:'https://cdn-icons-png.flaticon.com/512/2529/2529396.png'
        },
      
    ]
    return(
        <Box className={style.box}>
         {data.map((ele)=>{
            return(
                <Box>
                    <Image src={ele.img} />
                    <Text>{ele.name}</Text>
                </Box>
            )
         })}
        </Box>
    )
}