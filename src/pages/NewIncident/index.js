import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

import {Link} from 'react-router-dom';
export default function NewIncident(){
    return(
    <div className="global-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva seu caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#59c164"/>
                 Voltar para home
            </Link>
            </section>
            <form>
            <input placeholder="Título do caso"/>
            <textarea placeholder="Descrição"/>
            <input placeholder="Valor em reais"/>
            
            <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
        )
}