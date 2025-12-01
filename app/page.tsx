import Link from "next/link"
import { ArrowRight, Heart, Users, Award, TrendingUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DogCard } from "@/components/dog-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { dogsData } from "@/lib/dogs-data"

export default function HomePage() {
  const urgentDogs = dogsData.filter((dog) => dog.status === "Urgent" || dog.status === "Disponible").slice(0, 3)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-muted">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Leur regard crie l&apos;urgence.
              <br />
              <span className="text-primary">Soyez leur espoir.</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed sm:text-xl">
              Chaque chien mérite une seconde chance. Rejoignez notre mission de sauvetage et offrez un foyer aimant à
              un compagnon fidèle.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/chiens">
                  Adopter un chien
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 text-base bg-transparent">
                <Link href="/soutenir">Faire un don</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Dogs Section */}
      <section className="border-b border-border bg-destructive/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 font-serif text-3xl font-bold text-destructive sm:text-4xl">
              Urgence : Ils ont besoin de vous
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Ces chiens sont en situation critique et ont besoin d&apos;une famille d&apos;urgence
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {urgentDogs.map((dog) => (
              <DogCard key={dog.id} {...dog} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/chiens">
                Voir tous nos chiens
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">Notre Mission</h2>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                La Survivance Animale est une association dédiée au sauvetage, à la protection et à la réhabilitation
                des chiens en détresse. Nous croyons que chaque animal mérite une vie digne, remplie d&apos;amour et de
                respect.
              </p>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Depuis notre création, nous avons sauvé et trouvé des familles aimantes pour des centaines de chiens.
                Notre équipe de bénévoles passionnés travaille sans relâche pour offrir une seconde chance à ces êtres
                innocents.
              </p>
              <Button asChild>
                <Link href="/a-propos">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img src="/volunteer-with-rescue-dog.jpg" alt="Bénévole avec chien" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Heart className="mb-4 h-12 w-12 text-primary" />
                <div className="mb-2 font-serif text-4xl font-bold text-foreground">350+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Chiens sauvés</div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <TrendingUp className="mb-4 h-12 w-12 text-primary" />
                <div className="mb-2 font-serif text-4xl font-bold text-foreground">280+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Adoptions réussies
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <div className="mb-2 font-serif text-4xl font-bold text-foreground">50+</div>
                <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Bénévoles actifs
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Award className="mb-4 h-12 w-12 text-primary" />
                <div className="mb-2 font-serif text-4xl font-bold text-foreground">8 ans</div>
                <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  D&apos;expérience
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">Histoires de Réussite</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Découvrez les belles histoires d&apos;adoption qui nous inspirent chaque jour
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img
                  src="/happy-adopted-dog-with-family.jpg"
                  alt="Histoire de réussite"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">Max & La Famille Dupont</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &quot;Max est arrivé dans notre vie il y a 6 mois. C&apos;est le meilleur compagnon que nous pouvions
                  espérer. Merci La Survivance Animale !&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img
                  src="/rescued-dog-happy-in-new-home.jpg"
                  alt="Histoire de réussite"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">Luna & Sophie</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &quot;Luna m&apos;a aidée à surmonter ma solitude. Elle est devenue ma meilleure amie. Je ne peux pas
                  imaginer ma vie sans elle.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted">
                <img
                  src="/adopted-dog-playing-with-children.jpg"
                  alt="Histoire de réussite"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">Rocky & Les Martin</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &quot;Rocky adore jouer avec nos enfants. Il s&apos;est parfaitement intégré à notre famille. Une
                  adoption qui a changé nos vies !&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl text-balance">Prêt à changer une vie ?</h2>
          <p className="mb-8 text-lg opacity-90 leading-relaxed">
            Adoptez, parrainez ou faites un don. Chaque geste compte pour nos protégés.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
              <Link href="/chiens">Voir nos chiens</Link>
            </Button>
            <Button asChild size="lg" className="border-2 border-primary-foreground bg-accent hover:bg-accent/90">
              <Link href="/soutenir">Nous soutenir</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
