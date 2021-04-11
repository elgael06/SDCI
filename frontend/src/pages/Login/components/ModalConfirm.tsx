import { IonButton, IonModal } from "@ionic/react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormLogin from "./FormLogin";


const ModalConfirm = ({ email='' }) => {

    const {feha_nac='',number_phone='',puesto=''} = useSelector((state: any) => state.userInfo);
    const { statusModal = false } = useSelector((state: any) => state.effects);
    const dispatch = useDispatch();
    
    return <Modal
        show={statusModal}
        swipeToClose={false}
        backdropDismiss={false}
        backdrop="static"
        onHide={() => dispatch({ type: 'OFF_MODAL' })}
        centered
        animation={true}
    >
        <Modal.Header closeButton>
            <Card.Title > Confirmar datos:</Card.Title>
        </Modal.Header>
        <Card.Body>
            <Form>
            <Row>         
                <Col sm={6}>
                    <FormLogin                      
                        title='Correo'
                            required
                            type='text'
                            disabled
                            value={email}
                    />
                </Col>       
                <Col sm={6}>
                    <FormLogin                      
                        title='Puesto'
                            required
                            type='text'
                            disabled
                            value={puesto}
                    />
                </Col>
                <Col sm={6}>
                    <FormLogin                    
                        title='Fecha nacimiento'
                        required
                        type='date'
                        value={feha_nac}
                    />
                </Col>
                <Col sm={6}>
                    <FormLogin                      
                        title='Telefono'
                        required
                        type='tel'
                        value={number_phone}
                    />
                </Col>
                <Col xs={6}>
                    <IonButton
                        onClick={() => dispatch({ type: 'OFF_MODAL' })}
                        expand='block'
                        color='light'
                        fill='solid' type='reset' >CANCELAR</IonButton>
                </Col>
                <Col xs={6}>
                    <IonButton 
                        expand='block' 
                        color='secondary' 
                        fill='solid' 
                        type='submit' >GUARDAR</IonButton>
                </Col>
            </Row>
            </Form>
        </Card.Body>
    </Modal>;
}

export default ModalConfirm;