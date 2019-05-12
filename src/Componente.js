import React, { Component } from "react";
import "./App.css";
import json_data from './frases.json';

class Componente extends Component {
  constructor(props) {
    super(props);
    this.gerarFrase();
    this.state = {
      frase: this.todasFrases[this.geraNumInt(0, 9)],
      classe: ''
    };
  }

    geraNumInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    mudaFrase = event => {
        const fraseGenerator = this.todasFrases[this.geraNumInt(0, 9)];
        this.setState({
            frase: fraseGenerator,
            classe: 'animar'
        })
        setTimeout(()=>{
            this.setState({
                classe:''
            })
        }, 1000)
    }

    gerarFrase = () => {
    const totalFrases = json_data;
    this.todasFrases = totalFrases.map(frases =>frases.frase)
    }

  render() {
    return (
        <div className="container">
            <p className={this.state.classe}>{this.state.frase}</p>
            <button onClick = {this.mudaFrase} className="Botao">Gerar frase</button>
        </div>
    );
  }
}

export default Componente;
