import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ListaUsuarios from "./ListaUsuarios";
import NuevoUsuario from "./NuevoUsuario";
import Usuarios from "./Usuarios";


const RoutesUsuarios: React.FC = () => { 

    return <Layout name='Usuarios'>
            <Switch>
            <Route path='/page/Usuarios/' exact={true} component={Usuarios} />
            <Route path='/page/Usuarios/nuevo' exact component={NuevoUsuario} />
            <Route path='/page/Usuarios/lista' exact component={ListaUsuarios} />
            </Switch>
        </Layout>
}

export default RoutesUsuarios;