import { Box, Divider, Typography, Container } from "@mui/material";
import RocketIcon from "@mui/icons-material/RocketLaunchRounded";

const Hero = () => (
  <>
    <Box minHeight="20vh" p={2} mb={5} display="flex" justifyContent="center" alignItems="center">
      <Container sx={{ textAlign: "center" }}>
        <Box
          width="fit-content"
          mx="auto"
          my="2rem"
          px={3}
          py={2.4}
          borderRadius={50}
          border="2px solid"
          borderColor="secondary.main"
        >
          <RocketIcon style={{ fontSize: "xxx-large" }} color="primary.main" />
        </Box>
        <Typography variant="h1" color="textPrimary">
          Space Flight News
        </Typography>
      </Container>
    </Box>
    <Divider variant="middle" sx={{ borderWidth: 1, borderColor: "grey.500" }} />
  </>
);

export default Hero;
