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

const DistributionSection = ({ activeStep, setScore }: Props) => {
  const [ship, setShip] = useState<boolean>(false);
  const [train, setTrain] = useState<boolean>(false);
  const [plane, setPlane] = useState<boolean>(false);
  const [truck, setTruck] = useState<boolean>(false);

  useEffect(() => {
    let score = 0;
    if (ship) {
      score += 1;
    }
    if (train) {
      score += 1;
    }
    if (plane) {
      score += 3;
    }
    if (truck) {
      score += 2;
    }
    setScore(score);
  }, [ship, train, plane, truck, setScore]);

  return (
    <Section
      title="Distribution"
      keyWord="distribution"
      activeStep={activeStep}
    >
      <Typography variant="h6">
        Select all transport methods used in the distribution of your T-Shirt
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
          icon="directions_boat"
          label="Ship"
          checked={ship}
          onChange={setShip}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="train"
          label="Train"
          checked={train}
          onChange={setTrain}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="travel"
          label="Plane"
          checked={plane}
          onChange={setPlane}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="local_shipping"
          label="Truck"
          checked={truck}
          onChange={setTruck}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
      </Box>
    </Section>
  );
};

export default DistributionSection;
