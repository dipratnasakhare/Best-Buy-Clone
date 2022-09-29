import { Box, Text, Heading, Divider, Image } from "@chakra-ui/react";

import ViewStyle from "./CSS Box/EightBox.module.css";

export default function Offers() {
  let dataNetork = [
    {
      heading:"We’re driven by our impact",
      firstimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77071-explore-visibility-220915-8078e275-af0e-4488-bd04-2419e4205ebc.jpg;maxHeight=432;maxWidth=432",
      firstname: "More visibility. More leadership.",
      secondimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-75623-explore-ttc-220725-2f672aa8-0203-4705-a230-641553d4a672.jpg;maxHeight=432;maxWidth=432",
      secondname: "Building brighter futures for teens through tech",
      thirdimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77071-explore-sustainability-220915-8b0a7765-63e4-4934-b39f-0bbf363f371e.jpg;maxHeight=432;maxWidth=432",
      thirdname: "Sustainability is part of our ecosystem",
      forthimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77071-explore-blueshirt-220915-f5f9b0c9-cb33-4580-a519-e778bada05d9.jpg;maxHeight=432;maxWidth=432",
      forthname: "We’re committed to making a difference",
    },
    {
      heading:"Get inspired by Roku Idea House",
      firstimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77375-explore-ring-526ac4b4-ff49-4461-a1e1-8311d59ae23b.jpg;maxHeight=432;maxWidth=432",
      firstname: "Secure your home with Ring",
      secondimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77375-explore-home-expert-333f2f49-4384-4080-aa2d-70360ced9543.jpg;maxHeight=432;maxWidth=432",
      secondname: "Make the most of your home office",
      thirdimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77375-explore-entertainment-41036d38-d4ad-46a2-a191-254396b279c0.jpg;maxHeight=432;maxWidth=432",
      thirdname: "Create family room fun",
      forthimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77375-explore-appls-7aa45210-b3f8-4ec1-bb91-5e3f95cff9db.jpg;maxHeight=432;maxWidth=432",
      forthname: "Reimagine your laundry room",
    },
    {
      heading:"Let’s work together",
      firstimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73227-flex-help-220425-d8f91c99-3a5a-407f-8435-9af6d0e65d3e.jpg;maxHeight=432;maxWidth=432",
      firstname: "Free home consultation",
      secondimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73227-flex-tv-install-220425-fc73bc82-5ae4-4f5f-b517-9ed6030d4ba8.jpg;maxHeight=432;maxWidth=432",
      secondname: "Totaltech membership",
      thirdimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73227-flex-cc-220425-edd4870c-fbc5-4237-b8ba-4fabaaf90718.jpg;maxHeight=432;maxWidth=432",
      thirdname: "My Best Buy® Credit Card",
      forthimg:
        "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-73227-flex-hm-consult-220425-86b9c3f3-3a19-4656-be59-a24bec08934d.jpg;maxHeight=432;maxWidth=432",
      forthname: "Best Buy Home Guidebook",
    },
  ];

  return (
    <Box mt="5rem" className={ViewStyle.Boxbar}>
      {dataNetork.map((ele) => {
        return (
          <Box>
            <Heading as='h3' size='lg'>{ele.heading}</Heading>

            <Box className={ViewStyle.barBox}>
              <Box>
                <Image src={ele.firstimg} />
                <Text color="blue">{ele.firstname}</Text>
              </Box>
              <Box>
                <Image src={ele.secondimg} />
                <Text color="blue">{ele.secondname}</Text>
              </Box>
              <Box>
                <Image src={ele.thirdimg} />
                <Text color="blue">{ele.thirdname}</Text>
              </Box>
              <Box>
                <Image src={ele.forthimg} />
                <Text color="blue">{ele.forthname}</Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
