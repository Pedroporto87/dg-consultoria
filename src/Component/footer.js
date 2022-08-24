import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import '../styles/footer.css'

function linkedin() { 
  window.location.href="https://www.linkedin.com/company/dg-ambiental"
}
function instagram(){
  window.location.href="https://www.instagram.com/dg_ambiental/"
}
export default function Footer() {
  
  return (
    <footer>
      <div className='footer-menu'>
        <ul>
          <li>
            <Link to="/" id='b-button' activeClassName="footer-button">Home</Link>
          </li>
          <li>
            <Link to="/Projetos" id='b-button' activeClassName="footer-button">Projetos</Link>
          </li>
          <li>
            <Link to="/Contato" id='b-button' activeClassName="footer-button">Contato</Link>
          </li>
        </ul>
      </div>
      <div className='footer-socialmedia'>
        <ul>
          <p>Nos siga em nossas redes sociais</p>
          <li>
            <BsLinkedin  onClick={linkedin}/>
          </li>
          <li>
            <BsInstagram onClick={instagram} />
          </li>
        </ul>
        <span className='footer-span'>DevPorto</span> &copy;2022
      </div>
  </footer>
  )
}
