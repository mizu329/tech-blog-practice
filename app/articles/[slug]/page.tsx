import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      title: "タイトルタイトルタイトル",
    },
    // {
    //   id: "2",
    //   title: "サンプルタイトルその2",
    // },
    // {
    //   id: "3",
    //   title: "サンプルタイトルその3",
    // },
  ],
};

export default function ArticlePage() {
  return (
    <>
      {data.contents.map((article) => (
        <div key={article.id} className={styles.article}>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.content}></div>
        </div>
      ))}
      <Footer />
    </>
  );
}
