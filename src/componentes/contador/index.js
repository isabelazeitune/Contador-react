import React, {Component} from 'react';
import { Button } from 'reactstrap';
import './contador.css';

class Contador extends Component {
  
    state = {
        numero: 0
      }
    
      aumentar = () => {
        let novoNumero = this.state.numero;
        //console.log(this.state.numero);
        novoNumero++;
        this.setState({numero: novoNumero});
        //this.setState({this.state.numero + 1})
        //se houver outro item no objeto, o código acima fica:
        //this.setState({...this.state.numero + 1})
        //this.setState.numero = this.state.numero + 1;
      }
    
      diminuir = () => {
        let novoNumero = this.state.numero;
        //console.log(this.state.numero);
        if(novoNumero >= 1) {
          novoNumero--;
          this.setState({numero: novoNumero});
          //this.setState({this.state.numero - 1})
          //se houver outro item no objeto, o código acima fica:
          //this.setState({...this.state.numero - 1})
          //this.setState.numero = this.state.numero - 1;
        } else {
          alert("Hoje não, Faro")
        }
    
        //if(novoNumero === 0) {
        //  return;
        //}
      }
    
      render() {
        return (
          <div>
            <h1 className="contador-titulo">
              {this.state.numero}
            </h1>

            <Button color="success" outline onClick={this.aumentar} className="mr-2"> Aumentar </Button>
            <Button color="danger" outline onClick={this.diminuir}> Diminuir </Button>
            {/* <button 
              type="button"
              className="contador-aumentar"
              onClick={this.aumentar}
            >
              Aumentar
            </button>
    
            <button
              type="button" 
              className="contador-diminuir"
              onClick={this.diminuir}
            >
              Diminuir
            </button>*/}
          </div> 
        )
      }
}

export default Contador;