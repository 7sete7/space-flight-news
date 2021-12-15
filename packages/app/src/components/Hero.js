import { Box, Divider, Typography, Container } from "@mui/material";
import RocketIcon from "@mui/icons-material/RocketLaunchRounded";
import withTheme from "@mui/styles/withTheme";

const Hero = ({ theme }) => (
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
          borderColor="grey.400"
        >
          <RocketIcon style={{ fontSize: "xxx-large" }} color="primary.main" />
        </Box>
        <Typography variant="h1" color="grey.700">
          Space Fligh News
        </Typography>
      </Container>
    </Box>
    <Divider variant="middle" sx={{ borderWidth: 1, borderColor: "grey.500" }} />
  </>
);

export default withTheme(Hero);
