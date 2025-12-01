import type { DogCardProps } from "@/components/dog-card"

export const dogsData: DogCardProps[] = [
  {
  id: "kyubi",
  name: "Kyubi",
  age: "12 mois",
  breed: "Staffordshire Terrier",
  gender: "Mâle",
  location: "Les Mureaux (78)",
  status: "Adopté",          // ← ICI
  imageUrl: "/images/kyubi-1.jpeg",
  description:
    "Kyubi a été officiellement adopté aujourd’hui ! Ce jeune staff de 1 an a trouvé une famille aimante. Merci pour votre soutien.",
},
  {
    id: "bella",
    name: "Bella",
    age: "3 ans",
    breed: "Berger Australien",
    gender: "Femelle",
    location: "Paris (75)",
    status: "Disponible",
    imageUrl: "/australian-shepherd-dog-beautiful.jpg",
  },
  {
    id: "max",
    name: "Max",
    age: "5 ans",
    breed: "Labrador",
    gender: "Mâle",
    location: "Lyon (69)",
    status: "Réservé",
    imageUrl: "/friendly-golden-labrador-dog.jpg",
  },
  {
    id: "luna",
    name: "Luna",
    age: "2 ans",
    breed: "Husky",
    gender: "Femelle",
    location: "Marseille (13)",
    status: "Disponible",
    imageUrl: "/beautiful-husky-dog-blue-eyes.jpg",
  },
  {
    id: "rocky",
    name: "Rocky",
    age: "4 ans",
    breed: "Boxer",
    gender: "Mâle",
    location: "Toulouse (31)",
    status: "Urgent",
    imageUrl: "/boxer-dog-brown.jpg",
  },
  {
    id: "coco",
    name: "Coco",
    age: "6 ans",
    breed: "Caniche",
    gender: "Femelle",
    location: "Bordeaux (33)",
    status: "Disponible",
    imageUrl: "/white-poodle-dog.jpg",
  },
]

export interface DogDetail extends DogCardProps {
  images: string[]
  fullDescription: string
  temperament: string[]
  compatibility: {
    kids: boolean
    dogs: boolean
    cats: boolean
  }
  medical: {
    vaccinated: boolean
    neutered: boolean
  }
  specialNeeds?: string
}

export const dogDetails: Record<string, DogDetail> = {
  kyubi: {
  ...dogsData[0],
  images: ["/images/kyubi-1.jpeg", "/images/kyubi-2.jpeg", "/images/kyubi-3.jpeg", "/images/kyubi-4.jpeg"],
  fullDescription:
    "Kyubi a été adopté aujourd'hui 🎉. Ce jeune chien de type Staff, âgé d'à peine 1 an, a trouvé une famille aimante prête à continuer son éducation et lui offrir une vie stable et heureuse.",
  temperament: ["Affectueux", "En apprentissage", "Joueur"],
  compatibility: {
    kids: true,
    dogs: false,
    cats: false,
  },
  medical: {
    vaccinated: true,
    neutered: true,
  },
  specialNeeds: "Kyubi est désormais adopté et ne nécessite plus de nouvelle famille ❤️",
}
,
}
