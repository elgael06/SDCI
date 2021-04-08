import { useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { optenerUsuarios } from "../../redux/actions/usuarios.actions";
import { userInitial } from "../../redux/reducers/usuarios";


const ListaUsuarios = () => {
    const { token='NA' } = useSelector((state: any) => state.sesion);
    const usuarios:userInitial[] = useSelector((state: any) => state.usuarios);
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        dispatch(optenerUsuarios(token));
    },[]);
    useEffect(() => {
        console.log('lista: ',usuarios);
        
    })
    return (<>
            <Table bordered striped hover size="sm" responsive>
            <thead>
                <tr>
                    <th># Clave</th>
                    <th>Nombre</th>
                    <th>Apeidos</th>
                    <th>Correo</th>
                    <th>Creado</th>
                    <th><Button block size="sm" onClick={() => history.push('/page/Usuarios/nuevo')}> NUEVO </Button></th>
                </tr>
            </thead>
            <tbody>
                {
                
                usuarios.map((value) => {
                    return <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.lastName}</td>
                        <td>{value.email}</td>
                        <td>{value.create.slice(0,10)} {value.create.slice(11,16)}</td>
                        <td><Button variant="link"  size="sm">EDITAR</Button> </td>
                    </tr>
                })
            }
            </tbody>
        </Table>
    </>);
}

export default ListaUsuarios;