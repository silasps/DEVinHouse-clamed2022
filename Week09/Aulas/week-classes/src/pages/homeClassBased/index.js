import React from 'react';

// Modelo baseado em Classe
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Senai' };
    this.changeText = this.changeText.bind(this);
  }

  // componentWillMount() {
  //   console.log('O componente sera montado')
  // }

  // componentDidlUnmount() {
  //   console.log('O componente foi montado')
  // }

  // componentWillUnmount() {
  //   console.log('O componente sera desmontado')
  // }

  changeText(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div style={{
        'display': 'flex', 'flexDirection': 'column', 'maxWidth': '240px', 'padding': '20px'
      }}>
        <span style={{'marginBottom': '10px'}}><b>Texto digitado: </b>{this.state.text}</span>
        <input value={this.state.text} onChange={this.changeText}></input>
      </div>
    )
  }
};