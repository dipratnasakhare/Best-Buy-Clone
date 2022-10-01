import { Text, Box } from "@chakra-ui/react";
import styled from "./footerlogin.module.css";
export default function FooterLogin() {
  let terms = [
    {
      name: "Terms and Condition",
    },
    {
      name: "privacy",
    },
    {
      name: "Intreset-Based Ads",
    },
  ];

  return (
    <div className={styled.main}>
      <div className={styled.box}>

        <div >
          {terms.map((ele) => {
            return (
              <div>
                <Text mr="10px" color={"blue"}>
                  {ele.name}
                </Text>
              </div>
            );
          })}
        </div>

        <div>
          <Text>Mobile Site</Text>
        </div>

        <div>
          <Box>
            <Text>
              In-store pricing may vary. Prices and offers are subject to
              change. © 2022 Best Buy. All rights reserved. BEST BUY, the BEST
              BUY logo, the tag design, and MY BEST BUY are trademarks of Best
              Buy and its affiliated companies.
            </Text>
          </Box>
        </div>

      </div>
    </div>
  );
}
