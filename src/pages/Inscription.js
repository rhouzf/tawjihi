import React, { useState } from 'react';
import '../styles/Inscription.css';

const Inscription = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    niveau: '',
    filiere: '',
    notes: ''
  });

  const schools = [
    { id: 1, name: 'École Supérieure de Technologie', location: 'Casablanca' },
    { id: 2, name: 'Institut Supérieur de Commerce', location: 'Rabat' },
    { id: 3, name: 'École Nationale des Sciences Appliquées', location: 'Tanger' },
    { id: 4, name: 'Faculté des Sciences et Techniques', location: 'Fès' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription à implémenter
    console.log('Inscription form submitted:', { ...formData, school: selectedSchool });
    alert('Votre demande d\'inscription a été envoyée avec succès!');
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      niveau: '',
      filiere: '',
      notes: ''
    });
    setSelectedSchool('');
  };

  return (
    <div className="inscription-container">
      <div className="inscription-header">
        <h1>Inscription aux Écoles</h1>
        <p>Complétez le formulaire ci-dessous pour vous inscrire à l'école de votre choix</p>
      </div>

      <div className="inscription-content">
        <div className="schools-list">
          <h2>Écoles disponibles</h2>
          <div className="schools-grid">
            {schools.map(school => (
              <div
                key={school.id}
                className={`school-card ${selectedSchool === school.name ? 'selected' : ''}`}
                onClick={() => setSelectedSchool(school.name)}
              >
                <h3>{school.name}</h3>
                <p>{school.location}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="inscription-form">
          <h2>Formulaire d'inscription</h2>
          
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="niveau">Niveau d'études</label>
            <select
              id="niveau"
              name="niveau"
              value={formData.niveau}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez votre niveau</option>
              <option value="bac">Baccalauréat</option>
              <option value="bac+2">Bac+2</option>
              <option value="bac+3">Bac+3</option>
              <option value="bac+4">Bac+4</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="filiere">Filière souhaitée</label>
            <input
              type="text"
              id="filiere"
              name="filiere"
              value={formData.filiere}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes et commentaires</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={!selectedSchool}
          >
            Soumettre l'inscription
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inscription; 