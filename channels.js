/**
 * ====================================================
 * FICHIER DE CONFIGURATION DES CHAÎNES TV
 * ====================================================
 * METS TON API ICI. Deux options :
 * 
 * OPTION A - API distante :
 * Décommente et remplace l'URL par la tienne.
 * Le fichier doit retourner un tableau d'objets avec :
 * { name, url, image, status: 'online' | 'offline' }
 * 
 * OPTION B - Liste locale :
 * Ajoute tes chaînes manuellement dans la variable CHANNELS_FALLBACK.
 */

// ⚠️ REMPLACE CETTE URL PAR TON API
const TPZ_CHANNELS_API = ''; // Ex: 'https://ton-api.com/channels.json'

// Liste de secours si l'API ne répond pas
const CHANNELS_FALLBACK = [
    { name: "TF1", url: "https://exemple.com/tf1.m3u8", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/TF1_logo_2013.svg/120px-TF1_logo_2013.svg.png", status: "online" },
    { name: "France 2", url: "https://exemple.com/france2.m3u8", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/France_2_logo.svg/120px-France_2_logo.svg.png", status: "online" },
    { name: "BeIN Sports 1", url: "https://exemple.com/bein1.m3u8", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/BeIN_Sports_logo.svg/120px-BeIN_Sports_logo.svg.png", status: "online" },
    { name: "RMC Sport 1", url: "https://exemple.com/rmc1.m3u8", image: "", status: "online" },
    { name: "Eurosport 1", url: "https://exemple.com/eurosport.m3u8", image: "", status: "online" },
    { name: "Canal+ Sport", url: "", image: "", status: "offline" }
];

/**
 * Charge les chaînes depuis l'API ou le fallback.
 * Ne pas modifier cette fonction.
 */
async function loadChannels() {
    window.TPZ_CHANNELS = [];
    
    if (TPZ_CHANNELS_API) {
        try {
            const res = await fetch(TPZ_CHANNELS_API);
            const data = await res.json();
            // Si ton API renvoie { channels: [...] }, adapte ici
            window.TPZ_CHANNELS = Array.isArray(data) ? data : (data.channels || []);
            window.TPZ_CHANNELS_LOADED = true;
            return;
        } catch (e) {
            console.warn('API chaînes indisponible, fallback utilisé.', e);
        }
    }
    
    // Fallback
    window.TPZ_CHANNELS = CHANNELS_FALLBACK;
    window.TPZ_CHANNELS_LOADED = true;
}