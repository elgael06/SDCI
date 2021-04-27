import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ListaUsuarios from "./ListaUsuarios";
import usuarioEdicion from "./usuarioEdicion";
import Usuarios from "./Usuarios";


const RoutesUsuarios: React.FC = () => { 

    return <Layout name='Usuarios'>
            <Switch>
            <Route path='/control/Usuarios/' exact={true} component={Usuarios} />
            <Route path='/control/Usuarios/nuevo' exact component={usuarioEdicion} />
            <Route path='/control/Usuarios/Edit/:idUser' exact component={usuarioEdicion} />
            <Route path='/control/Usuarios/lista' exact component={ListaUsuarios} />
            </Switch>
        </Layout>
}

export default RoutesUsuarios;