import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Image
            src="/images/logo/logo_fr-1.png"
            alt="FR — Muhammad Furqon Rizqi"
            width={1254}
            height={1254}
          />
        </div>

        <div className="footer__meta">
          <span>Muhammad Furqon Rizqi</span>
          <span>Software Engineer / Full-Stack Developer</span>
        </div>

        <div className="footer__bottom">
          <span>Indonesia</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
