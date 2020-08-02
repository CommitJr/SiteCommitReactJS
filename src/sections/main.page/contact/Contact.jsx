import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Grid, Hidden,Typography } from '@material-ui/core'
import Forms from "./Forms"
import { Instagram, LinkedIn, Facebook } from '@material-ui/icons'
import Style from "../../../assets/Styles.json"
import Footer from "../footer/Footer"

//const lines = require("../../../assets/Imagens/Linhas - Cinza Claro 2.png");

const useStyles = makeStyles(theme => ({
   fale_conosco: {
      color: Style.colors.yellow,      
      marginLeft: "10px"
   },
   text:{
      color: "black",
      marginTop: "20px"
   },
   img: {
      position: "absolute"
   },
   networks:{
      textAlign: "center",
      color: Style.colors.primary,
      marginLeft: "10px",
      marginTop: "20px"
  },
  siganos:{
      marginTop:"100px"
  },
  icons:{
      color: 'inherit',
      marginRight:"20px"
  }
}));

const networks ={
   facebook:"https://www.facebook.com/commitjunior",
   instagram: "https://www.instagram.com/commitjunior/",
   linkedin: "https://www.linkedin.com/company/commitjr"
}

function FaleConosco() {
   const classes = useStyles();
   return (
      <Grid className={classes.fale_conosco} item xs={12} >
         <Typography variant="h3">
            Fale Conosco
         </Typography>

         <Typography variant = "subtitle1" className={classes.text}>            
            Vamos conversar sobre seu negócio?
         </Typography>
      </Grid>
   );
}

function Siganos() {
   const classes = useStyles();
   return (
      <Grid container direction="column" justify="flex-start" alignItems="flex-start" className={classes.siganos}>

         <Box className={classes.fale_conosco}  >
            <Typography variant = "h3">
               Siga-nos
            </Typography>
         </Box>

         <Box className={classes.networks}>
            <a className={classes.icons} href={networks.facebook} target="blank"><Facebook style={{fontSize:30}}/></a>
            <a className={classes.icons} href={networks.instagram} target="blank"><Instagram style={{fontSize:30}}/></a>
            <a className={classes.icons} href={networks.linkedin} target="blank"><LinkedIn style={{fontSize:30}}/></a>
         </Box>
      </Grid>
   );
}

function Contact() {   
   return (
      <Grid container direction="row" justify="center" alignItems="center">

         <Grid item xs={12} sm={5} >

            <FaleConosco />                       

            <Hidden xsDown>               
               <Siganos />
            </Hidden>

         </Grid>

         <Grid item xs={12} sm={5}>
            <Forms />
         </Grid>

         <Hidden smUp>                        
            <Footer />            
         </Hidden>

   </Grid>
   );
}

export default Contact;
