import { createClient, MicroCMSListContent } from "microcms-js-sdk";

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
  content: string;
  category: Category[];
} & MicroCMSListContent;

export async function getArticles(
  queries?: MicroCMSQueries
): Promise<Article[]> {
  const res = await client.get({
    endpoint: "article",
    queries,
  });
  return res.contents;
}
