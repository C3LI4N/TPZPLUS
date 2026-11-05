/**
 * ====================================================
 * FICHIER DE CONFIGURATION DES CHAÎNES TV
 * ====================================================
 * METS TON API ICI.
 * 
 * Format attendu pour l'API (tableau JSON) :
 * [
 *   { "name": "Ma chaîne", "url": "https://...", "image": "https://...", "status": "online" },
 *   { "name": "Autre chaîne", "url": "https://...", "image": "", "status": "offline" }
 * ]
 */

// ⚠️ REMPLACE CETTE URL PAR TON API
const TPZ_CHANNELS_API = ''; // Ex: 'https://ton-api.com/channels.json'

async function loadChannels() {
    window.TPZ_CHANNELS = [];
    
    if (!TPZ_CHANNELS_API) {
        // Pas d'API configurée : liste vide
        window.TPZ_CHANNELS_LOADED = true;
        return;
    }
    
    try {
        const res = await fetch(TPZ_CHANNELS_API);
        const data = await res.json();
        window.TPZ_CHANNELS = Array.isArray(data) ? data : (data.channels || []);
    } catch (e) {
        console.warn('API chaînes indisponible.', e);
        window.TPZ_CHANNELS = [];
    }
    window.TPZ_CHANNELS_LOADED = true;
}