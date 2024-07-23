import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
import "./index.css";
import Modal from "@mui/material/Modal";
import { Box, TextField, Button, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Aeps from "../Aeps/Aeps";
import Features from "../Features/Features";
import Achievements from "../Achievements/Achievements";
import AepsWorking from "../AepsWorking/AepsWorking";
import Steps from "../Steps/Steps";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import OurSoftwares from "../OurSoftwares/OurSoftwares";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import { phoneRegExp } from "../../constants/constant";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const LandingForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    formik.resetForm();
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
  };
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey.500",
      },
      "&:hover fieldset": {
        borderColor: "grey.500",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9b0d2e",
      },
    },
    "& .MuiInputLabel-root": {
      color: "grey.500",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#9b0d2e",
    },
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await addDoc(collection(db, "form"), {
          formData: values,
        });
        handleClose();
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  });

  return (
    <div>
      <Navbar />
      <Hero handleOpen={handleOpen} />
      <Aeps handleOpen={handleOpen} />
      <Features />
      <Achievements />
      <AepsWorking handleOpen={handleOpen} />
      <Steps handleOpen={handleOpen} />
      <WhyChooseUs />
      <OurSoftwares />
      <FAQ />
      <Footer handleOpen={handleOpen} />
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              ...style,
              width: "80%",
              maxWidth: "800px",
              position: "relative",
              padding: 4,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "grey.500",
                backgroundColor: "white",
                boxShadow: "0 0 10px 0 #bbb",
              }}
            >
              <CloseIcon />
            </IconButton>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className="modalLeft">
                  <div className="modalLeftTop">
                    <div className="modalHeading">
                      <h3>Earning made easy</h3>
                      <h4>Dive into our AEPS.</h4>
                    </div>
                    <div className="modalLogo">
                      <img
                        src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299105/MayaWebTech/drkvs1qtuisx7wmvftbf.png"
                        alt="logo"
                        width={100}
                      />
                    </div>
                  </div>
                  <form className="modalForm" onSubmit={formik.handleSubmit}>
                    <TextField
                      fullWidth
                      label="Name"
                      margin="normal"
                      variant="outlined"
                      name="name"
                      value={formik.values.name || ""}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      sx={inputStyle}
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      margin="normal"
                      variant="outlined"
                      name="phoneNumber"
                      value={formik.values.phoneNumber || ""}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.phoneNumber &&
                        Boolean(formik.errors.phoneNumber)
                      }
                      helperText={
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                      }
                      sx={inputStyle}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      margin="normal"
                      variant="outlined"
                      name="email"
                      value={formik.values.email || ""}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      sx={inputStyle}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="modalSubmitButton"
                      type="submit"
                    >
                      Get Started
                    </Button>
                  </form>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="modalRight">
                  <img
                    src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721711021/duplicate_fintech_form_4_x076xe.png"
                    alt=""
                    width={500}
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default LandingForm;

export const Card = ({ TopText, Rating, SubHeading, cl }) => {
  return (
    <div className={`mainCard ${cl}`}>
      <div className="cardTopText">{TopText}</div>
      <div className="midRating">
        {Rating.map((item, ind) => (
          <span key={ind}>{item}</span>
        ))}
      </div>
      <div className="subHead">{SubHeading}</div>
    </div>
  );
};
