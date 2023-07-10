import { getSortedPostsData } from "@/lib/posts";
import Head from "next/head";
import Link from "next/link";

export default async function Home() {
  const allPostsData = await getSortedPostsData();

  return (
    <div>
      <Head>
        <title>블로그</title>
      </Head>
      <ul>
        {!!allPostsData &&
          allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <Link legacyBehavior href={`/${id}`}>
                <a>{title}</a>
              </Link>
              <small>{date}</small>
            </li>
          ))}
      </ul>
    </div>
  );
}
