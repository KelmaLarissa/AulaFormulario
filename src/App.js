import React, { Component,  } from 'react';
import './App.css';
import FormularioCadastro from './componentes/formularioCadastro/FormularioCadastro';
import { Container, Typography} from '@mui/material';
import 'fontsource-roboto'


class App extends Component {

  render( ){
    return (
      <Container component='article' maxWidth='sm'> 
          <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
          <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validaCPF}/>

      </Container>
      
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validaCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 dígitos"}
  } else{
    return {valido:true, texto:""}
  }
}


export default App;
