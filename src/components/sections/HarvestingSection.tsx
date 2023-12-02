import { Box, Typography } from "@mui/material";
import Section from "../Section";
import CustomCheckBox from "../CustomCheckBox";
import { useEffect, useState } from "react";

type Props = {
  activeStep?: string;
  setScore: (score: number) => void;
};

const HarvestingSection = ({ activeStep, setScore }: Props) => {
  const [method, setMethod] = useState<string | undefined>();

  useEffect(() => {
    if (method === "manual") {
      setScore(1);
    } else if (method === "mechanical") {
      setScore(2);
    } else {
      setScore(0);
    }
  }, [method, setScore]);

  return (
    <Section title="Harvesting" keyWord="harvesting" activeStep={activeStep}>
      <Typography variant="h6">Which harvesting method is used?</Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomCheckBox
          icon="nature_people"
          label="Manual Harvesting"
          checked={method === "manual"}
          onChange={(state) => setMethod(state ? "manual" : undefined)}
          sx={{ width: 210, height: 150, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="agriculture"
          label="Mechanical Harvesting"
          checked={method === "mechanical"}
          onChange={(state) => setMethod(state ? "mechanical" : undefined)}
          sx={{ width: 210, height: 150 }}
        />
      </Box>
    </Section>
  );
};

export default HarvestingSection;
