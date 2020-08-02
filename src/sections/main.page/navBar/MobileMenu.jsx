import React, { useState } from "react";
import { Menu, IconButton } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import MobileMenuItem from "./items/MobileMenuItem";

function MobileMenu() {
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const styles = theme => ({
      root: {
         marginTop: theme.spacing.unit * 3,
         width: "100%"
      },
      flex: {
          flex: 1,
          fontSize: 12
      },
      menuButton: {
         marginLeft: -12,
         marginRight: 20
      }
   });

   return (
      <>
         <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="primary"
            aria-label="open menu"
            component="span">
            <MenuRoundedIcon fontSize="large" />
         </IconButton>

         <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {/* Colocar CaixaAlta como estilo do item, pra nao preocupar com a string( ccs - uppercase)  */}
            <MobileMenuItem onClick={handleClose}>SOBRE NÓS</MobileMenuItem>
            <MobileMenuItem onClick={handleClose}>NOSSOS PRODUTOS</MobileMenuItem>
            <MobileMenuItem onClick={handleClose}>VALORES</MobileMenuItem>
            <MobileMenuItem onClick={handleClose}>EQUIPE</MobileMenuItem>
            <MobileMenuItem onClick={handleClose}>PARCEIROS</MobileMenuItem>
            <MobileMenuItem onClick={handleClose}>CONTATO</MobileMenuItem>
         </Menu>
      </>
   );
}

export default MobileMenu;
