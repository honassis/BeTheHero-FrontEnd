import React from 'react';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

import {Link} from 'react-router-dom';
export default function Logon(){
    return(
    <div className="global-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
                <Link className="back-link" to="/BeTheHero-FrontEnd/">
                <FiArrowLeft size={16} color="#59c164"/>
                 Voltar para Login
            </Link>
            </section>
            <form>
            <input placeholder="Nome da ONG"/>
            <input placeholder="E-mail"/>
            <input placeholder="WhatsApp"/>
            <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{width:80}}/>
                
            </div>
            <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
        )
}