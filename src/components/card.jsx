import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

export default class Card extends React.Component {
	render(){
		return(
      <Panel>
				<h2><strong>{this.props.textoTitulo}</strong></h2>
				<h4>{this.props.texto}</h4>
			</Panel>
		)
	}
}
