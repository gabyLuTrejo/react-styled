import React from 'react';
import {Panel} from 'react-bootstrap';
import TitleH1 from "./titleh1.jsx";
import TitleH2 from "./titleh2.jsx";
import TitleH4 from "./titleh4.jsx";

export default class Card extends React.Component {
	render(){

		return(
      <Panel style={this.props.color}>
				<div style={this.props.colorA}>
					<TitleH4 textoH4={this.props.textoA}/>
	        <TitleH1 textoH1={this.props.textoh1}/>
					<TitleH2 textoH2={this.props.textoTitulo}/>
					<TitleH4 textoH4={this.props.texto}/>
				</div>
				<div style={this.props.colorB}>
	        <TitleH1 textoH1={this.props.texto1h1}/>
					<TitleH2 textoH2={this.props.texto1Titulo}/>
					<TitleH4 textoH4={this.props.texto1}/>
				</div>
			</Panel>
		)
	}
}
