import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import StepMenuItem from "./StepMenuItem";
import IconOutlined from "./IconOutlined";

type Props = {
  activeStep?: string;
  onChange?: (keyWord: string) => void;
  totalScore?: number;
};

const StepMenu = ({ activeStep, onChange, totalScore }: Props) => {
  return (
    <MenuList>
      <StepMenuItem
        icon={"grass"}
        text="Material Acquisition"
        activeStep={activeStep}
        keyWord="material_acquisition"
        onClick={onChange}
      />
      <StepMenuItem
        icon={"agriculture"}
        text="Harvesting"
        activeStep={activeStep}
        keyWord="harvesting"
        onClick={onChange}
      />
      <StepMenuItem
        icon={"linear_scale"}
        text="Preprocessing of cotton"
        activeStep={activeStep}
        keyWord="preprocessing"
        onClick={onChange}
      />
      <StepMenuItem
        icon={"factory"}
        text="Production"
        activeStep={activeStep}
        keyWord="production"
        onClick={onChange}
      />
      <StepMenuItem
        icon={"inventory"}
        text="Packaging"
        activeStep={activeStep}
        keyWord="packaging"
        onClick={onChange}
      />
      <StepMenuItem
        icon={"local_shipping"}
        text="Distribution"
        activeStep={activeStep}
        keyWord="distribution"
        onClick={onChange}
      />
      <StepMenuItem
        icon={"warehouse"}
        text="Logistics"
        activeStep={activeStep}
        keyWord="logistics"
        onClick={onChange}
      />
      <StepMenuItem
        icon={"local_mall"}
        text="Last Mile"
        activeStep={activeStep}
        keyWord="last_mile"
        onClick={onChange}
      />
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <IconOutlined sx={{ color: "#682a85" }} icon={"readiness_score"} />
        </ListItemIcon>
        <ListItemText sx={{ color: "#682a85" }}>
          Current Score: {totalScore}
        </ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export default StepMenu;
