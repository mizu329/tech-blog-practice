import { DEFAULT_MAX_VERSION } from "tls";
import styles from "./not-found.module.css";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <dl className={styles.container}>
        <dt className={styles.title}>ページが見つかりませんでした。</dt>
        <dd className={styles.message}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLをご確認ください。
        </dd>
      </dl>

      <Footer />
    </>
  );
}
