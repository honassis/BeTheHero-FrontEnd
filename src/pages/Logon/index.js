import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
export default function Logon(){
    return(
    <div className="logon-container">
        <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form>
            <h1>Conecte-se</h1>
            <input placeholder="Seu ID"/>
            
            <Link to="/BeTheHero-FrontEnd/profile">
            <button className="button" type="submit" >Entrar</button>
            </Link>
            
            <Link className="back-link" to="/BeTheHero-FrontEnd/register">
            <FiLogIn size={16} color="#59c164"/>
            Não tenho cadastro
            </Link>
        </form>
        </section>
        <img className="img-heroes" src={heroesImg} alt="Heroes"/>

    </div>
    )
}