/**
 * ====================================================
 * FICHIER DE CONFIGURATION DES MATCHS
 * ====================================================
 * Ajoute tes matchs ici. Chaque match est un objet.
 * 
 * Propriétés obligatoires :
 * - id : identifiant unique (pas d'espaces)
 * - nom : Nom du match
 * - sport : Catégorie (ex: "⚽ Football")
 * - competition : Ligue
 * - langues : Tableau { code, label, url }
 * 
 * Propriétés optionnelles :
 * - image : URL de l'image (vide "" pour fallback)
 * - heureDebut : Format ISO (ex: "2026-10-04T09:00:00+02:00")
 * - forceLive : true pour forcer le live
 * - priorite : 1 = en haut
 * - visible : false pour cacher
 */

window.TPZ_STREAMS = [
    {
        id: "match-exemple",
        nom: "Équipe A 🆚 Équipe B",
        sport: "⚽ Football",
        competition: "Compétition exemple",
        image: "",
        heureDebut: "2026-10-04T21:00:00+02:00",
        priorite: 1,
        visible: true,
        forceLive: true,
        langues: [
            { code: "FR", label: "Français", url: "https://ton-lien-stream.m3u8" }
        ]
    }
];