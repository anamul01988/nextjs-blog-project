import * as React from "react";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// for tab start
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, styled, TextField } from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// for tab end
// for tab end
const ModalStyle = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
}); //aikhane styhledBox mane hocce ekta box style kora hoice orthat code reduce kora hoice
const SocialBox = styled(Box)(({ myBgColor }) => ({
  background: myBgColor,
  padding: 4,
  textAlign: "center",
  width: "60px",
  marginLeft: 1,
  cursor: "pointer",
}));
// for tab start
export default function LoginRegisterModal(props) {
  console.log("props for modal", props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", display: 'flex', justifyContent:'flex-end'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Sign Up" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <StyledBox
              sx={{
                // backgroundImage:
                //   'url("https://cdn.pixabay.com/photo/2016/03/01/12/24/flowers-123")',
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg")',
                backgroundSize: "cover",
              }}
            >
              <Box flex={1}>
                <Typography variant="h4">Welcome back, Coder!</Typography>
                <Typography variant="body1">
                  Thank you for being a codingstrade subscriber. I feel lucky
                  that I get to connect with so many people like you. <br />{" "}
                  Condingstrade
                </Typography>
                <Typography variant="body1">
                  <br /> <br /> Not a Codingstrade subscriber yet?
                </Typography>
              </Box>
              <Box flex={1}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  variant="filled"
                  fullWidth
                  sx={{ marginTop: 1, marginBottom: 1 }}
                />
                <Button
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#0049fb",
                    color: "white",
                    width: 300,
                    padding: 1,
                  }}
                >
                  Login
                </Button>
                <Typography variant="body1">
                  <br /> <br /> Or log in with your social account:
                </Typography>
                <StyledBox>
                  <SocialBox myBgColor={"lightBlue"}>
                    <Twitter sx={{ color: "white" }} />
                  </SocialBox>
                  <SocialBox myBgColor={"blue"}>
                    <Facebook sx={{ color: "white" }} />
                  </SocialBox>
                </StyledBox>
              </Box>
            </StyledBox>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <StyledBox
              sx={{
                // backgroundImage:
                //   'url("https://cdn.pixabay.com/photo/2016/03/01/12/24/flowers-123")',
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2022/12/21/08/40/rose-7669467_640.jpg")',
                backgroundSize: "cover",
              }}
            >
              <Box flex={1}>
                <Typography variant="h4">Become a Subscriber</Typography>
                <Typography variant="body1">
                  Thank you for being a codingstrade subscriber. I feel lucky
                  that I get to connect with so many people like you. <br />{" "}
                  Condingstrade. Join the Condignstrade community to get regular updates from coding
                  on key topics like javascript , C#, php and more, to ccess exclusively conent, comment
                  on videos.
                </Typography>
                <Typography variant="body1">
                  <br /> <br /> Already joined?
                </Typography>
              </Box>
              <Box flex={1}>
              <Typography variant="body1">
                  <br /> <br /> Use your social account:
                </Typography>
                <StyledBox>
                  <SocialBox myBgColor={"lightBlue"}>
                    <Twitter sx={{ color: "white" }} />
                  </SocialBox>
                  <SocialBox myBgColor={"blue"}>
                    <Facebook sx={{ color: "white" }} />
                  </SocialBox>
                </StyledBox>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="filled"
                  fullWidth
                  sx={{marginRight: 1, marginTop: 1}}
                />
                <TextField
                  id="outlined-password-input"
                  label="Last Name"
                //   type="password"
                  variant="filled"
                  fullWidth
                  sx={{ marginTop: 1 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email Adress"
                //   type="password"
                  variant="filled"
                  fullWidth
                  sx={{ marginTop: 1 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="filled"
                  fullWidth
                  sx={{ marginTop: 1 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Postal code"
                  variant="filled"
                  fullWidth
                  sx={{ marginTop: 1, marginBottom: 1 }}
                />
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="filled"
                  fullWidth
                  sx={{ marginTop: 1 }}
                />
                <Button
                  sx={{
                    textAlign: "center",
                    backgroundColor: "#0049fb",
                    color: "white",
                    width: 300,
                    padding: 1,
                  }}
                >
                  Sign Up
                </Button>
                
              </Box>
            </StyledBox>
          </TabPanel>
        </Box>
      </Modal>
    </div>
  );
}
