import React from "react";
import MobileMenu from "./MobileMenu";
import PTSansRegular from "../../../assets/Fontes/Corpo/PTSans-Regular.ttf";
import { Toolbar, Link, AppBar, Grid, Hidden } from "@material-ui/core";
import NavBarMenuItem from "./items/MobileMenuItem";

function NavBar() {
   const styles = theme => ({
      //DEVE FICAR ME UM ARQUIVO SEPARADO//MESMO CODIGO DO MOBILEMENU
      root: {
         marginTop: theme.spacing.unit * 3,
         width: "100%",
         color:"red",
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
         <AppBar position="sticky" elevation={0} color="transparent">
            <Toolbar>
               <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="baseline"
                  spacing={3}>
                  <Hidden mdUp>
                     <NavBarMenuItem>
                        <MobileMenu />
                     </NavBarMenuItem>
                  </Hidden>

                  <Hidden smDown>
                     <NavBarMenuItem>SOBRE NÓS</NavBarMenuItem>
                     <NavBarMenuItem>NOSSOS PRODUTOS</NavBarMenuItem>
                     <NavBarMenuItem>VALORES</NavBarMenuItem>
                     <NavBarMenuItem>EQUIPE</NavBarMenuItem>
                     <NavBarMenuItem>CONTATO</NavBarMenuItem>
                     <NavBarMenuItem>PARCEIROS</NavBarMenuItem>
                  </Hidden>
               </Grid>
            </Toolbar>
         </AppBar>
      </>
   );
}

export default NavBar;
