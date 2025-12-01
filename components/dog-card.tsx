import Image from "next/image"
import Link from "next/link"
import { AlertCircle, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface DogCardProps {
  id: string
  name: string
  age: string
  breed: string
  gender: "Mâle" | "Femelle"
  location: string
  status: "Disponible" | "Réservé" | "Urgent" | "Adopté"
  imageUrl: string
  description?: string
}

export function DogCard({ id, name, age, breed, gender, location, status, imageUrl }: DogCardProps) {
  const statusColors = {
    Disponible: "bg-primary text-primary-foreground",
    Réservé: "bg-secondary text-secondary-foreground",
    Urgent: "bg-destructive text-destructive-foreground",
    Adopté: "bg-muted text-muted-foreground",
  }

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${name}, ${breed} à adopter`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className={`absolute right-3 top-3 ${statusColors[status]}`}>
          {status === "Urgent" && <AlertCircle className="mr-1 h-3 w-3" />}
          {status}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 font-serif text-xl font-bold text-foreground">{name}</h3>
        <div className="mb-3 space-y-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>
              {age} • {breed} • {gender}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        <Button asChild className="w-full bg-transparent" variant="outline">
          <Link href={`/chiens/${id}`}>Découvrir {name}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
