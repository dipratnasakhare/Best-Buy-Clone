import { Box } from "@chakra-ui/react";
import FirstBox from "./Product_Component/FirstBox";
import SecBox from "./Product_Component/SecBox"
import ThirdBox from "./Product_Component/ThirdBox";
import ForthBox from "./Product_Component/ForthBox";
import FifthBox from "./Product_Component/FifthBox"
import SixBox from "./Product_Component/Sixbox"
import SevenBox from "./Product_Component/SevenBox"
import EightBox from "./Product_Component/EightBox"
import NineBox from "./Product_Component/NineBox"
import TenBox from "./Product_Component/TenBox"
export default function Product() {
  return (

    <Box
      className="product"
      style={{
        marginTop: "1rem",
        width:"auto"
      }}
    >
      <FirstBox/>

      <SecBox/>

      <ThirdBox/>

      <ForthBox/>

      <FifthBox/>

      <SixBox/>

      <SevenBox/>

      <EightBox/>

      <NineBox/>

      <TenBox/>
      
    </Box>
  );
}
