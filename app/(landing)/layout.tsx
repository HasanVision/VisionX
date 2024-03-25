

import { Footer } from "./_components/footer/footer"
import { Header } from "./_components/header/header"
import styles from "./landing.module.css"

const LandingLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className={styles.LandingLayout}>
            <Header />
            <main className={styles.LandingLayoutMain}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default LandingLayout