import { Box, Text, Image } from "@chakra-ui/react";
import styled from "./stylebox/FirstBox.module.css";

export default function footer() {
  let first = [
    {
      text: "Check Order Status",
    },
    {
      text: "Shipping, Delivery & Pickup",
    },
    {
      text: "Returns & Exchanges",
    },
    {
      text: "Price Match Guarantee",
    },
    {
      text: "Product Recalls",
    },
    {
      text: "Trade-In Program",
    },
    {
      text: "Gift Cards",
    },
  ];
  let second = [
    {
      text: "Visit our Support Center",
    },
    {
      text: "Shop with an Expert",
    },
    {
      text: "Schedule a Service",
    },
    {
      text: "Manage an Appointment",
    },
    {
      text: "Protection & Support Plans",
    },
    {
      text: "Haul Away & Recycling",
    },
    {
      text: "Contact Us",
    },
  ];
  let third = [
    {
      text: "Affiliate Program",
    },
    {
      text: "Advertise with Us",
    },
    {
      text: "Developers",
    },
    {
      text: "Best Buy Health",
    },
    {
      text: "Best Buy Education",
    },
    {
      text: "Best Buy Business",
    },
  ];
  let forth = [
    {
      text: "My Best Buy® Credit Card",
    },
    {
      text: "Pay Your Bill at Citibank",
    },
    {
      text: "Lease to Own",
    },
  ];
  let five = [
    {
      text: "Best Buy Totaltech",
    },
    {
      text: "My Best Buy",
    },
    {
      text: "View Points & Certificates",
    },
    {
      text: "Member Offers",
    },
  ];
  let six = [
    {
      text: "Corporate Information",
    },
    {
      text: "Careers",
    },
    {
      text: "Corporate Responsibility & Sustainability",
    },
    {
      text: "Discover & Learn",
    },
  ];

  return (
    <Box className={styled.box}>
      <Box>
        <Text color="black">Order & Purchases</Text>
        {first.map((ele) => {
          return <Box><Text   color="blue">{ele.text}</Text></Box>;
        })}
      </Box>

      <Box>
        <Text color="black">Support & Services</Text>
        {second.map((ele) => {
          return <Box><Text   color="blue">{ele.text}</Text></Box>;
        })}
      </Box>

      <Box>
        <Text color="black">Partnerships</Text>
        {third.map((ele) => {
          return <Box><Text   color="blue">{ele.text}</Text></Box>;
        })}
      </Box>

      <Box>
        <Text color="black">Payment Options</Text>
        {forth.map((ele) => {
          return <Box><Text   color="blue">{ele.text}</Text></Box>;
        })}
      </Box>

      <Box>
        <Text color="black">Rewards & Membership</Text>
        {five.map((ele) => {
          return <Box><Text   color="blue">{ele.text}</Text></Box>;
        })}
      </Box>

      <Box>
        <Text color="black">About Best Buy</Text>
        {six.map((ele) => {
          return <Box><Text     color="blue">{ele.text}</Text></Box>;
        })}
      </Box>
    </Box>
  );
}
