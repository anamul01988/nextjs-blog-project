import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import {
  Alert,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function FormModal(props) {
    const [openSnack, setOpenSnack ]= useState(true);
const [message, setMessage]= useState('');
  const router = useRouter();
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const [values, setValues] = useState(
    props.posts
      ? {
          title: props.posts.title,
          imageUrl: props.posts.imageUrl,
          excerpt: props.posts.excerpt,
          content: props.posts.content,
          author: props.posts.author,
          featured: props.posts.featured,
          category_name: props.posts.category_name,
        }
      : {
          title: "",
          imageUrl: "",
          excerpt: "",
          content: "",
          author: "",
          featured: 0,
          category_name: "",
        }
  );
  //create and update posts
  const postData = async () => {
    // const router = useRouter();
    const res = `${
      props.post
        ? await axios.put(
            `http://localhost:3000/api/post/${props.posts.post_id}`,
            values
          ).then(setMessage("Post updated Successfully"))
        : await axios.post("http://localhost:3000/api/post", values)
        .then(setMessage("Post updated Successfully"))
    }`;
    const postData = await res.data;
    return postData;
  };
  //Delete Posts
  const deletePost = async () => {
    console.log("delete korte ashce");
    const res = `${await axios.delete(
      `http://localhost:3000/api/post/${props.posts.post_id}`
    )}`;
    const postData = await res.data;
    return () => {
      postData;
      router.push("/");
    };
  };
  const handleDelete = (e) => {
    e.preventDefault(), deletePost(); //id pass kora lagbe nah cause modal tai ai post ta jeita delete hobe
    setMessage('post Deleted!')
    setOpenSnack(true)
    router.push("/");
  };
  //save data and redirect to homepage
  const handleSubmit = (e) => {
    e.preventDefault(), postData(values);
    // setMessage('post created!')
    setOpenSnack(true)
    router.push("/");
  };
  const handleChange = (e) => {
    setValues((prevState) => ({
      //aikhaner prevState ta setValues er ager value memorize kore rakhe
      // ... dot diye niye ashlam memorize kriot value tarpor update korar jonno input er name propertay use kore update korbo. ar create korte caile to ager empty string chole ashbe ... er karone then ja input a dibo ta boshe jabe
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //fetch all categories
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/category");
        setCats(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnack}
        autoHideDuration={2000}
        onClose={()=>setOpenSnack(!openSnack)}
      >
        <Alert onClose={()=>setOpenSnack(!openSnack)} severity="success" sx={{width:"100%"}}>
            {message}
        </Alert>
      </Snackbar>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          {props.posts ? (
            <DialogTitle>Update Post </DialogTitle>
          ) : (
            <DialogTitle>Create Post </DialogTitle>
          )}
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                onChange={handleChange}
                name="title"
                value={values.title}
                required
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                fullWidth
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                name="imageUrl"
                value={values.imageUrl}
                required
                autoFocus
                margin="dense"
                id="imageUrl"
                label="imageUrl"
                fullWidth
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                name="excerpt"
                value={values.excerpt}
                required
                autoFocus
                margin="dense"
                id="excerpt"
                label="excerpt"
                fullWidth
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                name="content"
                value={values.content}
                required
                autoFocus
                margin="dense"
                id="content"
                label="Content"
                multiline
                rows={2}
                fullWidth
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                name="author"
                value={values.author}
                required
                autoFocus
                margin="dense"
                id="author"
                label="author"
                fullWidth
                variant="outlined"
              />
              <Box sx={{ display: "flex", alignItems: "center", margin: 2 }}>
                <InputLabel>Featured</InputLabel>
                <Checkbox
                  value={values.featured}
                  onChange={(e) =>
                    setValues((prevState) => ({
                      ...prevState,
                      featured: e.target.checked ? 1 : 0,
                    }))
                  }
                  name="featured"
                  checked={values.featured}
                />
              </Box>
              <InputLabel>Choose Category</InputLabel>
              <Select
                fullWidth
                id="category"
                label="category"
                value={values.category_name}
                onChange={(e) =>
                  setValues((prevState) => ({
                    ...prevState,
                    category_name: e.target.value,
                  }))
                }
              >
                {cats.map((cat) => (
                  <MenuItem key={cat.cat_id} value={cat.category_name}>
                    {cat.category_name}{" "}
                  </MenuItem>
                ))}
              </Select>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  color={props.posts ? "success" : "primary"}
                >
                  {props.posts ? "Update" : "Create"}
                </Button>
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </DialogActions>
            </DialogContent>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
