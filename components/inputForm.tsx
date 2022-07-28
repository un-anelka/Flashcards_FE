import React from "react";
import { Button, TextField } from "@mui/material";

//@ts-ignore
const InputForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="links">
      {/* <input placeholder="url" fullWidth variant="filled" name="url" /> */}
      <TextField
        placeholder="URL"
        name="url"
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        placeholder="Description"
        variant="filled"
        multiline
        rows={3}
        name="description"
        sx={{ mt: 2, mb: 1, backgroundColor: "white" }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#dde4dc",
          color: "black",
          fontWeight: "700",
          "&:hover": {
            backgroundColor: "#dde4dd",
            opacity: 0.8,
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default InputForm;
