import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from 'react-router';
import Menu from "../components/Menu/Menu";
import RoutesActividades from "../pages/Actividades/routes";
import RoutesDestinos from "../pages/Destinos/routes";
import RoutesGastos from "../pages/Gastos/routes";
import Home from "../pages/home/Home";
import RoutesPlatillos from "../pages/Platillos/routes";
import RoutesUsuarios from "../pages/Usuarios/routes";

const PrivateRoutes = () => {
    
    return (<IonReactRouter>
    <IonSplitPane contentId="main">
      <Menu />
      <IonRouterOutlet id="main">
        <Switch >
            
                <Route path="/" exact={true}>
                    <Redirect to="/page/Inicio" />
                </Route>

                <Route path="/page/login" exact={true}>
                    <Redirect to="/page/Inicio" />
                </Route>
                <Route path="/page" exact={true}>
                    <Redirect to="/page/Inicio" />
                </Route>
                <Route path="/page/Inicio" exact={true} component={Home} />
                <Route path="/page/Platillos" component={RoutesPlatillos} />

                <Route path="/page/Actividades" component={RoutesActividades} />
                <Route path="/page/Destinos" component={RoutesDestinos} />
                <Route path="/page/Gastos" component={RoutesGastos} />
                <Route path='/page/Usuarios' component={RoutesUsuarios} />

        </Switch>
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>);
}

export default PrivateRoutes;