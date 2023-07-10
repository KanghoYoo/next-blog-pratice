import Head from "next/head";
import { getSortedPostsData, getPostData } from "./../../lib/posts";
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const postData = await getPostData(id);

  return {
    postData,
  };
}

export default async function Post(params: any) {
  const postData = await generateMetadata(params);

  return (
    <div>
      <Head>
        <title>{postData.postData.title}</title>
      </Head>
      <article>
        <h1>{postData.postData.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: postData.postData.contentHtml }}
        />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map(({ id }) => {
    return {
      params: {
        id: id,
      },
    };
  });
}
