import React from "react"
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import { Instagram, LinkedIn, Facebook } from '@material-ui/icons'
import Style from "../../../assets/Styles.json"

const useStyles = makeStyles(theme => ({
    fale_conosco: {
       color: Style.colors.yellow,      
       marginLeft: "10px"
    },      
    networks:{
       textAlign: "center",
       color: Style.colors.primary,
       marginLeft: "10px",
       marginTop: "20px"
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

 function Siganos() {
    const classes = useStyles();
    return (
       <Grid container direction="column" justify="flex-start" alignItems="flex-start">
 
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

function Footer() {
    
    return (
        <Grid  item xs={12} >
            <Siganos />
        </Grid>
    );
}

export default Footer;