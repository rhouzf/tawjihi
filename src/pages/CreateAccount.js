import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateAccount.css';

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '',
    niveau: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Validation du nom et prénom
    if (formData.nom.length < 2) {
      newErrors.nom = 'Le nom doit contenir au moins 2 caractères';
    }
    if (formData.prenom.length < 2) {
      newErrors.prenom = 'Le prénom doit contenir au moins 2 caractères';
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide';
    }

    // Validation du mot de passe
    if (formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre';
    }

    // Validation de la confirmation du mot de passe
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    // Validation du téléphone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.telephone)) {
      newErrors.telephone = 'Veuillez entrer un numéro de téléphone valide';
    }

    // Validation du niveau
    if (!formData.niveau) {
      newErrors.niveau = 'Veuillez sélectionner votre niveau d\'études';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulation d'une requête API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Logique d'inscription
      console.log('Compte créé:', formData);
      
      // Redirection vers la page d'accueil
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'Une erreur est survenue lors de la création du compte'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-content">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit} className="create-account-form">
          <div className={`form-group ${errors.nom ? 'error' : ''}`}>
            <label>Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              placeholder="Entrez votre nom"
            />
            {errors.nom && <div className="error-message">{errors.nom}</div>}
          </div>

          <div className={`form-group ${errors.prenom ? 'error' : ''}`}>
            <label>Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              placeholder="Entrez votre prénom"
            />
            {errors.prenom && <div className="error-message">{errors.prenom}</div>}
          </div>

          <div className={`form-group ${errors.email ? 'error' : ''}`}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="exemple@email.com"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className={`form-group ${errors.password ? 'error' : ''}`}>
            <label>Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className={`form-group ${errors.confirmPassword ? 'error' : ''}`}>
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>

          <div className={`form-group ${errors.telephone ? 'error' : ''}`}>
            <label>Téléphone</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              placeholder="0123456789"
            />
            {errors.telephone && <div className="error-message">{errors.telephone}</div>}
          </div>

          <div className={`form-group ${errors.niveau ? 'error' : ''}`}>
            <label>Niveau d'études</label>
            <select
              name="niveau"
              value={formData.niveau}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez votre niveau</option>
              <option value="lycée">Lycée</option>
              <option value="université">Université</option>
              <option value="master">Master</option>
            </select>
            {errors.niveau && <div className="error-message">{errors.niveau}</div>}
          </div>

          {errors.submit && <div className="error-message">{errors.submit}</div>}

          <button 
            type="submit" 
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Création en cours...' : 'Créer mon compte'}
          </button>
        </form>

        <p className="back-link">
          <button onClick={() => navigate('/')} className="back-button">
            Retour à l'accueil
          </button>
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
