import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      Home
      <Link to="/categories">
        <h2>Go to cate</h2>
      </Link>
    </main>
  );
}
