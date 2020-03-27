import React, {useState,useEffect}from 'react';
import {FiLogOut, FiTrash2} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import './styles.css';
import '../../services/api';
import api from '../../services/api';
export default function Profile(){
    const [incidents,setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data)
        })
    }, [ongId]);
    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            } );
            setIncidents(incidents.filter( incident => incident.id != id));
        } catch (error) {
            swal({
                title: "Error!",
                text: "erro ao deletar caso, tente novamente",
                icon: "error",
              });
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg}/>
                <span>Bem vinda, {ongName}</span>
               
                  
                <button type="button" onClick={handleLogout}>
                    <FiLogOut size={18} color="#4de25d"/>
                </button>
                  
                
            </header>
            <h1>Casos Cadastrados</h1>
            <Link className="simple-button" to="/incidents/new">
                Cadastrar novo caso
            </Link>
           
            <ul>
               {incidents.map(incident =>(
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>
                    
                    <strong>Descrição</strong>
                    <p>{incident.description}</p>
                    
                    <strong>Valor</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                    <button type="button" onClick={()=>handleDeleteIncident(incident.id)}>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
               ))}
              
            </ul>
        </div>
    )
}