"use client";

import { useLayoutEffect, useRef } from "react";
import { credentialsAnimation } from "@/animations";
import { profile } from "@/data/profile";

type CredentialListProps = {
  label: string;
  items: typeof profile.training | typeof profile.certification;
};

function CredentialList({ label, items }: CredentialListProps) {
  return (
    <div className="credentials__block">
      <span className="credentials__label">{label}</span>

      <div className="credentials__list">
        {items.map((item, index) => (
          <article className="credential-item" key={item.title}>
            <span className="credential-item__number">
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
            </div>

            <span className="credential-item__year">{item.year}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function ProfileCredentials() {
  const credentialsRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!credentialsRef.current) return;

    return credentialsAnimation(credentialsRef.current);
  }, []);

  return (
    <section className="credentials" ref={credentialsRef}>
      <div className="container">
        <div className="credentials__grid">
          <div className="credentials__block credentials__about">
            <span className="credentials__label">About Me</span>

            <div className="credentials__about-copy">
              <p>{profile.description}</p>
              <p>
                Always learning. Always building.
                <br />
                That&apos;s how I grow.
              </p>
            </div>

            <a
              className="credentials__cv"
              href="/images/cv/CV_Muhammad_Furqon_Rizqi.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
            >
              Open CV <span aria-hidden="true">↗</span>
            </a>
          </div>

          <CredentialList label="Training" items={profile.training} />
          <CredentialList
            label="Certification"
            items={profile.certification}
          />
        </div>
      </div>
    </section>
  );
}
