import {
  createClient,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
  throw new Error("Missing microCMS environment variables.");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export type Category = {
  name: string;
};

export type Article = {
  id: string;
  title: string;
  body: string;
  category: Category[];
  thumbnail?: {
    url: string;
  };
} & MicroCMSListContent;

export const getArticles = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: "article",
    queries,
  });
  return listData;
};

// export const getArticles= async
// (contentId:string, queries?: MicroCMSQueries) => {
//     const detailData = await client.getListDetail<Article>({
//         endpoint: "article",
//         contentId,
//         queries,
//     });
//     return detailData;
// };

export const getArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.get<Article>({
    endpoint: "article",
    contentId,
    queries,
  });
  return detailData;
};
