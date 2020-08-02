import React from 'react'
import { Box, Grid, Hidden } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const photo = require('../../../../assets/Imagens/Logo.png')

const centralize = {
    display: 'block',
    margin: 'auto',
    width: '50%'
}

function MobileCell() {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{zIndex:'2', position:'absolute', bottom: '200px'}}
        >
            <Grid item>
                <img src={photo} alt='Logo da Commit Junior' style={centralize}/>
            </Grid>
            <Grid item>
                <Typography variant='h1' color='secondary' align='center'>
                    Commit Jr
                </Typography>
            </Grid>
        </Grid>
    )
}

export default MobileCell