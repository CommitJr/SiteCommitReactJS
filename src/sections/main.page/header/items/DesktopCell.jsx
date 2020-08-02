import React from 'react'
import { Box, Grid, useMediaQuery, Hidden, ThemeProvider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

function DesktopCell() {
    return (
        <Grid container style={{zIndex:'2', position:'absolute', bottom: '300px', left: '100px'}}>
            <Grid item>
                <Typography variant='h1' color='primary'>
                    |
                </Typography>
            </Grid>
            <Grid item>
                <Box justifyContent='center'>
                    <Typography variant='h1' color='secondary'>
                        Commit Jr
                    </Typography>
                    <Typography variant='h3' color='secondary'>
                        sua empresa digital
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default DesktopCell;