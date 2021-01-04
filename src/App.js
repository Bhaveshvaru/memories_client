import React from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'

import memories from "./image/memories.jpg"

const App =()=>{
 return(
   <Container maxWidth="lg">
       <AppBar position="static" color="inherit"> 
       <Typography variant="h2" align="center"> Memories</Typography>
        <img style={{alignSelf:"center"}} src={memories} alt="memories" height="120" width="120"/>
        </AppBar>
    </Container>

 )
}
 export default App;