import styles from "./page.module.css";
import Link from "next/link";
import { getArticles } from "@/app/_libs/microcms";
import { Firstview } from "./components/Firstview";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { formatDate } from "./_libs/utils";
import Image from "next/image";

// [
//   {
//       "id": "yzswr971ek",
//       "createdAt": "2025-06-22T07:11:59.087Z",
//       "updatedAt": "2025-06-22T07:51:49.359Z",
//       "publishedAt": "2025-06-22T07:11:59.087Z",
//       "revisedAt": "2025-06-22T07:51:49.359Z",
//       "title": "Next.jsで技術ブログを作りました",
//       "body": "<p>Next.jsで技術ブログを作りました</p>",
//       "category": [
//           {
//               "id": "engineering",
//               "createdAt": "2025-06-22T07:47:52.849Z",
//               "updatedAt": "2025-06-22T07:47:52.849Z",
//               "publishedAt": "2025-06-22T07:47:52.849Z",
//               "revisedAt": "2025-06-22T07:47:52.849Z",
//               "name": "＃エンジニアリング"
//           }
//       ]
//   }
// ]
export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getArticles();
  console.log(data);

  return (
    <>
      <Header />
      <Firstview />
      <section className={`${styles.description} ${styles.inner}`}>
        <p>WEB関連で気になったトピックをシェアしています。</p>
      </section>

      <section className={`${styles.introduction} ${styles.inner}`}>
        <h1>Introduction</h1>
        <p>
          デザイナー兼エンジニアとしてWEB、LP、バナーの制作やSTUDIO、ワードプレス、ムーバブルタイプでの構築支援のお手伝いをしてきました。
          <br />
          扱える言語はhtml、css、sass、phpです。
          <br />
          デザインツールはFigma、XD、Illustrator、 photoshopを扱えます。
          <br />
          開発用のエディターはVScodeを使用しています。
        </p>
      </section>

      <section className={`${styles.article} ${styles.inner}`}>
        <div className={styles.articleWrapper}>
          <h1>Article</h1>
          <ul className={styles.articleList}>
            {data.contents.map((article) => (
              <li key={article.id} className={styles.articleItem}>
                <Link href={`/articles/${article.id}`}>
                  <div
                    className={styles.articleImage}
                    style={{
                      position: "relative",
                      width: "220px",
                      display: "block",
                      aspectRatio: "220 / 130",
                      overflow: "hidden",
                    }}
                  >
                    {article.thumbnail ? (
                      <Image
                        src={article.thumbnail.url}
                        alt={article.title}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                        className={styles.thumbnail}
                      />
                    ) : (
                      <div className={styles.articleThumbnailPlaceholder}>
                        No Image
                      </div>
                    )}
                  </div>
                  <dl className={styles.articleMeta}>
                    <dt>{article.title}</dt>
                    <dd>{formatDate(article.publishedAt)}</dd>
                  </dl>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.contact} ${styles.inner}`}>
        <h1>Contact me</h1>
        <button>Click here</button>
      </section>

      <Footer />
    </>
  );
}
