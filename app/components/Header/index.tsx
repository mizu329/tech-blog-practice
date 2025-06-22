import Link from "next/link";
import { FiGithub, FiX } from "react-icons/fi";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">TeckBlog</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="https://github.com/your-github-username" target="_blank">
          <FiGithub />
        </Link>
        <Link href="/">
          <FiX />
        </Link>
      </nav>
    </header>
  );
}
