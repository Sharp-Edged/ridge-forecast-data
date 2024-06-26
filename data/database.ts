import { Mountain } from "./models"

const database: Mountain[] = [
  {
    id: 0,
    name: "hellossss world",

    popularity: 2,
    avalancheSafety: "safe",
    pos: { latitude: 45.1075864, longitude: 5.7757925 },
    data: {
      type: "ski",
      conditions: "mid",
      pistes: [
        {
          name: "hello",
          difficulty: "red",
          popularity: 1,
          snowQuality: 0.5,
        },
        {
          name: "world",
          difficulty: "blue",
          popularity: 2,
          snowQuality: 0.6,
        },
      ],
    },
    wind: [],
    precipitation: [
      ["clear", 0.0],
      ["rain", 0.1],
      ["snow", 0.2],
      ["snow", 0.2],
      ["snow", 0.2],
      ["snow", 0.2],
      ["snow", 1],
      ["snow", 0.2],
      ["snow", 0.2],
      ["snow", 0.2],
      ["snow", 0.2],
    ],
    temps: [-3, -15],
    height: 1200,
    baseCamp: 300,
    emergency_services: [
      { pos: { latitude: 45.1075869, longitude: 5.7757926 } },
    ],
  },
  
  // Skiing
  {
    id: 1,
    name: "Belledonne",

    popularity: 3,
    avalancheSafety: "moderate",
    pos: { latitude: 45.1801828, longitude: 5.5496001 },
    data: {
      type: "ski",
      conditions: "good",
      pistes: [
        { popularity: 1, difficulty: "red", name: "Clapierre", snowQuality: 0.4 },
        { popularity: 3, difficulty: "blue", name: "Souchette", snowQuality: 0.7 },
        { popularity: 1, difficulty: "black", name: "Vallons du pra", snowQuality: 0.3 },
        { popularity: 2, difficulty: "blue", name: "Coulemelle", snowQuality: 0.5 },
        { popularity: 2, difficulty: "red", name: "Girolle", snowQuality: 0.5 },
        { popularity: 0, difficulty: "black", name: "Plan du pra", snowQuality: 0.6 },
      ],
    },
    wind: [[135, 20]],
    precipitation: [["rain", 0.3]],
    temps: [2, -13],
    height: 2977,
    baseCamp: 860,
    emergency_services: [ 
      { pos: { latitude: 45.1811828, longitude: 5.5486001 } },
      { pos: { latitude: 45.1802828, longitude: 5.5498001 } },
    ]
  },
  {
    id: 2,
    name: "Vercors",

    popularity: 2,
    avalancheSafety: "suicide",
    pos: { latitude: 44.9675985, longitude: 5.529923 },
    data: {
      type: "ski",
      conditions: "bad",
      pistes: [
        { popularity: 1, difficulty: "blue",  name: "Boucle Daille",              snowQuality: 0.4 },
        { popularity: 2, difficulty: "blue",  name: "Boucle Laisinant",           snowQuality: 0.3 },
        { popularity: 2, difficulty: "blue",  name: "Piste Fond Le Manchet",      snowQuality: 0.5 },
        { popularity: 1, difficulty: "red",   name: "Piste Fond Manchet Cascade", snowQuality: 0.6 },
        { popularity: 1, difficulty: "black", name: "Cretes",                     snowQuality: 0.1 },
        { popularity: 0, difficulty: "black", name: "Campanules",                 snowQuality: 0.2 },
        { popularity: 1, difficulty: "black", name: "Paquerettes",                snowQuality: 0.3 },
        { popularity: 2, difficulty: "blue",  name: "Cafo",                       snowQuality: 0.4 },
        { popularity: 3, difficulty: "blue",  name: "Lavachet",                   snowQuality: 0.4 },
        { popularity: 2, difficulty: "red",   name: "Edelweiss",                  snowQuality: 0.1 },
      ],
    },
    wind: [[97, 8]],
    precipitation: [["snow", 0.6]],
    temps: [9, -13],
    height: 3488,
    baseCamp: 1850,
    emergency_services: [ 
      { pos: { latitude: 44.9664985, longitude: 5.530923 }, },
    ]
  },
  {
    id: 3,
    name: "Chartreuse",

    popularity: 2,
    avalancheSafety: "moderate",
    pos: { latitude: 45.3, longitude: 5.82 },
    data: {
      type: "ski",
      conditions: "mid",
      pistes: [
        { popularity: 1, difficulty: "black", name: "Fraisses", snowQuality: 0.5 },
        { popularity: 2, difficulty: "red", name: "Planolet", snowQuality: 0.7 },
        { popularity: 2, difficulty: "red", name: "Bruyere", snowQuality: 0.7 },
        { popularity: 0, difficulty: "black", name: "Dromadaire", snowQuality: 0.3 },
        { popularity: 3, difficulty: "blue", name: "Gentiane", snowQuality: 0.8 },
        { popularity: 2, difficulty: "blue", name: "Eterlou", snowQuality: 0.6 },
      ],
    },
    wind: [[273, 11]],
    precipitation: [["snow", 0.8]],
    temps: [11, -9],
    height: 1789,
    baseCamp: 900,
    emergency_services: [ 
      { pos: { latitude: 45.299, longitude: 5.821 }, },
      { pos: { latitude: 45.301, longitude: 5.823 }, },
      { pos: { latitude: 45.298, longitude: 5.822 }, }
    ]
  },


  // Climbing
  {
    id: 4,
    name: "Saint Pancrasse", 

    popularity: 2,
    avalancheSafety: "safe",
    pos: { latitude: 45.28468, longitude: 5.85555 },
    data: {
      type: "climb",
      conditions: "good",
      humidity: 0.74,
      last_precipitation: 23,
      grip: 0.6,
      gear: ["?"],
      routes: [
        { popularity: 1, difficulty: "4", name: "Le Zanzale" },
        { popularity: 2, difficulty: "5+", name: "L'écaille" },
        { popularity: 2, difficulty: "7c+", name: "Pourquoi pas" },
        { popularity: 1, difficulty: "7a", name: "Choc à pic" },
        { popularity: 0, difficulty: "5", name: "La cheminée" },
        { popularity: 0, difficulty: "8c+", name: "La Directe du Crapaud"}
      ],
    },
    wind: [[233, 12.2]],
    precipitation: [["rain", 0.27]],
    temps: [17, -1],
    height: 2082,
    baseCamp: 640,
    emergency_services: [ 
      { pos: { latitude: 45.28368, longitude: 5.86555 } }
    ]
  },

  {
    id: 5,
    name: "Le Petit Désert", 

    popularity: 3,
    avalancheSafety: "safe",
    pos: { latitude: 45.18229, longitude: 5.67899 },
    data: {
      type: "climb",
      conditions: "mid",
      humidity: 0.9,
      last_precipitation: 21,
      grip: 0.7,
      gear: ["?"],
      routes: [
        { popularity: 3, difficulty: "5+", name: "Sa lime à vélo" },
        { popularity: 1, difficulty: "5+", name: "Les tiques de mes fesses" },
        { popularity: 2, difficulty: "5", name: "Fac you !" },
        { popularity: 1, difficulty: "7a+", name: "Enflée ta mine" },
        { popularity: 0, difficulty: "6a", name: "Blocs en stock" },
        { popularity: 0, difficulty: "7a+", name: "Laisse, dédé!" },
      ],
    },
    wind: [[223, 11.4]],
    precipitation: [["rain", 0.49]],
    temps: [15, 3],
    height: 1901,
    baseCamp: 420,
    emergency_services: [ 
      { pos: { latitude: 45.18117, longitude: 5.67605 } }
    ]
  },

  {
    id: 6,
    name: "Lans en Vercors", 

    popularity: 3,
    avalancheSafety: "moderate",
    pos: { latitude: 45.12604, longitude: 5.60320 },
    data: {
      type: "climb",
      conditions: "good",
      humidity: 0.8,
      last_precipitation: 22,
      grip: 0.5,
      gear: ["?"],
      routes: [
        { popularity: 0, difficulty: "4", name: "Nicolas" },
        { popularity: 2, difficulty: "5", name: "La Niche" },
        { popularity: 1, difficulty: "6b+", name: "Bergerac" },
        { popularity: 0, difficulty: "7b", name: "Libidinos" },
        { popularity: 3, difficulty: "5+", name: "La Madelon" },
        { popularity: 2, difficulty: "6b+", name: "L'échelle" },
      ],
    },
    wind: [[197, 7.7]],
    precipitation: [["rain", 0.35]],
    temps: [17, -3],
    height: 2341,
    baseCamp: 536,
    emergency_services: [ 
      { pos: { latitude: 45.12504, longitude: 5.60220 } },
      { pos: { latitude: 45.12304, longitude: 5.60120 } },
    ]
  },

  {
    id: 7,
    name: "Pierrot Beach", 

    popularity: 2,
    avalancheSafety: "safe",
    pos: { latitude: 45.07104, longitude: 5.40233  },
    data: {
      type: "climb",
      conditions: "bad",
      humidity: 0.3,
      last_precipitation: 18,
      grip: 0.6,
      gear: ["?"],
      routes: [
        { popularity: 2, difficulty: "6b+", name: "Bichon Futé" },
        { popularity: 0, difficulty: "8a", name: "Mérou" },
        { popularity: 1, difficulty: "7c", name: "Dutroumania" },
        { popularity: 2, difficulty: "6b+", name: "Travailler moins pour gagner moins" },
        { popularity: 3, difficulty: "6c", name: "Socquettes et crispettes" },
        { popularity: 3, difficulty: "8a", name: "La puesta del Sol" },
      ],
    },
    wind: [[187, 6.3]],
    precipitation: [["rain", 0.19]],
    temps: [16, -6],
    height: 2087,
    baseCamp: 465,
    emergency_services: [ 
      { pos: { latitude: 45.07204, longitude: 5.40333  } }
    ]
  },
]

export const getMountainById = async (_: string): Promise<Mountain> =>
  database[0]
export const getMountains = async (): Promise<Mountain[]> => database
