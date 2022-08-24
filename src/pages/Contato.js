import React from 'react'
import { useState } from 'react'

export default function Contato() {
 const [form, setForm] = useState({
  nome:'',
  email:'',
  assunto: '',
  telefone:'',
  celular: '',
  textarea: '',
 })
 function handleChange(event){
  setForm(event.target.value)
 }
 function handleSubmit(event){
  event.preventDefault()
 }
  return (
    <div className='form-conteiner'>
      <h1 className='form-titulo'>Entre em contato com a gente</h1>
     <form className='form-input' onSubmit={handleSubmit}>
      <label htmlFor='nome'> Nome: 
        <input type='text' placeholder='Nome' value={form.nome} required onChange={handleChange} />
      </label>
      <br />
      <label htmlFor='email'> E-mail:
        <input type='email' placeholder='Seu e-mail' value={form.email} required onChange={handleChange} />
      </label>
      <br />
      <label htmlFor='assunto'>Assunto: 
        <input type='assunto' placeholder='No que podemos ajudar' value={form.assunto} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor='telefone'>Telefone:
        <input type='tel' placeholder='(00)0000-0000' pattern='([0-9]{2})[0-9]{4}-[0-9]{4}' 
          value={form.telefone} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor='celular'>Celular: 
        <input type='tel' placeholder='(00)00000-0000' pattern='([0-9]{2})[0-9]{5}-[0-9]{4}'
        value={form.celular} onChange={handleChange} />
      </label> 
      <br />
      <label htmlFor='textarea'>Messagem:
        <input type='textarea' placeholder='Nos conte como podemos ajudar' required value={form.textarea}
        onChange={handleChange} /> 
      </label>
     </form>
    </div>
  )
}
