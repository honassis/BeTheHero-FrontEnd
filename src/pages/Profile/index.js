import React from 'react';
import {FiLogOut, FiTrash2} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg}/>
                <span>Bem vinda, APAD</span>
               
                    <Link to="/BeTheHero-FrontEnd/">
                <button type="button">
                    <FiLogOut size={18} color="#4de25d"/>
                </button>
                    </Link>
                
            </header>
            <h1>Casos Cadastrados</h1>
            <Link className="simple-button" to="/BeTheHero-FrontEnd/incidents/new">
                Cadastrar novo Caso
            </Link>
           
            <ul>
                <li>
                    <strong>CASO AJUDA 1</strong>
                    <p> Caso teste</p>
                    
                    <strong>Descrição</strong>
                    <p> Descrição teste</p>
                    
                    <strong>Valor</strong>
                    <p> R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO AJUDA 2</strong>
                    <p> Caso teste</p>
                    
                    <strong>Descrição</strong>
                    <p> Descrição teste</p>
                    
                    <strong>Valor</strong>
                    <p> R$ 321,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO AJUDA 3</strong>
                    <p> Caso teste</p>
                    
                    <strong>Descrição</strong>
                    <p> Descrição teste</p>
                    
                    <strong>Valor</strong>
                    <p> R$ 498,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO AJUDA 4</strong>
                    <p> Caso teste</p>
                    
                    <strong>Descrição</strong>
                    <p> Descrição teste</p>
                    
                    <strong>Valor</strong>
                    <p> R$ 417,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}