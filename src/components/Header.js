import React from 'react';
import api from '../lib/api'

import './Header.css'



export default class Header extends React.Component {

    state = {
        name: '',
        surname: '',
        participation: null
    }

    handleSubmit = async (e) => {
        const { name, surname, participation } = this.state
        try {
            await api.post('/employees', { name, surname, participation })
        } catch (err) {
            console.log(err)
        }
        //ver validação
        
    }

    render() {
        return (
            <header id="main-header" >

                <div className="header-content">

                    <h1>CADASTRE-SE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="header-form">

                        <input type="text" placeholder="Nome" required onChange={e => this.setState({ name: e.target.value })}></input>
                        <input type="text" placeholder="Sobrenome" required onChange={e => this.setState({ surname: e.target.value })}></input>
                        <input type="text" placeholder="Participação" required onChange={e => this.setState({ participation: e.target.value })}></input>
                        <button onClick={this.handleSubmit}>Enviar</button>

                    </div>

                </div>
                
            </header>
        );
    }





}
