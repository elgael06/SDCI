import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ListaUsuarios from "./ListaUsuarios";
import usuarioEdicion from "./usuarioEdicion";
import Usuarios from "./Usuarios";


const RoutesUsuarios: React.FC = () => { 

    return <Layout name='Usuarios'>
            <Switch>
            <Route path='/admin/Usuarios/' exact={true} component={Usuarios} />
            <Route path='/admin/Usuarios/nuevo' exact component={usuarioEdicion} />
            <Route path='/admin/Usuarios/Edit/:idUser' exact component={usuarioEdicion} />
            <Route path='/admin/Usuarios/lista' exact component={ListaUsuarios} />
            </Switch>
        </Layout>
}

export default RoutesUsuarios;