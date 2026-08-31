var mots = [
'ARBRE', 'MAISON', 'VOITURE', 'ORDINATEUR', 'TELEPHONE',
'CLAVIER', 'SOURIS', 'ECRAN', 'INTERNET', 'PROGRAMME',
'JAVASCRIPT', 'VARIABLE', 'FONCTION', 'BOUCLE', 'TABLEAU',
'SERVEUR', 'RESEAU', 'FICHIER', 'DOSSIER', 'LOGICIEL',
'APPLICATION', 'NAVIGATEUR', 'ECOLE', 'UNIVERSITE', 'ETUDIANT',
'PROFESSEUR', 'LIVRE', 'CAHIER', 'STYLO', 'CLASSE',
'MUSIQUE', 'CHANSON', 'CINEMA', 'FILM', 'ACTEUR',
'SPORT', 'FOOTBALL', 'BASKETBALL', 'TENNIS', 'NATATION',
'MONTAGNE', 'RIVIERE', 'OCEAN', 'PLAGE', 'FORET',
'SOLEIL', 'LUNE', 'ETOILE', 'NUAGE', 'PLUIE',
'NEIGE', 'VENT', 'ORAGE', 'TONNERRE', 'ECLAIR',
'CHAT', 'CHIEN', 'LION', 'TIGRE', 'ELEPHANT',
'SINGE', 'CHEVAL', 'VACHE', 'MOUTON', 'LAPIN',
'OISEAU', 'POISSON', 'REQUIN', 'DAUPHIN', 'AIGLE',
'POMME', 'BANANE', 'ORANGE', 'FRAISE', 'CERISE',
'RAISIN', 'PAIN', 'FROMAGE', 'CHOCOLAT', 'GATEAU',
'PIZZA', 'SALADE', 'SANDWICH', 'POULET', 'RIZ',
'EAU', 'CAFE', 'THE', 'JUS', 'LAIT',
'CUISINE', 'CHAMBRE', 'SALON', 'JARDIN', 'GARAGE',
'FENETRE', 'PORTE', 'TABLE', 'CHAISE', 'LIT',
'LAMPE', 'MIROIR', 'HORLOGE', 'TELEVISION', 'CANAPE',
'AVION', 'TRAIN', 'BATEAU', 'BUS', 'VELO',
'MOTO', 'TAXI', 'METRO', 'ROUTE', 'PONT',
'VILLE', 'VILLAGE', 'PAYS', 'CAPITALE', 'MONDE',
'FRANCE', 'ALGERIE', 'CANADA', 'ESPAGNE', 'ITALIE',
'JAPON', 'CHINE', 'BRESIL', 'EGYPTE', 'MAROC',
'AMOUR', 'AMITIE', 'BONHEUR', 'COURAGE', 'FORCE',
'LIBERTE', 'REVES', 'ESPOIR', 'SOURIRE', 'RIRE',
'TEMPS', 'JOUR', 'NUIT', 'MATIN', 'SOIR',
'SEMAINE', 'MOIS', 'ANNEE', 'MINUTE', 'SECONDE',
'ROUGE', 'BLEU', 'VERT', 'JAUNE', 'NOIR',
'BLANC', 'ORANGE', 'VIOLET', 'ROSE', 'MARRON',
'GRAND', 'PETIT', 'RAPIDE', 'LENT', 'FORT',
'FAIBLE', 'JEUNE', 'VIEUX', 'NOUVEAU', 'ANCIEN',
'LUMIERE', 'OMBRE', 'FEU', 'EAU', 'TERRE',
'AIR', 'ESPACE', 'PLANETE', 'ETOILE', 'GALAXIE',
'SCIENCE', 'MATHEMATIQUES', 'PHYSIQUE', 'CHIMIE', 'HISTOIRE',
'GEOGRAPHIE', 'LANGUE', 'FRANCAIS', 'ANGLAIS', 'INFORMATIQUE',
'CODE', 'ORDRE', 'PROBLEME', 'SOLUTION', 'QUESTION',
'REPONSE', 'EXERCICE', 'PROJET', 'TRAVAIL', 'RESULTAT' ,
'ANIMAL', 'BATEAU', 'BOUTEILLE', 'CARTABLE', 'CHEMISE',
'CHAUSSURE', 'CHAPEAU', 'PANTALON', 'VESTE', 'MANTEAU',
'GANT', 'MONTRE', 'LUNETTES', 'SAC', 'PORTEFEUILLE',
'ARGENT', 'BANQUE', 'MAGASIN', 'MARCHE', 'RESTAURANT',
'HOTEL', 'EGLISE', 'HOPITAL', 'GARE', 'AEROPORT',
'BIBLIOTHEQUE', 'MUSEE', 'STADE', 'PARC', 'JARDIN',
'RUE', 'AVENUE', 'QUARTIER', 'CENTRE', 'BATIMENT',
'ASCENSEUR', 'ESCALIER', 'TOIT', 'MUR', 'SOL',
'PLAFOND', 'CUILLERE', 'FOURCHETTE', 'COUTEAU', 'ASSIETTE',
'VERRE', 'TASSE', 'BOL', 'POELE', 'FOUR',
'REFRIGERATEUR', 'CONGELATEUR', 'MACHINE', 'MOTEUR', 'ROUE',
'PNEU', 'ESSENCE', 'CONDUCTEUR', 'PASSAGER', 'VOYAGE',
'VACANCES', 'VALISE', 'BILLET', 'PASSEPORT', 'DESTINATION',
'DEPART', 'ARRIVEE', 'VOYAGEUR', 'TOURISTE', 'GUIDE',
'PHOTO', 'CAMERA', 'IMAGE', 'VIDEO', 'TELEPHONE',
'ORDINATEUR', 'TABLETTE', 'CONSOLE', 'JEU', 'MANETTE',
'JOUEUR', 'EQUIPE', 'MATCH', 'VICTOIRE', 'DEFAITE',
'CHAMPION', 'MEDAILLE', 'TROPHEE', 'STADE', 'ARBITRE',
'BALLON', 'RAQUETTE', 'PISCINE', 'COURSE', 'ENTRAINEMENT',
'EXAMEN', 'DIPLOME', 'NOTE', 'COURS', 'LECON',
'ETUDE', 'DEVOIR', 'CONNAISSANCE', 'MEMOIRE', 'INTELLIGENCE',
'IDEE', 'PENSEE', 'REPONSE', 'DECISION', 'CHOIX',
'OBJECTIF', 'REUSSITE', 'ERREUR', 'CHANCE', 'RISQUE',
'AVENTURE', 'HISTOIRE', 'ROMAN', 'PAGE', 'MOT',
'PHRASE', 'LETTRE', 'PAPIER', 'CRAYON', 'GOMME',
'REGLE', 'CISEAUX', 'COLLE', 'BOITE', 'TROUSSE',
'BUREAU', 'ORDINATEUR', 'IMPRIMANTE', 'CLAVIER', 'ECRAN',
'CHARGEUR', 'BATTERIE', 'CABLE', 'CASQUE', 'ENCEINTE',
'PHOTO', 'MUSIQUE', 'RADIO', 'TELEPHONE', 'SIGNAL',
'WIFI', 'MESSAGE', 'COURRIEL', 'COMPTE', 'MOTDEPASSE',
'SECURITE', 'DONNEE', 'INFORMATION', 'SITE', 'PAGE',
'LIEN', 'MENU', 'BOUTON', 'IMAGE', 'COULEUR',
'DESIGN', 'PORTFOLIO', 'PROJET', 'DEVELOPPEUR', 'ORDINATEUR',
'PROGRAMMATION', 'LANGAGE', 'VARIABLE', 'CONDITION', 'BOUCLE',
'FONCTION', 'OBJET', 'TABLEAU', 'ELEMENT', 'DOCUMENT',
'NAVIGATEUR', 'SERVEUR', 'INTERNET', 'RESEAU', 'CONNEXION',
'TELECHARGEMENT', 'LOGICIEL', 'SYSTEME', 'APPLICATION', 'TECHNOLOGIE',
'ROBOT', 'INTELLIGENCE', 'SCIENCE', 'ESPACE', 'PLANETE',
'GALAXIE', 'UNIVERS', 'ETOILE', 'LUNE', 'SOLEIL'];
var motSecret = mots[Math.floor(Math.random() * mots.length)];
var motAffiche = '';
for (var i = 0; i < motSecret.length; i++) {
    motAffiche += '_';
}
document.getElementById('mot').innerHTML = motAffiche;
var erreurs = 0;
var lettresUtilisees = [];
function proposerLettre() {
    var lettre = document.getElementById('lettre').value.toUpperCase();
    if (lettresUtilisees.includes(lettre)) {
    return;
}
lettresUtilisees.push(lettre);
document.getElementById('lettresUtilisees').innerHTML = 'Lettres utilisées : ' + lettresUtilisees.join(' - ');
var trouve = false;
var nouveauMot = '';
for (var i = 0; i < motSecret.length; i++) {
    if (motSecret[i] == lettre) {
    nouveauMot += lettre;
    trouve = true;
} else {
    nouveauMot += motAffiche[i];
}}
if (trouve) {
    motAffiche = nouveauMot;
    document.getElementById('mot').innerHTML = motAffiche;
} else {
    erreurs++;
    document.getElementById('erreurs').innerHTML = 'Erreurs : ' + erreurs + ' / 7';
    if (erreurs == 1) {
    document.getElementById('tete').style.display = 'block';
    }
    if (erreurs == 2) {
        document.getElementById('corps').style.display = 'block';
    }
    if (erreurs == 3) {
        document.getElementById('brasGauche').style.display = 'block';
    }
    if (erreurs == 4) {
        document.getElementById('brasDroit').style.display = 'block';
    }
    if (erreurs == 5) {
        document.getElementById('jambeGauche').style.display = 'block';
    }
    if (erreurs == 6) {
        document.getElementById('jambeDroite').style.display = 'block';
    }
}
if (motAffiche == motSecret) {
    document.getElementById('message').innerHTML = 'Gagné !';
}
if (erreurs >= 7) {
    document.getElementById('message').innerHTML = 'Perdu ! Le mot était ' + motSecret;
}
document.getElementById('lettre').value = '';
}
document.getElementById('formulaire').onsubmit = function() {
    proposerLettre();
    return false;
}
document.getElementById("rejouer").addEventListener("click", nouvellePartie)