"use client";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

// When we forget to pass hero page para then this defaultHero css class will be used
Hero.defaultProps = {
  hero: "defaultHero",
};
