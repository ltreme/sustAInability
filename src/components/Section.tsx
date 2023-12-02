import { Box, Container, Typography } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  title: string;
  keyWord?: string;
  activeStep?: string;
};

const Section = ({ children, title, keyWord, activeStep }: Props) => {
  if (keyWord === activeStep) {
    return (
      <Container sx={{ paddingTop: 2 }}>
        <Typography variant={"h3"}>{title}</Typography>
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Container>
    );
  }

  return null;
};

export default Section;
