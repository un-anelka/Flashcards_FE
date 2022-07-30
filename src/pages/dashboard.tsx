import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import InputForm from "../components/inputForm";
import {
  allBooksQuery,
  ADD_LINK,
  DELETE_LINK,
  UPDATE_LINK,
} from "../lib/querries";
import EditDialogue from "../components/EditDialogue";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";

const Books = () => {
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");
  console.log("old new", token);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    console.log("GetToken", getToken);
    //@ts-ignore
    setToken(getToken);
  });
  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.description.value);
    console.log(e.target.url.value);
    AddNewLink({
      variables: {
        description: e.target.description.value,
        url: e.target.url.value,
      },
    });
  };
  const [AddNewLink] = useMutation(ADD_LINK, {
    onCompleted: (data) => {
      window.location.reload();
    },
  });

  // Delete Links
  const [delete_Link] = useMutation(DELETE_LINK, {
    onCompleted: (data) => {
      window.location.reload();
    },
  });
  //@ts-ignore
  const onDelete = (e) => {
    let target_id = e.target.parentElement.parentElement.id;
    console.log("deleted link", target_id);
    delete_Link({ variables: { id: target_id } });
  };

  // update Links
  const [Update_Link] = useMutation(
    UPDATE_LINK,

    {
      onCompleted: (data) => {
        window.location.reload();
      },
    }
  );

  console.log("==>", id);
  //@ts-ignore
  const onUpdate = (e) => {
    e.preventDefault();
    let target_id = id;
    //   console.log("=========", target_id);
    Update_Link({
      variables: {
        id: target_id,
        description: e.target.parentElement.parentElement.description.value,
        url: e.target.parentElement.parentElement.url.value,
      },
      refetchQueries: [{ query: allBooksQuery }],
    });
  };

  // @ts-ignore
  const handleClickOpen = (e) => {
    e.preventDefault();
    let updateid = e.target.parentElement.id;
    // console.log("id", updateid);
    setId(updateid);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //Query links
  const { error, loading, data } = useQuery(allBooksQuery);
  if (loading) {
    console.log("loading...");
    return <Skeleton />;
  }
  if (error) {
    console.log("error!");
    return <h3>Oops! something went wrong, {error.message}</h3>;
  }

  //@ts-ignore
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("handle update");
  };

  return (
    <div>
      <div className="container">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update Link</DialogTitle>

          <form onSubmit={handleUpdate}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                name="url"
                label="Url"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="description"
                name="description"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Update</Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>

      {/* <EditDialogue /> */}
      <InputForm onSubmit={onSubmit} />
      {data.feed.map((link: any) => (
        // <div key={link.id} id={link.id} className="card-grid home">
        <div key={link.id} id={link.id} className="links">
          <div>
            <h2>URL</h2>
            <p>{link.url}</p>
          </div>
          <div>
            <h2>Descripition</h2>
            <p>{link.description}</p>
          </div>
          <div className="edit-delete-btn">
            <Button
              className="button edit-btn"
              onClick={handleClickOpen}
              variant="contained"
              sx={{
                backgroundColor: "#dde4dc",
                color: "black",
                fontWeight: "700",
                "&:hover": {
                  backgroundColor: "#dde4dd",
                  color: "black",
                  opacity: 0.8,
                },
              }}
            >
              Edit
            </Button>
            <Button
              className="button delete-btn"
              onClick={onDelete}
              variant="contained"
              sx={{
                backgroundColor: "#711608",
                color: "#e7f0f2",
                fontWeight: "700",
                "&:hover": {
                  backgroundColor: "#711608",
                  opacity: 0.8,
                },
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
