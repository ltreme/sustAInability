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

const PackagingSection = ({ activeStep, setScore }: Props) => {
  const [paper, setPaper] = useState<boolean>(false);
  const [plastic, setPlastic] = useState<boolean>(false);

  useEffect(() => {
    let score = 0;
    if (paper) {
      score += 1;
    }
    if (plastic) {
      score += 2;
    }
    setScore(score);
  }, [paper, plastic, setScore]);

  return (
    <Section title="Packaging" keyWord="packaging" activeStep={activeStep}>
      <Typography variant="h6">Which packaging material is used?</Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomCheckBox
          icon="receipt_long"
          label="Paper"
          checked={paper}
          onChange={setPaper}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="receipt_long"
          label="Plastic"
          checked={plastic}
          onChange={setPlastic}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
      </Box>
    </Section>
  );
};

export default PackagingSection;
