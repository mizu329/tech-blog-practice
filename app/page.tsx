"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import shapes from "@/public/animations/shapes.json";
import { title } from "process";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: {
  contents: Article[];
} = {
  contents: [
    {
      id: "1",
      title: "タイトルタイトルタイトル",
      category: {
        name: "カテゴリー名",
      },
      publishedAt: "2023-10-01",
      createdAt: "2023-10-01",
    },
    {
      id: "2",
      title: "タイトルタイトルタイトル",
      category: {
        name: "カテゴリー名",
      },
      publishedAt: "2023-10-02",
      createdAt: "2023-10-01",
    },
  ],
};

export default function Home() {
  const name = "Design Code";
  const sliceDate = data.contents.slice(0, 2);

  return (
    <>
      <section className={`${styles.fv} ${styles.inner}`}>
        <h1 className={styles.title}>{name}</h1>
        <Lottie
          className={styles.fvAnimation}
          animationData={shapes}
          loop={true}
        />
      </section>

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
            {sliceDate.map((Article) => (
              <li key={Article.id} className={styles.articleItem}>
                <Link href={`/articles/${Article.id}`}>
                  <div className="">
                    <Image
                      src="/images/sample.jpg"
                      alt="サンプル画像"
                      width={300}
                      height={200}
                    />
                  </div>
                  <dl className={styles.contect}>
                    <dt className={styles.newsItemTitle}>{Article.title}</dt>
                    <dd className={styles.meta}>
                      {Article.category.name} | {Article.publishedAt}
                    </dd>
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

      <footer className={`${styles.footer} ${styles.inner}`}>
        <p>@ 2025 Mizuki. All right reserved.</p>
      </footer>
    </>
  );
}
