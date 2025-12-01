"use client"

import Image from "next/image"
import { useState, use } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Check,
  Heart,
  MapPin,
  Share2,
  Syringe,
  Users,
  X,
  Facebook,
  Mail,
} from "lucide-react"
import { dogDetails, dogsData } from "@/lib/dogs-data"

export default function DogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const dogDetail = dogDetails[id]
  const dog = dogsData.find((d) => d.id === id)

  if (!dog || !dogDetail) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-serif text-3xl font-bold">Chien non trouvé</h1>
          <Button asChild>
            <Link href="/chiens">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux chiens
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const statusColors = {
    Disponible: "bg-primary text-primary-foreground",
    Réservé: "bg-secondary text-secondary-foreground",
    Urgent: "bg-destructive text-destructive-foreground",
    Adopté: "bg-muted text-muted-foreground",
  }

  const handleShare = (platform: "facebook" | "whatsapp" | "email") => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    const text = `Découvrez ${dog.name}, ${dog.age}, ${dog.breed} à adopter !`

    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
    } else if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank")
    } else if (platform === "email") {
      window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Urgent Banner */}
      {dog.status === "Urgent" && (
        <div className="border-b-4 border-destructive bg-destructive/10">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-destructive">
              <AlertCircle className="h-6 w-6 flex-shrink-0" />
              <p className="font-semibold">
                URGENT - {dog.name} est en situation critique et a besoin d&apos;une famille d&apos;urgence !
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/chiens">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux chiens
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="mb-4 overflow-hidden rounded-2xl bg-muted">
              <div className="relative aspect-[4/3]">
                <Image
                  src={dogDetail.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${dog.name}, photo ${currentImageIndex + 1}`}
                  fill
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {dogDetail.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`overflow-hidden rounded-lg ${
                    currentImageIndex === index ? "ring-4 ring-primary" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${dog.name}, miniature ${index + 1}`}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Full Description */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">À propos de {dog.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{dogDetail.fullDescription}</p>

                {dogDetail.specialNeeds && (
                  <div className="mt-6 rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-semibold text-foreground">Besoins particuliers</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{dogDetail.specialNeeds}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Temperament */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Tempérament</h2>
                <div className="flex flex-wrap gap-2">
                  {dogDetail.temperament.map((trait) => (
                    <Badge key={trait} variant="secondary" className="text-sm">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Info Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h1 className="mb-2 font-serif text-3xl font-bold text-foreground">{dog.name}</h1>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{dog.age}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{dog.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={statusColors[dog.status]}>
                    {dog.status === "Urgent" && <AlertCircle className="mr-1 h-3 w-3" />}
                    {dog.status}
                  </Badge>
                </div>

                {/* Quick Info */}
                <div className="mb-6 grid grid-cols-2 gap-3 rounded-lg bg-muted p-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Race</p>
                    <p className="font-semibold text-foreground">{dog.breed}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Genre</p>
                    <p className="font-semibold text-foreground">{dog.gender}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Âge</p>
                    <p className="font-semibold text-foreground">{dog.age}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Localisation</p>
                    <p className="font-semibold text-foreground">{dog.location.split("(")[0]}</p>
                  </div>
                </div>

                {/* Compatibility */}
                <div className="mb-6 space-y-3">
                  <h3 className="font-semibold text-foreground">Compatibilité</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Enfants</span>
                      </div>
                      {dogDetail.compatibility.kids ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Autres chiens</span>
                      </div>
                      {dogDetail.compatibility.dogs ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Chats</span>
                      </div>
                      {dogDetail.compatibility.cats ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Medical Info */}
                <div className="mb-6 space-y-3">
                  <h3 className="font-semibold text-foreground">Informations médicales</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Syringe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Vacciné</span>
                      </div>
                      {dogDetail.medical.vaccinated ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Syringe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{dog.gender === "Mâle" ? "Castré" : "Stérilisée"}</span>
                      </div>
                      {dogDetail.medical.neutered ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90" size="lg">
                    <Link href={`/adopter?dog=${dog.id}`}>
                      <Heart className="mr-2 h-5 w-5" />
                      Demande d&apos;adoption
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => handleShare("facebook")}
                    >
                      <Facebook className="mr-1 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => handleShare("email")}
                    >
                      <Mail className="mr-1 h-4 w-4" />
                      Email
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleShare("whatsapp")}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
