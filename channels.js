/**
 * ⚠️ METS TON API ICI
 * Format attendu : [{ name, url, image, status: 'online' | 'offline' }]
 */
const TPZ_CHANNELS_API = 'https://api.cdnlivetv.is/api/v1/channels/?user=cdnlivetv&plan=free'; // Ex: 'https://ton-api.com/channels.json'

const CHANNELS_FALLBACK = [
    { name: "TF1", url: "https://exemple.com/tf1.m3u8", image: "", status: "online" },
    { name: "France 2", url: "https://exemple.com/france2.m3u8", image: "", status: "online" },
    { name: "BeIN Sports 1", url: "https://exemple.com/bein1.m3u8", image: "", status: "online" },
    { name: "RMC Sport 1", url: "https://exemple.com/rmc1.m3u8", image: "", status: "online" },
    { name: "Eurosport 1", url: "https://exemple.com/eurosport.m3u8", image: "", status: "online" },
    { name: "Canal+ Sport", url: "", image: "", status: "offline" }
];

async function loadChannels() {
    window.TPZ_CHANNELS = [];
    
    if (TPZ_CHANNELS_API) {
        try {
            const res = await fetch(TPZ_CHANNELS_API);
            const data = await res.json();
            window.TPZ_CHANNELS = Array.isArray(data) ? data : (data.channels || []);
            window.TPZ_CHANNELS_LOADED = true;
            return;
        } catch (e) {
            console.warn('API indisponible, fallback utilisé.', e);
        }
    }
    window.TPZ_CHANNELS = CHANNELS_FALLBACK;
    window.TPZ_CHANNELS_LOADED = true;
}