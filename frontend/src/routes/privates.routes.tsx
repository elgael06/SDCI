import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from 'react-router';
import Menu from "../components/Menu/Menu";
import RoutesActividades from "../pages/Actividades/routes";
import RoutesDestinos from "../pages/Destinos/routes";
import RoutesGastos from "../pages/Gastos/routes";
import Home from "../pages/home/Home";
import RoutesPlatillos from "../pages/Platillos/routes";
import RoutesProductos from "../pages/productos/routes";
import RoutesUsuarios from "../pages/Usuarios/routes";

const PrivateRoutes = () => {
    
    return (<IonReactRouter>
    <IonSplitPane contentId="main">
      <Menu />
      <IonRouterOutlet id="main" animated={true} mode='md' >
        <Switch >            
          <Route path="/" exact={true}>
              <Redirect to="/page/Inicio" />
          </Route>
          <Route path="/admin/login" exact={true}>
              <Redirect to="/admin/Inicio" />
          </Route>
          <Route path="/admin" exact={true}>
              <Redirect to="/admin/Inicio" />
          </Route>
          <Route path="/admin/Inicio" exact={true} component={Home} />
          <Route path="/admin/Platillos" component={RoutesPlatillos} />
          <Route path="/admin/Actividades" component={RoutesActividades} />
          <Route path="/admin/Destinos" component={RoutesDestinos} />
          <Route path="/admin/Gastos" component={RoutesGastos} />
          <Route path="/admin/Productos" component={RoutesProductos} />
          <Route path='/admin/Usuarios' component={RoutesUsuarios} />
        </Switch>
      </IonRouterOutlet>
    </IonSplitPane>
  </IonReactRouter>);
}

export default PrivateRoutes;