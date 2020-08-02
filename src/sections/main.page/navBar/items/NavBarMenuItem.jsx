import React from "react";
import { Link, Grid } from "@material-ui/core";

const styles = (theme) => ({
    //DEVE FICAR ME UM ARQUIVO SEPARADO//MESMO CODIGO DO MOBILEMENU
    flex: {
        flex: 1,
        fontSize: 12,
    },
});

function NavBarMenuItem(props) {
    const { children } = props;
    return (
        <Grid item>
            <Link className={styles.flex} type="title" color="inherit">
                {children}
            </Link>
        </Grid>
    );
}

export default NavBarMenuItem;
