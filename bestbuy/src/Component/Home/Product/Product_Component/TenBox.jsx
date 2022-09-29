import { Button,Box, Text, Heading, Image, Divider} from "@chakra-ui/react";


import ViewStyle from "./CSS Box/TenBox.module.css"


export default function ViewPage(){
    let inspired = [
        {
          img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=272;maxWidth=400",
          name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
          pricenew: "$899.99",
          priceold: "999.99",
        },
        {
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418603_sd.jpg;maxHeight=272;maxWidth=400",
            name: 'MacBook Pro 13.3" Laptop - Apple M1 chip - 8GB Memory - 512GB SSD - Space Gray',
            pricenew: "$1,049.99",
            priceold: "1,499.99",
          },
          {
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg;maxHeight=272;maxWidth=400",
            name: 'MacBook Pro 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
            pricenew: "$949.99",
            priceold: "1,299.99",
          },
          {
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473765_sd.jpg;maxHeight=272;maxWidth=400",
            name: 'Apple - MacBook Pro 15.4" Intel Core i7,  8GB RAM - 256GB SSD (ME293LL/A) Late 2013 - Pre-Owned - Silver',
            pricenew: "$479.99",
            priceold: "499.99",
          },
          {
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215943_sd.jpg;maxHeight=272;maxWidth=400",
            name: 'Apple Watch Series 7 (GPS) 45mm (PRODUCT)RED Aluminum Case with (PRODUCT)RED Sport Band - (PRODUCT)RED',
            pricenew: "$359.00",
            priceold: "429.00",
          },
          // {
          //   img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6473/6473765_sd.jpg;maxHeight=272;maxWidth=400",
          //   name: 'Apple - MacBook Pro 15.4" Intel Core i7,  8GB RAM - 256GB SSD (ME293LL/A) Late 2013 - Pre-Owned - Silver',
          //   pricenew: "$479.99",
          //   priceold: "499.99",
          // },
        //   {
        //     img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505895_sd.jpg;maxHeight=272;maxWidth=400",
        //     name: 'WD - WD_BLACK SN850 1TB Internal SSD PCIe Gen 4 x4 Officially Licensed for PS5 with Heatsink',
        //     pricenew: "$149.99",
        //     priceold: "249.99",
        //   },
    
    
      ];
    return(

        <Box mt="5rem">
        <Box>
         
          <Heading borderBottom="2px" width="16rem" ml="8px" as="h3" size="lg"  >
           Futurd Porduct
          </Heading>
     
        </Box>
  
        <Divider border="2px" />
  
        <Box className={ViewStyle.boxview}>

          {inspired.map((ele) => {
            return (
              <Box>
                <Box className={ViewStyle.boximg}>
                  <Image src={ele.img} alt="product" />
                </Box>
                <Box className={ViewStyle.boxText}>
                  <Text>{ele.name}</Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      
    )
}