import { Box, Typography } from "@mui/material";
import Section from "../Section";
import CustomCheckBox from "../CustomCheckBox";
import { useEffect, useState } from "react";

type Props = {
  activeStep?: string;
  setScore: (score: number) => void;
};

const WIDTH = 180;
const HEIGHT = 150;

const LastMileSection = ({ activeStep, setScore }: Props) => {
  const [lastMile, setLastMile] = useState<string | undefined>(undefined);

  useEffect(() => {
    let score = 0;
    if (lastMile === "store") {
      score += 1;
    } else if (lastMile === "customer") {
      score += 2;
    }
    setScore(score);
  }, [setScore, lastMile]);

  return (
    <Section title="Last Mile" keyWord="last_mile" activeStep={activeStep}>
      <Typography variant="h6">
        Is it delivered directly to the customer or to a store?
      </Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomCheckBox
          icon="store"
          label="Store"
          checked={lastMile === "store"}
          onChange={(state) => setLastMile(state ? "store" : undefined)}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="local_shipping"
          label="Customer"
          checked={lastMile === "customer"}
          onChange={(state) => setLastMile(state ? "customer" : undefined)}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
      </Box>
    </Section>
  );
};

export default LastMileSection;
