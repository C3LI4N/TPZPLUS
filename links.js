/**
 * CONFIGURATION CENTRALE DES LIENS DU SITE
 * Modifie BASE_URL si ton site est dans un sous-dossier.
 * Exemple : '/tpz/' au lieu de '/'.
 */
const SITE_CONFIG = {
    BASE_URL: '/', // ⚠️ Change ici si ton site est dans un sous-dossier
    VERSION: '2.0'
};

/**
 * Génère un lien absolu vers une page.
 * Utilisation : link('dmca.html') -> '/dmca.html'
 */
function link(path) {
    if (!path) return SITE_CONFIG.BASE_URL;
    if (path.startsWith('http')) return path;
    const base = SITE_CONFIG.BASE_URL.endsWith('/') ? SITE_CONFIG.BASE_URL : SITE_CONFIG.BASE_URL + '/';
    return base + path.replace(/^\//, '');
}

/**
 * Détecte le chemin de base du site (utile en local)
 */
(function detectBase() {
    // Si on est en local (file://), on utilise './'
    if (window.location.protocol === 'file:') {
        SITE_CONFIG.BASE_URL = './';
    }
})();