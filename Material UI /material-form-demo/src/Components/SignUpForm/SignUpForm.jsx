import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControl, InputLabel } from "@mui/material";
const BasicTextFields = () => {
  return (
    <FormControl
      sx={{
        m: 1,
        width: "100ch",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        flexDirection: "column",
      }}
      variant="outlined"
    >
      <h1>Login Form</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        textAlign="center"
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email" variant="outlined" />

        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </Box>
      <Button variant="contained">Login</Button>
    </FormControl>
  );
};

export default BasicTextFields;
