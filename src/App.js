import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card.jsx";
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    let padding={
      padding: "10px"
    }
    let naranja={
      backgroundColor: "#ff8100",
      color: "#fff",
      height: "110px",
      padding: "10px"
    }
    let azul={
      backgroundColor: "#00bcd4",
      color: "#fff",
      padding: "0",
      marginTop: "-20px",
      height: "70px"
    }
    let cardSpace={
      height: "50px"
    }
    return (
      <div className="App">
        <Grid fluid>
          <Row>
            <Col xs={3}>
              <Card color={padding} textoTitulo="20" texto="New followers added this month"/>
            </Col>
            <Col xs={3}>
              <Card color={padding} textoTitulo="$1250" texto="Average Monthly Income"/>
            </Col>
            <Col xs={3}>
              <Card color={padding} textoTitulo="$13865" texto="Yearly Income Goal"/>
            </Col>
            <Col xs={3}>
              <Card color={naranja} textoh1="18°" texto="Paris"/>
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              <Card textoTitulo="20" texto="New followers added this month"/>
              <Card textoTitulo="20" texto="New followers added this month"/>
            </Col>
            <Col xs={3}>
              <Card colorA={azul} colorB={cardSpace} textoA="New visitors" textoTitulo="1.5k"/>
              <Card colorA={azul} colorB={cardSpace} textoA="Bounce Rate" textoTitulo="50%"/>
              <Card colorA={azul} colorB={cardSpace} textoA="Searchs" textoTitulo="28%"/>
              <Card colorA={azul} colorB={cardSpace} textoA="Traffic" textoTitulo="140.5Kb"/>
            </Col>
          </Row>
        </Grid>


      </div>
    );
  }
}

export default App;
