import React, { useState } from "react";
import useStyles from "./styles"
import {TextField,Button,Typography,Paper} from "@material-ui/core"
import FileBase from "react-file-base64"

const Form=()=>{
    const [postData,setPostData] = useState({
        creator:"",title:"",message:"",tags:"",selectedFile:""
    })
    const classes = useStyles();
    const handleSubmit=()=>{

    }

    const clear =()=>{
        
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography varient="h6">
                Creating a memory
                </Typography>
                <TextField  name="creator"  varient="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>{setPostData({...postData,creator:e.target.value})}}  />
                <TextField  name="title"  varient="outlined" label="title" fullWidth value={postData.creator} onChange={(e)=>{setPostData({...postData,title:e.target.value})}}  />
                <TextField  name="message"  varient="outlined" label="message" fullWidth value={postData.creator} onChange={(e)=>{setPostData({...postData,message:e.target.value})}}  />
                <TextField  name="tags"  varient="outlined" label="tags" fullWidth value={postData.creator} onChange={(e)=>{setPostData({...postData,tags:e.target.value})}}  />
           <div>
            <FileBase 
            type="file"
            multiple={false}
            onDone={(base64)=>{setPostData({...postData,selectedFile:base64})}}
            />
          </div>
          <Button className={classes.buttonSubmit} varient="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button className={classes.buttonSubmit} varient="contained" color="secondary" size="small" type="submit" fullWidth onClick={clear}>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form;