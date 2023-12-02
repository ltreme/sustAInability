import { Box, Typography } from "@mui/material";
import Section from "../Section";
import CustomCheckBox from "../CustomCheckBox";
import { useEffect, useState } from "react";

type Props = {
  activeStep?: string;
  setScore: (score: number) => void;
};

const MaterialAcquisitionSection = ({ activeStep, setScore }: Props) => {
  const [material, setMaterial] = useState<string | undefined>();

  useEffect(() => {
    if (material === "organic") {
      setScore(1);
    } else if (material === "non_organic") {
      setScore(2);
    } else {
      setScore(0);
    }
  }, [material, setScore]);

  return (
    <Section
      title="Material Acquisition"
      keyWord="material_acquisition"
      activeStep={activeStep}
    >
      <Typography variant="h6">Which type of cotton fiber is used?</Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomCheckBox
          icon="grass"
          label="Organic Cotton"
          checked={material === "organic"}
          onChange={(state) => setMaterial(state ? "organic" : undefined)}
          sx={{ width: 200, height: 150, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="circles_ext"
          label="Non-Organic Cotton"
          checked={material === "non_organic"}
          onChange={(state) => setMaterial(state ? "non_organic" : undefined)}
          sx={{ width: 200, height: 150 }}
        />
      </Box>
    </Section>
  );
};

export default MaterialAcquisitionSection;
