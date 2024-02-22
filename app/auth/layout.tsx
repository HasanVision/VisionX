import styles from "./auth.module.css"


const AuthLayout = ({
    children
                    }: {children: React.ReactNode}) =>{
    return (
        <div className={styles.AuthLayout}>
            {children}
        </div>
    )

}

export default AuthLayout;