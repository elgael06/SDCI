import { Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Gasto from "./Gasto";
import NuevoGasto from './NuevoGasto';
import './styles.css'


const RoutesGastos: React.FC = () => {
    
    return <Layout name='Gastos'>
            <Switch>
                <Route path='/admin/Gastos/' exact={true} component={Gasto} />
                <Route path='/admin/Gastos/nuevo' exact={true} component={NuevoGasto} />            
            </Switch>
        </Layout>
}

export default RoutesGastos;