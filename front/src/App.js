import { useState, useEffect } from "react";
import Botao from "./components/Botao";
import Card from "./components/Cards";
import TextInput from "./components/TextInput";
import api from "./services/api";
import CreateStyle from './styles/global';


function App() {
  const [mensagens, setMensagens] = useState([])

  useEffect(()=>{
    api.get('/mensagens')
    .then((response) => setMensagens(response.data))
    .catch(err => console.log(err))
  },[])


  return (
    <>
      <h1>Lojinha Do Levi</h1>
      <TextInput name="Nome"/><br></br>
      <TextInput name="Mensagem"/>
      <Botao />
      {
        mensagens.map(elemento => <Card nome={elemento.email} mensagem={elemento.message} date={elemento.created_at}/>)
      }
      
      <CreateStyle />
    </>
  );
}

export default App;
