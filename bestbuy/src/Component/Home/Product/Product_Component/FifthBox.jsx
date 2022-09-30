import { Heading, Divider, Image } from "@chakra-ui/react";

import { Text, Box } from "@chakra-ui/react";
import ViewStyle from "./CSS Box/FifthBox.module.css";

export default function Offers() {
  let inspired = [
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_MMT-591740_der-4dea32e8-129f-4a98-9b48-65e99374ad3f.jpg;maxHeight=504;maxWidth=740",
      heading: "Gather in style this season.",
      text: "Find deals on major appliances to upgrade your space.",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-grilling-mmt585033-f86aea53-dc73-42f0-994f-e49f78a888f1.jpg;maxHeight=504;maxWidth=740",
      heading: "Win on the road and in the parking lot.",
      text: "It’s football time. Explore portable, game-ready grills from Weber, Traeger, Pit Boss and Everdure.",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_MMT-591613_der-8a7c5535-0e45-49f6-8c0f-de70ad8d8db6.jpg;maxHeight=504;maxWidth=740",
      heading: "Introducing Marshmello x CRUX.",
      text: "Satisfy your cravings with CRUX appliances and accessories.",
    },
  ];

  let insorance = [
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-37875-app-curbside-vpe_der-149659.png;maxHeight=160;maxWidth=160",
      name: "Ready in one hour",
      data: "with Store or Curbside Pickup.",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/thmb_EVN-202974_delivery_der-7f3edede-53ec-4d3e-ba2e-b9546e97d4ae.jpg;maxHeight=160;maxWidth=160",
      name: "Free next-day delivery",
      data: "on thousands of items.",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=160;maxWidth=160",
      name: "Same-day delivery.",
      data: "Order by 2 p.m., get it by 8 p.m.",
    },
  ];

  return (
    <Box mt="5rem">
      <Box>
        <Heading borderBottom="2px" width="17rem" ml="8px" as="h3" size="lg">
          our Featured offer
        </Heading>
      </Box>

      <Divider border="2px" style={{opacity:"100%"}}/>

      <Box className={ViewStyle.boxview}>
        {inspired.map((ele) => {
          return (
            <Box>
              <Box className={ViewStyle.boximg}>
                <Image src={ele.img} alt="product" />
              </Box>
              <Box className={ViewStyle.boxText}>
                <Heading color="blue" as="h4" size="md" className={ViewStyle.lastteaxt}>
                  {ele.heading}
                </Heading>
              </Box>
              <Box >
                <Text>{ele.text}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box className={ViewStyle.docterbox}>
        <Box>
          <div>
            {" "}
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-confident-210831-c34d2a74-8b79-41cd-8161-b9987666f7d6.png;maxHeight=72;maxWidth=72" />
          </div>
          <div>
            <Heading>Shop safely and confidently.</Heading>
            <Text color="blue">See our safety procedures</Text>
          </div>
        </Box>
        <Box>
          <div>
            {" "}
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png;maxHeight=72;maxWidth=72" />
          </div>
          <div>
            <Heading>Shop with an expert, right from home.</Heading>
            <Text>
              Satisfy your cravings with CRUX appliances and accessories.
            </Text>
            <Text  color="blue">Shop with an Expert</Text>
          </div>
        </Box>
      </Box>

      <Box className={ViewStyle.docterinsorance}>
        {insorance.map((ele) => {
          return (
            <Box>
              <div>
                {" "}
                <Image src={ele.img} />
              </div>
              <div>
                <Heading as="h3" size="lg" mb={3}>
                  {ele.name}
                </Heading>
                <Text color="blue">{ele.data}</Text>
              </div>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
