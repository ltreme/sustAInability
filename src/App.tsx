import "./App.css";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import StepMenu from "./components/StepMenu";
import MaterialAcquisition from "./components/sections/MaterialAcquisitionSection";
import HarvestingSection from "./components/sections/HarvestingSection";
import PreProcessingSection from "./components/sections/PreProcessingSection";
import ProductionSection from "./components/sections/ProductionSection";
import PackagingSection from "./components/sections/PackagingSection";
import DistributionSection from "./components/sections/DistributionSection";
import LogisticsSection from "./components/sections/LogisticsSection";
import LastMileSection from "./components/sections/LastMileSections";

function App() {
  const [activeStep, setActiveStep] = useState<string>("");

  const [materialScore, setMaterialScore] = useState<number>(0);
  const [harvestingScore, setHarvestingScore] = useState<number>(0);
  const [preProcessingScore, setPreProcessingScore] = useState<number>(0);
  const [productionScore, setProductionScore] = useState<number>(0);
  const [packagingScore, setPackagingScore] = useState<number>(0);
  const [distributionScore, setDistributionScore] = useState<number>(0);
  const [logisticsScore, setLogisticsScore] = useState<number>(0);
  const [lastMileScore, setLastMileScore] = useState<number>(0);

  const totalScore =
    materialScore +
    harvestingScore +
    preProcessingScore +
    productionScore +
    packagingScore +
    distributionScore +
    logisticsScore +
    lastMileScore;

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Grid container>
        <Grid
          item
          xs={4}
          lg={2}
          sm={3}
          sx={{ height: "100vh", margin: 0, padding: 0 }}
        >
          <Paper sx={{ height: "100vh" }}>
            <Box sx={{ paddingTop: 4, paddingX: 2 }}>
              <Typography variant="h4" color="gray">
                LOGO
              </Typography>
              <StepMenu
                activeStep={activeStep}
                onChange={setActiveStep}
                totalScore={totalScore}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={8} sm={9} lg={10}>
          <MaterialAcquisition
            activeStep={activeStep}
            setScore={setMaterialScore}
          />
          <HarvestingSection
            activeStep={activeStep}
            setScore={setHarvestingScore}
          />
          <PreProcessingSection
            activeStep={activeStep}
            setScore={setPreProcessingScore}
          />
          <ProductionSection
            activeStep={activeStep}
            setScore={setProductionScore}
          />
          <PackagingSection
            activeStep={activeStep}
            setScore={setPackagingScore}
          />
          <DistributionSection
            activeStep={activeStep}
            setScore={setDistributionScore}
          />
          <LogisticsSection
            activeStep={activeStep}
            setScore={setLogisticsScore}
          />
          <LastMileSection
            activeStep={activeStep}
            setScore={setLastMileScore}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
