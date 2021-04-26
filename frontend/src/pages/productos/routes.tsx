import { IonList } from "@ionic/react";
import { Route, Switch } from "react-router"
import Layout from "../../components/Layout/Layout"
import SubMenu from "../../components/SubMenus/SubMenus";
import Title from "../../components/Title";
import menus from './assets/accesos.json';
import Editar from "./Editar";

const RoutesProductos = () => {
    
    return (<Layout name='Procudtos'>
        <Switch>
            <Route path='/admin/Productos' exact>
                <Title name='Menú' />
                
                <IonList className='lista-menus'>
                    {menus.map((m: any) => <SubMenu acceso={m} key={m.route} />)}
                </IonList>
            </Route>
            <Route path='/admin/Productos/nuevo' exact component={Editar}/>
        </Switch>
    </Layout>)
}

export default RoutesProductos;