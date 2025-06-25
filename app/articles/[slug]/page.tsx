import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";
import { getArticleDetail } from "@/app/_libs/microcms";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleDetail(slug);
  if (!article) {
    return <div>記事が見つかりませんでした。</div>;
  }
  return (
    <>
      <Header />
      <div className={`${styles.articleWrapper} ${styles.inner}`}>
        <h1>{article.title}</h1>
        <div
          className={styles.articleImage}
          style={{
            position: "relative",
            width: "100%",
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
              style={{ objectFit: "cover" }}
              className={styles.thumbnail}
            />
          ) : (
            <div className={styles.articleThumbnailPlaceholder}>No Image</div>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </div>
      <Footer />
    </>
  );
}
