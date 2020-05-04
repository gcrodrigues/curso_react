import React from "react";
import LinkWrapper from "../../Utils/LinkWrapper";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import styles from './Header.module.css';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  container:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

const Header = () => {
const classes = useStyles();
  return (
    <nav>
      <AppBar position="static">

      <ToolBar>
        <Container className={classes.container} >
          <LinkWrapper className={styles.logo} activeStyle={{}} to="/">
            Casa do Código
          </LinkWrapper>
          <ul className={styles.list}>
            <li>
              <LinkWrapper className={styles.itens} to="/autores">Autores</LinkWrapper>
            </li>
            <li>
              <LinkWrapper className={styles.itens} to="/livros">Livros</LinkWrapper>
            </li>
            <li>
              <LinkWrapper className={styles.itens} to="/sobre">Sobre</LinkWrapper>
            </li>
          </ul>
        </Container>
      </ToolBar>

      </AppBar>
    </nav>
  );
};

export default Header;
