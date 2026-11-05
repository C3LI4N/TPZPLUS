window.TPZ_STREAMS = [
    {
        id: "psg-om",
        nom: "PSG 🆚 OM",
        sport: "⚽ Football",
        competition: "Ligue 1",
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&q=80",
        heureDebut: "2026-10-04T21:00:00+02:00",
        priorite: 1,
        visible: true,
        forceLive: true,
        langues: [
            { code: "FR", label: "Français", url: "https://ton-lien-stream1.m3u8" }
        ],
        stats: {
            possession: [58, 42],
            tirsCadres: [6, 3],
            passesReussies: [89, 81],
            fautes: [10, 14],
            cartonsJaunes: [1, 3],
            corners: [5, 2]
        },
        timeline: [
            { time: "72'", icon: "⚽", title: "But !", desc: "Action magnifique de Mbappé" },
            { time: "60'", icon: "🔄", title: "Changement", desc: "Entrée de l'attaquant star" },
            { time: "45'", icon: "🟨", title: "Carton Jaune", desc: "Faute au milieu de terrain" },
            { time: "12'", icon: "😮", title: "Occasion manquée", desc: "Tir sur la barre transversale" }
        ],
        compositions: {
            home: ["Gardien", "Défenseur 1", "Défenseur 2", "Milieu 1", "Attaquant"],
            away: ["Gardien", "Défenseur 1", "Défenseur 2", "Milieu 1", "Attaquant"]
        }
    },
    {
        id: "qatar-iran",
        nom: "QATAR 🆚 IRAN",
        sport: "⚽ Football",
        competition: "Asian Games",
        image: "",
        heureDebut: "2026-10-04T09:00:00+02:00",
        priorite: 2,
        visible: true,
        forceLive: true,
        langues: [
            { code: "FR", label: "Français", url: "https://jack41eo.mpgreatestclgczbmiddle.my/fr/handball/asian-games-2232217/qatar-vs-iran.html?icg=RlI&ilang=fr" }
        ]
    },
    {
        id: "real-barca",
        nom: "Real 🆚 Barça",
        sport: "⚽ Football",
        competition: "Liga",
        image: "",
        heureDebut: "2026-09-27T22:00:00+02:00",
        priorite: 3,
        visible: true,
        forceLive: false,
        langues: [
            { code: "FR", label: "Français", url: "https://ton-lien-stream2.m3u8" }
        ]
    },
    {
        id: "lakers-celtics",
        nom: "Lakers 🆚 Celtics",
        sport: "🏀 Basket",
        competition: "NBA",
        image: "",
        heureDebut: "2026-09-28T02:00:00+02:00",
        priorite: 4,
        visible: true,
        forceLive: false,
        langues: [
            { code: "FR", label: "Français", url: "https://ton-lien-stream3.m3u8" }
        ]
    }
];