import { useState } from "react";
import {Snackbar, Alert} from '@mui/material';
import EmailForm from "../components/EmailForm";
import "../styles/contact.css"

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(true);
  const [snackbarType, setSnackbarType] = useState({
    severity: "",
    message: ""
  });

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const setAndOpenSnackbar = (severity, message) => {
    setSnackbarType({
      severity: severity,
      message: message
    });
    setOpenSnackbar(true);
  }

  return (
    <div className="section-root" id="contact">
      <p className="sub-text highlight-text">Get in Touch</p>
      <h3 className="large-text">Got a question or proposal, or just want to say hello? 
      <span className="highlight-text"> Shoot me a message</span>.</h3>
      <EmailForm setAndOpenSnackbar={setAndOpenSnackbar}/>
      {openSnackbar &&
        <Snackbar open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbarType.severity} sx={{ width: '100%' }}>
            {snackbarType.message}
          </Alert>
        </Snackbar>
        }
    </div>
  )
}

export default Contact
