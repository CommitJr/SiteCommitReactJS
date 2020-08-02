import React from "react";
import { Typography, Box, makeStyles, Grid } from "@material-ui/core";
import Styles from "../../../../assets/Styles.json";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 198,
    maxWidth: 198,
    minWidth: 198,
    marginTop: 22,
  },
  photoMember: {
    width: 198,
    height: 210,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    objectFit: "cover",
  },
  memberData: {
    backgroundColor: Styles.colors.darkBlue,
    width: 198,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 100,
  },
  memberName: {
    fontWeight: "bold",
    width: 130,
    color: "white",
    fontSize: 18,
    padding: theme.spacing(1, 0, 0, 0),
    textAlign: "center",
  },
  memberOffice: {
    color: "white",
    fontSize: 14,
    padding: theme.spacing(0, 0.8, 0.8, 0.8),
    textAlign: "center",
  },
}));

export default function MemberCard({ name, office, urlPhoto }) {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.card}>
      <img
        className={classes.photoMember}
        src={urlPhoto}
        alt={`Membro: ${name} Cargo: ${office}`}
      />
      <Grid
        className={classes.memberData}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography componet="p" className={classes.memberName}>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography componet="p" className={classes.memberOffice}>
            {office}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
