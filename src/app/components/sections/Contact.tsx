export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__container">
        <div className="contact__top">
          <span>Contact / 05</span>

          <p>
            Have an idea,
            <br />
            project or opportunity?
          </p>
        </div>

        <div className="contact__main">
          <h2>
            Let&apos;s build
            <br />
            something
            <br />
            real.
          </h2>

          <a
            href="mailto:furqonrizqi0@gmail.com"
            className="contact__cta"
            data-cursor="MAIL"
          >
            Start a conversation ↗
          </a>
        </div>

        <div className="contact__links">
          <a
            href="https://github.com/FurqonRizqi01"
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-furqon-rizqi-57b025258/"
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
          >
            LinkedIn ↗
          </a>

          <a href="mailto:furqonrizqi0@gmail.com" data-cursor="MAIL">
            Email ↗
          </a>

          <a
            href="https://discord.com/users/614950521794461714"
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
          >
            Discord ↗
          </a>
        </div>
      </div>
    </section>
  );
}
