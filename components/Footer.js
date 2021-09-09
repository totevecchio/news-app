import Link from "next/link";
import Image from 'next/image'
import styles from './Footer.module.css'


const Footer = () => (
    <div className={styles.footerbox}>
    <div className={styles.main}>
    <div className={styles.linksbox}>
        <Link href="/">
            <a className={styles.links}>Home</a>
        </Link>
        <Link href="/news">
            <a className={styles.links}>News</a>
        </Link>
        </div>
        <div className={styles.mediabox}>
        <Link href="/">
            <a className={styles.links}>Linkedin</a>
        </Link>
        <Link href="/about">
            <a className={styles.links}>Gmail</a>
        </Link>
        <Link href="/blogs">
            <a className={styles.links}>Whatsapp</a>
        </Link>
        </div>
        <div className={styles.aside}>
        </div>
        </div>
        <div className={styles.copyright}>
            <p>Copyright {new Date().getFullYear()}©</p>
        </div>
    </div>
);

export default Footer;