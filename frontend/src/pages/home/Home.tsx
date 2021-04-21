import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonList, IonTitle, isPlatform } from "@ionic/react"
import Layout from "../../components/Layout/Layout"
import data_app from '../../assets/data_app.json';
import { menu } from "ionicons/icons";
import BarCodeScanner from 'barcode-react-scanner';

import { useState } from "react";
import Scanner from "../../components/util/Scanner";
import { Button } from "react-bootstrap";

const Barcode = require('react-barcode');


const Home = ():JSX.Element => { 
    
    const [mostrarScaner,setMostrar] = useState<boolean>(false);

    const [code, setCode] = useState<string>('code');
    return <Layout name='Inicio' > 
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Datos aplicacion</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonCardSubtitle>{data_app.title}</IonCardSubtitle>
                <br/>
                <IonLabel>
                    {/* { data_app.description} */}
                </IonLabel>
            </IonCardContent>
        </IonCard>

                <IonTitle>Descripcion accesos:</IonTitle>

                <IonList>
                    {/* {data_app.data_access.map((value: any, index: number) =>
                        <IonItem key={index} slot='start'>
                            <label>
                                {value.name}:
                                <IonCardSubtitle>{value.desc}</IonCardSubtitle>
                            </label>
                            <IonIcon slot='end' icon={menu} />
                        </IonItem>
                    )} */}
        </IonList>
        {/* <BarcodeReader

        /> */}
        {/* <TestingComponent /> */}
        <Barcode value={code} />
        <Button onClick={()=>setMostrar(!mostrarScaner)} variant={mostrarScaner?'danger':'primary'}>{mostrarScaner ? 'Ocultar': 'Mostrar' } Scaner</Button>
        <Barcode value='1016081' />
        {mostrarScaner && <Scanner
            onDetected={
                (result: any) => {
                    console.log('result: ', result.codeResult['code']);
                    setCode(result.codeResult['code']);
                }
            }
        />}
    </Layout>
}

const TestingComponent = (): JSX.Element => {
const [code, setCode] = useState<string>('')

    return (
    <>
    { code && <p> code </p> }
    <BarCodeScanner onUpdate={ (err, resp): void => {
        if(resp) {
            setCode(resp.getText())
        }
    }}
    />
    </>
);
}


export default Home;
