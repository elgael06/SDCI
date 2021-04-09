import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
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
    }, []);
    
    const handleNew = () => history.push('/page/Usuarios/nuevo');
    
    return (<Table bordered striped hover size="sm" responsive>
        <thead>
            <tr>
                {['# Clave', 'Nombre', 'Apeidos', 'Correo', 'Creado',
                    <Button block size="sm" onClick={handleNew}> NUEVO </Button>
                ].map((e, i) =><th key={i}>{e}</th>)}
            </tr>
        </thead>
        <tbody>
            {
            usuarios.map((value) => <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>
                <td>{value.create.slice(0,10)} {value.create.slice(11,16)}</td>
                <td><Button variant="link"  size="sm">EDITAR</Button> </td>
            </tr>)
        }
        </tbody>
    </Table>);
}

export default ListaUsuarios;