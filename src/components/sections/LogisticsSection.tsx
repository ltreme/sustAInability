import { Box, Divider, TextField, Typography } from "@mui/material";
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

const LogisticsSection = ({ activeStep, setScore }: Props) => {
  const [stored, setStored] = useState<boolean>(false);
  const [days, setDays] = useState<number | null>(null);
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    let score = 0;
    if (stored) {
      if (days) {
        if (days < 30) {
          score += 1;
        } else if (days < 60) {
          score += 2;
        } else if (days < 90) {
          score += 3;
        } else {
          score += 4;
        }
      }
      if (country?.region === "Europe") {
        score += 1;
      } else if (country?.region === "Asia") {
        score += 3;
      } else if (country?.region === "Africa") {
        score += 4;
      } else if (country?.region === "Oceania") {
        score += 2;
      }
    }
    setScore(score);
  }, [setScore, stored, days, country]);

  return (
    <Section title="Logistics" keyWord="logistics" activeStep={activeStep}>
      <Typography variant="h6">Is the T-Shirt stored in a warehose?</Typography>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomCheckBox
          icon="warehouse"
          label="Stored"
          checked={stored}
          onChange={setStored}
          sx={{ width: WIDTH, height: HEIGHT, marginRight: 2 }}
        />
      </Box>
      {stored && (
        <>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6">How long is the T-Shirt stored?</Typography>
          <TextField
            label="Days"
            type="number"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
          />
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Where is the warehouse located?
          </Typography>
          <CountrySelector value={country} onChange={setCountry} />
        </>
      )}
    </Section>
  );
};

export default LogisticsSection;
