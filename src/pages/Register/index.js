import React, {useState} from 'react';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';

export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');
    const history = useHistory();
        async function handleRegister(e){
        e.preventDefault();
        const data={
            name,
            email,
            whatsapp,
            city,
            uf
        };
        
        try{
            const response = await api.post('ongs', data);
            swal({
                title: "Sucesso!",
                text: "Cadastro realizado. \n Sua ID:" + response.data.id,
                icon: "success",
              });

              history.push('/');
        } catch (error){
            swal({
                title: "Error!",
                text: "Ocorreu um erro",
                icon: "error",
              });
        }

    }

    return(
    <div className="global-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
                <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#59c164"/>
                 Voltar para Login
            </Link>
            </section>
            <form onSubmit={handleRegister}>
            <input placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <input placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}/>
            <div className="input-group">
            <input placeholder="Cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
            />
            <input placeholder="UF" style={{width:80}}
            value={uf}
            onChange={e => setUf(e.target.value)}
            />
                
            </div>
            <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
        )
}