import React from "react";
import { Divider } from "@material-ui/core";
import json2mq from "json2mq";

import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function ResponsiveDivider(props) {

    const { horizontalDown } = props;

    const isHorizontal = useMediaQuery(
        json2mq({
            maxWidth: horizontalDown,
        })
    );

    const verticalStyle = {
        height: 460,
        width: 1,
        textAlign: "center",
        // marginTop: "auto",
        marginBottom: "auto",
        
        marginLeft:8,
        marginRight:8,
    };

    const horizontalStyle = {
        height: 1,
        width: "55%",
        textAlign: "center",
        marginBottom: 20,
    };

    return (
        <Divider
            // variant="middle"
            orientation={isHorizontal ? "horizontal" : "vertical"}
            flexItem
            style={isHorizontal ? horizontalStyle : verticalStyle}
        />
    );
}
