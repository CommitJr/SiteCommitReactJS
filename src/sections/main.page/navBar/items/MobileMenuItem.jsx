import React from "react";
import { MenuItem, Link } from "@material-ui/core";
// import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const styles = (theme) => ({
    flex: {
        flex: 1,
        fontSize: 12,
    },
});

function MobileMenuItem(props) {
    const { children, handleClose } = props;
    return (
        <MenuItem onClick={handleClose}>
            <Link className={styles.flex} type="title" color="inherit">
                {children}
            </Link>
        </MenuItem>
    );
}

export default MobileMenuItem;
