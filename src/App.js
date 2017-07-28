import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card.jsx"
import {Grid, Row, Col, Panel} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xs={3}>
              <Card textoTitulo="20" texto="New followers added this month"/>
            </Col>
            <Col xs={3}>
              <Card textoTitulo="$1250" texto="Average Monthly Income"/>
            </Col>
            <Col xs={3}>
              <Card textoTitulo="$13865" texto="Yearly Income Goal"/>
            </Col>
            <Col xs={3}>
              <Card textoTitulo="18°" texto="Paris"/>
            </Col>
          </Row>
        </Grid>  



      </div>
    );
  }
}

export default App;
