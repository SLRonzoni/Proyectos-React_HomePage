import React from 'react';
import './conocimientos.css';
import Intro from '../intro/intro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Antecedentes = () => {
    return(
        <div className="home">
            <Intro titulo="Silvina Ronzoni" />
            <Container>
                <br></br> 
                <Row>
                <h2 className="text-primary">Conocimientos</h2>
                {/* <a href= 'https://github.com/SLRonzoni/Proyectos.git' className="linkProyecto btn btn-primary">Mis Proyectos</a> */}
                </Row>
                <br></br>              
                <Row>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-5">Desarrollo web Full Stack con React</h5>
                                <p className="card-text">( U.T.N. Buenos Aires )</p>
                                <span>Realizado en 2021</span>
                            </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-5">Java y Javascript</h5>
                                <p className="card-text">( Universidad de Vicente Lopez / Educacion IT)</p>
                                <span>Realizados en 2020 y 2021</span>
                            </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body">
                            <h5 className="card-title mb-5">Asistente Administrativa Contable</h5>
                                <p className="card-text">( Capacitarte )</p>
                                <span>Realizado en 2020</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <br></br>
                <br></br>
                <Row>
                <br></br>
                <br></br>
                 <div className="row">
                <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-5">Conciliaciones bancarias </h5>
                                <p className="card-text">( Capacitarte )</p>
                                <span>Realizado en 2020</span>
                            </div>
                            </div>
                        </div>
                   
                        <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-1">Dirección y Administración de empresas</h5>
                                <p className="card-text">( American Management & Business Administration Institute and University / Rotary Olivos )</p>
                                <span>Realizado en 2012</span>
                            </div>
                            </div>
                        </div>
                    <br></br>
                    <br></br>
                    
                        <div className="col-sm-4">
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-5">Analista Programadora</h5>
                                <p className="card-text">( Instituto Argentino de Computación )</p>
                                <span>Realizado en 1993</span>
                            </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Antecedentes;