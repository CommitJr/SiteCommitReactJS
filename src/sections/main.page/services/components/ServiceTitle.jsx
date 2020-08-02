import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {Container} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
    title: {
        fontWeight: 800, 
        marginBottom: 80,
        
        //text-align:
        [theme.breakpoints.down('lg')]:{
            textAlign:"center"
        },
        [theme.breakpoints.up('lg')]:{
            textAlign:"left"
        },
    }
}));

function ServiceTitle({children}) {
    const classes = useStyles();
    return (
            <Container> 
                <Typography variant="h2" component="h2" whiteSpace="normal" color="primary" className={classes.title}>
                    {children}
                </Typography>
            </Container>
        )

}

export default ServiceTitle;