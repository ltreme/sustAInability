import { Avatar, Box, SxProps, Typography } from "@mui/material";
import IconOutlined from "./IconOutlined";

type Props = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
  icon: string;
  sx?: SxProps;
};

const CustomCheckBox = ({ onChange, checked, label, icon, sx }: Props) => {
  return (
    <Box
      sx={{
        height: "100%",
        borderStyle: "solid",
        borderColor: checked ? "#682a85" : "#f5f5f5",
        paddingY: 1,
        paddingX: 2,
        borderRadius: 2,
        cursor: "pointer",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...sx,
      }}
      onClick={() => onChange && onChange(!checked)}
    >
      <Avatar sx={{ backgroundColor: checked ? "#bc95cf" : undefined }}>
        <IconOutlined
          sx={{ color: checked ? "#682a85" : undefined }}
          icon={icon}
        />
      </Avatar>
      <Typography variant={"h6"} color={checked ? "#682a85" : undefined}>
        {label}
      </Typography>
    </Box>
  );
};

export default CustomCheckBox;
