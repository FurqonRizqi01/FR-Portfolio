"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { profileAnimation } from "@/animations";
import { profile } from "@/data/profile";

export default function Profile() {
  const profileRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!profileRef.current) return;

    return profileAnimation(profileRef.current);
  }, []);

  return (
    <section className="profile" id="profile" ref={profileRef}>
      <div className="container">
        <div className="profile__hero">
          <div className="profile__content">
            <span className="section-number">03 / Profile</span>

            <h2 aria-label={profile.name}>
              <span className="profile__title-mask">
                <span className="profile__title-line">Muhammad</span>
              </span>
              <span className="profile__title-mask">
                <span className="profile__title-line">Furqon</span>
              </span>
              <span className="profile__title-mask">
                <span className="profile__title-line">Rizqi</span>
              </span>
            </h2>

            <div className="profile__role">
              {profile.role.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>

            <p className="profile__description">{profile.description}</p>

            <div className="profile__signature">
              FR
              <span>For Real.</span>
            </div>
          </div>

          <div className="profile__photo">
            <Image
              src="/images/profile/furqon-bg.png"
              alt={profile.name}
              width={960}
              height={1280}
              sizes="(max-width: 900px) 180vw, 75vw"
            />
          </div>

          <dl className="profile__details">
            {profile.details.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className="profile__background-text" aria-hidden="true">
            About
          </div>
        </div>
      </div>
    </section>
  );
}
