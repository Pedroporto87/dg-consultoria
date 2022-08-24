import React from 'react'

export default function Contato() {
 const [form, setForm] = useState({
  nome:'',
  email:'',
  assunto: '',
  telefone:'',
 })
  return (
    <h1>Contato</h1>
  )
}
