import { Container, Grid, Typography, Paper, Box, createMuiTheme, ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import React from 'react'

import { titleFont } from '../../../utils/fontUtils'

const theme = createMuiTheme({
    typography: {
      fontFamily: 'Poppins',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [titleFont],
        },
      },
    },
})

const useStyles = makeStyles(theme=>({
    textContainer:{
        padding:20,
        [theme.breakpoints.down("md")]:{
            marginTop:-80,
        },
        [theme.breakpoints.up("lg")]:{
            marginTop:50,
            paddingRight:100,
        }
    }
}))


function AboutUs(content) {
    const {aboutUsText,aboutUsTitle,photo} = content.content;
    const classes = useStyles();
    return (
        <>
        <ThemeProvider theme={theme}>
            <Box width="90%" style={{margin:"auto"}}>
                <Grid container wrap='wrap-reverse' justify ='space-evenly'>
                    <Grid item md={12} lg={6} className={classes.textContainer}>
                        <Typography variant='h2'>
                            {aboutUsTitle}
                        </Typography>
                        <Box>
                            <Typography variant='body1'>
                                {aboutUsText}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={12} lg={6} style={{position:'relative', bottom:'90px', zIndex:"1"}}>
                        <img src={photo} alt='membros da Commit Junior' width='100%'/>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
        </>
    )
}

export default AboutUs
