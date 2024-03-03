export default function Exercise() {
  return (
    <div>
      <header className="header">
        <img
          src="https://i.ibb.co/3TThnvh/logo-mc-black.png"
          width="200px"
          className="header__logo-desktop"
        />
        <img
          src="https://i.ibb.co/kXTvBsD/icon-mc-black.png"
          width="60px"
          className="header__icon-mobile"
        />
        <div className="header__nav-container">
          <span>Découvrir</span>
          <span>Nouveautés</span>
          <span>Best-sellers</span>
          <span>Promotions</span>
        </div>
        <button className="cta-secondary-outline">Mon Compte</button>
      </header>
      <section className="hero-banner">
        <div className="primary-hero-block">
          <span className="primary-hero-block__small-caption">
            Plongez dans le Futur
          </span>
          <h1>L'INFINI DE LA VR</h1>
          <p className="primary-hero-block__paragraph">
            Découvrez notre sélection exclusive de casques VR. Votre aventure
            commence ici ! 🚀
          </p>
          <button className="cta-primary">Découvrir</button>
        </div>
        <div className="secondary-hero-block">
          <img
            src="https://i.ibb.co/jkcxprH/vr-guy-1280-x-1354.webp"
            width="100%"
          />
        </div>
      </section>
    </div>
  )
}
