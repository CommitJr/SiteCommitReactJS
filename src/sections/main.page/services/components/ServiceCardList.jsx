import React from "react";
import Grid from "@material-ui/core/Grid";

import ServiceCard from "./ServiceCard";
import ResponsiveDivider from "./ResponsiveDivider";

function ServiceCardGroup(props) {
    const { firstCard, secondCard } = props;

    return (
        <Grid container justify="center">
            <Grid item>{firstCard}</Grid>
            <ResponsiveDivider horizontalDown={632} />
            <Grid item>{secondCard}</Grid>
        </Grid>
    );
}

export default function ServiceCardList(props) {
    const {services} = props;
    const servicesMap = services.map((service) => (
        <ServiceCard
            image={service.image}
            title={service.title}
            text={service.text}
        />
    ));

    return (
        <Grid container justify="center">
            <Grid item>
                <ServiceCardGroup
                    firstCard={servicesMap[0]}
                    secondCard={servicesMap[1]}
                />
            </Grid>

            <ResponsiveDivider horizontalDown={1250} />

            <Grid item>
                <ServiceCardGroup
                    firstCard={servicesMap[2]}
                    secondCard={servicesMap[3]}
                />
            </Grid>
        </Grid>
    );
}