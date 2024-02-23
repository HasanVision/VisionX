import { MdErrorOutline } from "react-icons/md";
import styles from "./formError.module.css";
interface FormErrorProps {
    message?: string;
}

export const FormError = ({
    message,
                          }: FormErrorProps) => {
    if (!message) return null;
    return (
        <div className={styles.formErrorMessage}>
<MdErrorOutline size="26" style={{marginRight: '0.5rem' ,marginLeft: '0.5rem'}}/>
            <p>{message}</p>
        </div>
    )
}