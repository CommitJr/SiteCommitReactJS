import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import fotoPrincipal from "../../../assets/Header/FotoPrincipal.jpg";
import lines from "../../../assets/Header/LinhasAzul.png";
import DesktopCell from "./items/DesktopCell";
import MobileCell from "./items/MobileCell";

const useStyles = makeStyles({
  mainImage: {
    zIndex: "1",
    height: "96vh",

    background:
      "linear-gradient(to right bottom, rgba(59 ,80 , 149, 0.8),  rgba(59 ,80 , 149, 0.8))",
    backgroundImage: `url(${fotoPrincipal})`,
    backgroundPosition: "top",
    backgroundSize: "cover",

    textAlign: "right",
    overflow: "hidden",
    position: "relative",
  },

  linesImage: {
    zIndex: "1",
    height: "100%",
    objectFit: "contain",
    boxSizing: "inline-box",
    overflow: "hidden",
  },

  title: {
    position: "absolute",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className={classes.mainImage}>
          <img
            src={lines}
            className={classes.linesImage}
            alt="lines to style"
          />
          <Hidden smDown>
            <DesktopCell />
          </Hidden>
          <Hidden mdUp>
            <MobileCell />
          </Hidden>
        </div>
      </div>
    </>
  );
}

export default Header;
