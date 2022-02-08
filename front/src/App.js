import axios from "axios";
import { useState, useEffect } from "react";
import Botao from "./components/Botao";
import Card from "./components/Cards";
import TextInput from "./components/TextInput";
import api from "./services/api";
import CreateStyle from './styles/global';


function App() {
  const [mensagens, setMensagens] = useState([])
  const [autor, setAutor] = useState('')
  const [content, setContent] = useState('')
  const [render, setRender] = useState(false)

  useEffect(()=>{
    api.get('/mensagens')
    .then((response) => setMensagens(response.data))
    .catch(err => console.log(err))
  },[render])

  const enviar = async () => {
    if (autor && content) {
      await api.put('/mensagens', {"email":autor, "message": content}).then(()=> setRender(true))
      setRender(false)
      alert("Mensagem Enviada")
    } else {
      alert("Não foi possível enviar a mensagem")
    }

  }


  return (
    <>
      <h1>Lojinha Do Levi</h1>
      <TextInput name="Nome" valores={(e)=> setAutor(e.target.value)} /><br></br>
      <TextInput name="Mensagem" valores={(e)=> setContent(e.target.value)}/>
      <Botao click={enviar}/>
      {
        mensagens.map(elemento => <Card nome={elemento.email} mensagem={elemento.message} date={elemento.created_at} key={elemento.id}/>)
      }
      <CreateStyle />
    </>
  );
}

export default App;
