import { NextComponentType } from "next";
import styles from '../styles/components/Navbar.module.css'
import Image from "next/image";

const Navbar: NextComponentType = ({}) => {
    return (
        <div className={styles.container}>
            <div className={styles.logotype}>
                <Image src='/Tao_symbol.png' width={48} height={48} alt="Taoism Symbol" />
                <p className={styles.title}>The Transient State</p>
            </div>
            <div className={styles.logotype}>
                <p>Read</p>
                <p>Get $SYNC</p>
            </div>
        </div>
    )
}

export default Navbar;