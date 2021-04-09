import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import Title from "../../components/Title"
import { userInitial } from "../../redux/reducers/usuarios"
import FormLogin from "../Login/components/FormLogin"


const ancho_col = '6'
const NuevoUsuario: React.FC = () => {
    const {
        id= '',
        name= '',
        lastName= '',
        email= '',
        create= '',
        puesto=''
    }: userInitial = useSelector((state:any) => state.usurioSeleccionado);

    return <Container>
        <Title name='Crear nuevo usuario' />

        <Form>

            <Row sm='12'>
                <Col sm={ancho_col}>
                    <FormLogin
                        title='Nombre(s)'
                        required={true}
                        minLength={4}
                        type='text'
                        name='nombre'
                        placeholder='Nombre(s)...'
                        // size="sm"
                    />
                </Col>
                <Col sm={ancho_col}>
                    <FormLogin
                        title='Apeido Paterno'
                        required={true}
                        minLength={4}
                        type='text'
                        name='apP'
                        placeholder='Apeido paterno'
                        // size="sm"
                    />
                </Col>
                <Col sm={ancho_col}>
                    <FormLogin
                        title='Apeido materno'
                        type='text'
                        name='apM'
                        placeholder='Apeido materno '
                        // size="sm"
                    />
                </Col>

                <Col sm={ancho_col}>
                    <FormLogin
                        title='Correo'
                        required={true}
                        minLength={8}
                        type='email'
                        name='user'
                        placeholder='usuario@dominio.abc'
                        // size="sm"
                    />
                </Col>
                <Col sm={ancho_col}>
                    <Form.Group>
                        <Form.Label>Puesto</Form.Label>
                        <Form.Control as='select' value={puesto}>
                            <option value=''> -- </option>
                            <option>Administrador</option>
                            <option>Direccion</option>
                            <option>Finanzas</option>
                            <option>Recursos humanos</option>
                            <option>Produccion</option>
                            <option>Ventas</option>
                            <option>Operaciones</option>
                            <option>Logistica</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col sm={ancho_col} style={{display:'flex',flexDirection:'column-reverse',justifyContent:'center'}}>
                    <Button block type='submit'> GUARDAR</Button>
                </Col>
            </Row>
            
        </Form>
    </Container>
} 

export default NuevoUsuario;