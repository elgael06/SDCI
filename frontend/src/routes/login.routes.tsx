import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from 'react-router';
import Login from "../pages/Login/Login";


const LoginRoutes = () => {
    
    return (<IonReactRouter>
        <Route path="/page/login" exact={true} component={Login} />
        <Route path="/" >
            <Redirect to="/page/login" />
        </Route>
    </IonReactRouter>);
}

export default LoginRoutes;