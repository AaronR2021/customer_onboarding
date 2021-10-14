import Link from "next/link";
function Header() {
  return (
    <nav id="nav">
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </ul>
    </nav>
  );
}
export default Header;
