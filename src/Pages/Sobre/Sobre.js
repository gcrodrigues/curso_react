import React, { useEffect } from "react";

import Header from "../../Components/Header/Header";
import Typograph from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  titulo:{
    textAlign: 'center',
    color: 'blue',
  }
});

const Sobre = () => {
  
  useEffect(() => {
    document.title = "Sobre | Casa do Código";
  }, []) 
   
    const classes = useStyles();
    
    return (
      <>
        <Header />
        <Container maxWidth="sm">
          <Typograph className={classes.titulo} variant="h1" component="h2">
            Sobre
          </Typograph>

          <Typograph variant='body' component='p'>
            A Casa do Código é uma editora ue desenvolve e edita livros em
            divevesos formatos.
          </Typograph>
        </Container>
      </>
    );
}


export default Sobre;