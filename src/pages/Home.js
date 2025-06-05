import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenue sur TawjihiBot</h1>
          <p>Votre guide intelligent pour l'orientation scolaire et professionnelle</p>
          <div className="hero-buttons">
            <Link to="/create-account" className="cta-button primary">
              Créer un compte
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Étudiants</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Écoles</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Nos Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Orientation Personnalisée</h3>
            <p>Découvrez les filières qui correspondent à vos compétences et aspirations grâce à notre système d'orientation intelligent.</p>
            <p>Posez vos questions et obtenez des réponses instantanées sur les différentes filières et opportunités d'études.</p>
            <Link to="/chatbot" className="feature-link">Tester le chatbot →</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Inscription aux Écoles</h3>
            <p>Accédez facilement aux inscriptions dans les établissements de votre choix et suivez votre dossier en temps réel.</p>
            <Link to="/inscription" className="feature-link">Voir les écoles →</Link>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">Comment ça marche ?</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Créez votre compte</h3>
            <p>Inscrivez-vous gratuitement pour accéder à toutes nos fonctionnalités et commencer votre parcours d'orientation</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Explorez les filières</h3>
            <p>Utilisez notre chatbot pour découvrir les différentes options qui correspondent à votre profil et vos aspirations</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Inscrivez-vous</h3>
            <p>Choisissez votre école parmi notre large sélection et complétez votre inscription en ligne en quelques clics</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">Ce que disent nos utilisateurs</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"TawjihiBot m'a aidé à trouver la filière parfaite pour mes études. Le chatbot est vraiment utile !"</p>
            <div className="testimonial-author">
              <span className="author-name">Sarah M.</span>
              <span className="author-title">Étudiante en Informatique</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"L'inscription en ligne est très simple et rapide. Je recommande vivement !"</p>
            <div className="testimonial-author">
              <span className="author-name">Mohammed K.</span>
              <span className="author-title">Étudiant en Commerce</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Un excellent outil pour l'orientation. Les conseils sont pertinents et personnalisés."</p>
            <div className="testimonial-author">
              <span className="author-name">Layla B.</span>
              <span className="author-title">Étudiante en Médecine</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à commencer votre parcours ?</h2>
          <p>Rejoignez des milliers d'étudiants qui ont déjà trouvé leur voie</p>
          <div className="cta-buttons">
            <Link to="/inscription" className="cta-button primary">
              Commencer maintenant
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 