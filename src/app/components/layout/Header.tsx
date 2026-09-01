import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo" data-cursor="OPEN">
          FR
        </Link>

        <nav className="header__nav">
          <a href="#projects" data-cursor="OPEN">Projects</a>
          <a href="#profile" data-cursor="OPEN">Profile</a>
          <a href="#contact" data-cursor="OPEN">Contact</a>
        </nav>
      </div>
    </header>
  );
}
