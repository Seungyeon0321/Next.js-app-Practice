import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function archivePage() {
  //이렇게 기능만 하는 녀석은 따로 lib에 보관해서 사용하도록 하자
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
