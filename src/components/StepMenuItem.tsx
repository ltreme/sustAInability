import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import IconOutlined from "./IconOutlined";

type Props = {
  icon: string;
  text: string;
  onClick?: (keyWord: string) => void;
  keyWord?: string;
  activeStep?: string;
};

const StepMenuItem = ({ icon, text, onClick, activeStep, keyWord }: Props) => {
  const active: boolean = activeStep === keyWord;

  return (
    <MenuItem
      sx={{
        paddingY: 2,
        borderRadius: 2,
        background: active ? "#682a85" : undefined,
        color: active ? "white" : undefined,
        "&:hover": {
          background: active ? "#682a85" : "#f5f5f5",
          color: active ? "white" : undefined,
        },
      }}
      onClick={() => onClick && keyWord && onClick(keyWord)}
    >
      <ListItemIcon>
        <IconOutlined
          sx={{ color: active ? "white" : undefined }}
          icon={icon}
        />
      </ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
};

export default StepMenuItem;
