import { Icon, SxProps } from "@mui/material";

type Props = {
  size?: "small" | "medium" | "inherit" | "large";
  sx?: SxProps;
  icon: string;
};
const IconOutlined = ({ size, sx, icon }: Props) => {
  return (
    <Icon
      sx={sx}
      fontSize={size ?? "medium"}
      baseClassName="material-symbols-outlined"
    >
      {icon}
    </Icon>
  );
};

export default IconOutlined;
