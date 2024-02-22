
import styles from "./auth.module.css"
interface HeaderProps {
    label: string;
}





export const Header = ({
    label,
                       }: HeaderProps) => {

    return(
        <div className={styles.authHeader}>
            <h1>
                VisionX
            </h1>
            <p>
                {label}
            </p>

        </div>
    )
}