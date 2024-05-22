import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  //If I own my db, this could be the best way

  //Promise를 추가 하고 해당 변수에 await를 붙이지 않으면
  //아직 데이터를 가지고 오지 않은 상태에서 렌더링 하기
  //때문에 오류가 발생한다
  const news = await getAllNews();
  console.log(news);

  // const response = await fetch("http://localhost:8080/news");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news.");
  // }

  // const news = await response.json();

  //we wait until the response data is there anyway since we have await in the fetch.
  //It means that No JSX code gets generated before that data is available.

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
