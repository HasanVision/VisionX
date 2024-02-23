import { CiBookmarkCheck } from "react-icons/ci";
import styles from "./formError.module.css";
interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({
                              message,
                          }: FormSuccessProps) => {
    if (!message) return null;
    return (
        <div className={styles.formSuccessMessage}>
            <CiBookmarkCheck size="26" style={{marginRight: '0.5rem' ,marginLeft: '0.5rem'}}/>
            <p>{message}</p>
        </div>
    )
}