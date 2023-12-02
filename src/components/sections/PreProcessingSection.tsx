import { Box, Divider, Typography } from "@mui/material";
import Section from "../Section";
import CustomCheckBox from "../CustomCheckBox";
import { useEffect, useState } from "react";
import CountrySelector, { Country } from "../CountrySelector";

type Props = {
  activeStep?: string;
  setScore: (score: number) => void;
};

const WIDTH = 180;
const HEIGHT = 150;

const PreProcessingSection = ({ activeStep, setScore }: Props) => {
  const [ginning, setGinning] = useState<boolean>(false);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [weaving, setWeaving] = useState<boolean>(false);

  const [dyeing, setDyeing] = useState<boolean>(false);
  const [printing, setPrinting] = useState<boolean>(false);
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    let score = 0;
    if (ginning) {
      score += 1;
    }
    if (spinning) {
      score += 1;
    }
    if (weaving) {
      if (dyeing) {
        score += 1;
      }
      if (printing) {
        score += 1;
      }
      if (country?.region === "Europe") {
        score += 1;
      } else if (country?.region === "Asia") {
        score += 3;
      } else if (country?.region === "Africa") {
        score += 2;
      } else if (country?.region === "Oceania") {
        score += 4;
      }
    }
    setScore(score);
  }, [ginning, spinning, weaving, dyeing, printing, country, setScore]);

  return (
    <Section
      title="Preprocessing of the Material"
      keyWord="preprocessing"
      activeStep={activeStep}
    >
      <Typography variant="h6">Which Preprocessing steps are made?</Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomCheckBox
          icon="snowing"
          label="Ginning"
          checked={ginning}
          onChange={setGinning}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="tornado"
          label="Spinning"
          checked={spinning}
          onChange={setSpinning}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
        <CustomCheckBox
          icon="filter_none"
          label="Weaving + Knitting"
          checked={weaving}
          onChange={setWeaving}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
      </Box>
      {weaving && (
        <>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6">
            Please enter more Details of the process of weaving and knitting of
            cotton fabric.
          </Typography>
          <CountrySelector onChange={setCountry} value={country} />
          <Box
            sx={{
              width: "100%",
              marginTop: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomCheckBox
              icon="format_color_fill"
              label="Dyeing"
              checked={dyeing}
              onChange={setDyeing}
              sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
            />
            <CustomCheckBox
              icon="format_shapes"
              label="Printing"
              checked={printing}
              onChange={setPrinting}
              sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
            />
          </Box>
        </>
      )}
    </Section>
  );
};

export default PreProcessingSection;
