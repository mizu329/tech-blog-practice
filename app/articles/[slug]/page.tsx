import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";
import { getArticles } from "@/app/_libs/microcms";
import { getArticleDetail } from "@/app/_libs/microcms";

type Props = {
  params: {
    slug: string;
  };
};

// export default async function Page({ params }: Props) {
//   const data = await getArticles(params.slug);

//   return <>{data.title}</>;
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleDetail(params.slug);
  console.log(article);

  return (
    <>
      <Header />
      <div className={`${styles.articleWrapper} ${styles.inner}`}>
        <h1>{article.title}</h1>

        {article.thumbnail ? (
          <img
            src={article.thumbnail.url}
            alt={article.title}
            className={styles.thumbnail}
          />
        ) : (
          <div className={styles.articleThumbnailPlaceholder}>No Image</div>
        )}
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </div>

      <Footer />
    </>
  );
}
