import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo" data-cursor="OPEN">
          <Image
            src="/images/logo/logo_fr-1.png"
            alt="FR — Muhammad Furqon Rizqi"
            width={1254}
            height={1254}
            loading="eager"
            fetchPriority="high"
          />
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
