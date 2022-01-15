import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './contacto.css';
import Intro from '../intro/intro';
import Col from 'react-bootstrap/Col';

const Contacto = () => {
    return(
        <div className="home">
            <Intro titulo="Silvina Ronzoni" />
            <Container>
                <Row className="text-center">
                    <Col className="Colbadge-base"sm={4} md={4}> 
                        <h3>E-Mail</h3>
                        <br></br>
                        <div className="badge-base" >slronzoni@gmail.com
                        </div>
                       
                    </Col>

                    <Col className="Colbadge-base"sm={4} md={4}> 
                        <h3>Telegram</h3>
                        <br></br>
                        <div className="badge-base" >@SLRONZ
                        </div>
                    </Col>

                    <Col className="Colbadge-base"sm={4} md={4}> 
                        <h3>Github</h3>
                        <br></br>
                        <div className="badge-base" >
                        <a className="linkGit" href= 'http://github.com/SLRonzoni/Proyectos' >Proyectos en  Github</a>
                        </div>
                    </Col>

                    <Col className="Colbadge-linkedin"sm={4} md={4}> 
                        <br></br>
                        <div className="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="silvina-l-ronzoni-1054b2207" data-version="v1">
                        <a className="badge-base__link LI-simple-link" href="https://ar.linkedin.com/in/silvina-l-ronzoni-1054b2207?trk=profile-badge"></a>
                        </div>
                    </Col>
                </Row>                
            </Container>
        </div>
    );
  };

export default Contacto;

     

