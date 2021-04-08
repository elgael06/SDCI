import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { efectaInitial } from "../../redux/reducers/effects";


const DialogComp = () => {
    const { message }: efectaInitial = useSelector((state: any) => state.effects);
    
    return message.status ? <Alert style={{ position: 'fixed', top: 10, left: 20 }} variant={message.type}>
        {message.text}
    </Alert>: null;
}

export default DialogComp;