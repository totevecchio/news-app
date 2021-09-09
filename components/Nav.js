import Link from "next/link";
import Image from 'next/image'
import styles from './Nav.module.css'


const Nav = () => (
    <div className={styles.navbox}>
    <div className={styles.b}>
        <Link href="/">
            <a className={styles.a}>HOME</a>
        </Link>
        <Image src='/logo.svg' width={50} height={50} />
        <Link href="/news">
            <a className={styles.a}>NEWS</a>
        </Link>
        </div>
    </div>
);

export default Nav;
