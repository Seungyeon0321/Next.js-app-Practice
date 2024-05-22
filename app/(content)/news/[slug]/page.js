import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

import Link from "next/link";

export default function NewsPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  //not-found.js가 동작 안 하는 이유는 Next.js는 실제로 이 페이지가 존재하는지 알 수 없다, 즉 newsItem이 있는지 없는지 알 수 없음.
  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dataTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
