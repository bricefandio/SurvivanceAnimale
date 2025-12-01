import type { DogCardProps } from "@/components/dog-card"

export const dogsData: DogCardProps[] = [
  {
    id: "kyubi",
    name: "Kyubi",
    age: "12 mois",
    breed: "Staffordshire Terrier",
    gender: "Mâle",
    location: "Les Mureaux (78)",
    status: "Urgent",
    imageUrl: "/images/kyubi-1.jpeg",
    description:
      "Kyubi est un jeune chien de type Staff, âgé d'à peine 1 an, qui se trouve actuellement dans une situation d'urgence. Malgré son jeune âge, il a déjà de bonnes bases d'éducation : il connaît le assis, le couché et la commande 'à sa place'. Il est plein d'amour et n'attend que de le partager.",
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
      "Kyubi est un jeune chien de type Staff, âgé d'à peine 1 an, qui se trouve actuellement dans une situation d'urgence absolue au refuge. Malgré son jeune âge et son passé difficile, il a déjà de bonnes bases d'éducation : il connaît le assis, le couché et la commande 'à sa place'. Il est plein d'amour à donner et n'attend qu'une famille patiente pour continuer son éducation et lui offrir la vie stable qu'il mérite.",
    temperament: ["Affectueux", "En apprentissage", "Anxiété de séparation", "Joueur"],
    compatibility: {
      kids: true,
      dogs: false,
      cats: false,
    },
    medical: {
      vaccinated: true,
      neutered: true,
    },
    specialNeeds: "Famille présente et patiente, expérience avec les chiens de type molossoïde appréciée",
  },
}
