import React , {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
      try {
          const response = await api.post('sessions', {id});
          localStorage.setItem('ongId', id);
          localStorage.setItem('ongName', response.data.name);
          history.push('/profile');
      } catch (error) {
        swal({
            title: "Error!",
            text: "Falha no login,tente novamente",
            icon: "error",
          });
      }
    }
    
    return(
    <div className="logon-container">
        <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form onSubmit={handleLogin}>
            <h1>Conecte-se</h1>
            <input placeholder="Seu ID"
            value={id}
            onChange={e =>setId(e.target.value)}
            />
            
            
          
            <button className="button" type="submit" >Entrar</button>
           
            
            <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#59c164"/>
            Não tenho cadastro
            </Link>
        </form>
        </section>
        <img className="img-heroes" src={heroesImg} alt="Heroes"/>

    </div>
    )
}