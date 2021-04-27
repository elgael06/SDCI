import { Route, Switch } from "react-router"
import Layout from "../../components/Layout/Layout"
import Destinos from "./Destinos"


const RoutesDestinos:React.FC = () => { 

    return <Layout name='Destinos' >
        <Switch >
            <Route path='/control/Destinos/' exact={true} component={Destinos} />
        </Switch>
    </Layout>
}

export default RoutesDestinos;