import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        minWidth: 270,
        // padding: 10,
        marginBottom:50,
    },
    media: {
        maxHeight: 230,
        marginBottom:60,
        objectFit: "contain",
    },
    content: {
        padding:30,
        // maxHeight:200,
    }
}));

export default function ServiceCard(props) {
    const classes = useStyles();
    const { image, title, text } = props;

    return (
        <Card className={classes.root} elevation={0}>
            <CardMedia
                component="img"
                className={classes.media}
                image={image}
                title="Carta de Servico"
            />
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h3" align="center" style={{fontWeight:700}} >
                    {title}
                </Typography>
                <Typography variant="subtitle1" component="p" align="center" >
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}
