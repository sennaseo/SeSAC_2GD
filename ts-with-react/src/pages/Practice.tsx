import HeaderMenu from "../component/HeaderMenu";
import { Link } from "react-router-dom";

export default function practice() {
  return (
    <>
      <HeaderMenu></HeaderMenu>

      <h1>practice page</h1>
      <ul>
        <li>
          <Link to="matzip">맛집 모음</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
