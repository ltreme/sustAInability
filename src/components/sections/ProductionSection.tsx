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

const ProductionSection = ({ activeStep, setScore }: Props) => {
  const [tailoring, setTailoring] = useState<boolean>(false);
  const [cutting, setCutting] = useState<boolean>(false);
  const [embroidery, setEmbroidery] = useState<boolean>(false);

  useEffect(() => {
    let score = 0;
    if (tailoring) {
      score += 1;
    }
    if (cutting) {
      score += 1;
    }
    if (embroidery) {
      score += 1;
    }
    setScore(score);
  }, [tailoring, cutting, embroidery, setScore]);

  return (
    <Section title="Production" keyWord="production" activeStep={activeStep}>
      <Typography variant="h6">
        Select all subprocesses in the production stop of your T-Shirt
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
          icon="shape_line"
          label="Tailoring"
          checked={tailoring}
          onChange={setTailoring}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="cut"
          label="Sewing / Cutting"
          checked={cutting}
          onChange={setCutting}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="draw_collage"
          label="Embroidery"
          checked={embroidery}
          onChange={setEmbroidery}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
      </Box>
    </Section>
  );
};

export default ProductionSection;
