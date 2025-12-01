import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Users, Award, Shield, HandHeart } from "lucide-react"

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
            L&apos;Association
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Découvrez qui nous sommes et notre engagement pour la cause animale
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Mission */}
        <section className="mb-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Notre Mission</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Sauver, Protéger, Réhabiliter
              </h2>
              <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                La Survivance Animale est née d&apos;une passion profonde pour le bien-être animal et d&apos;un constat
                alarmant : trop de chiens se retrouvent abandonnés, maltraités ou en situation de détresse.
              </p>
              <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                Notre association œuvre chaque jour pour donner une seconde chance à ces êtres innocents. Nous croyons
                fermement que chaque animal mérite une vie digne, remplie d&apos;amour et de respect.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Grâce à notre réseau de bénévoles dévoués et de familles d&apos;accueil, nous offrons aux chiens les
                soins, l&apos;éducation et l&apos;affection nécessaires avant de leur trouver un foyer permanent.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/marley.jpeg"
                alt="Marley, chien sauvé par La Survivance Animale"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 600px, 90vw"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-full bg-black/60 px-4 py-2 text-center text-sm font-medium text-white shadow-lg backdrop-blur">
                En hommage à Marley, sorti de fourrière
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2">
                <Heart className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent">Notre Histoire</span>
              </div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">Une Passion Devenue Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2016 par un groupe de passionnés, La Survivance Animale est née d&apos;un besoin urgent de
                  venir en aide aux chiens en détresse dans notre région.
                </p>
                <p>
                  Au fil des années, nous avons développé notre réseau, nos compétences et notre capacité
                  d&apos;accueil. De quelques sauvetages par an, nous sommes passés à plus de 100 chiens sauvés
                  annuellement.
                </p>
                <p>
                  Aujourd&apos;hui, nous sommes fiers de compter sur une équipe de 50 bénévoles actifs, une vingtaine de
                  familles d&apos;accueil et des centaines de supporters qui nous font confiance et nous soutiennent
                  dans notre mission.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">Nos Valeurs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Compassion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous traitons chaque chien avec amour et empathie, quelle que soit son histoire
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Protection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous veillons au bien-être et à la sécurité de tous nos protégés
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Transparence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous communiquons ouvertement sur nos actions et l&apos;utilisation des dons
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous suivons les meilleures pratiques en matière de sauvetage et d&apos;adoption
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <HandHeart className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Engagement</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous nous engageons totalement pour le bien-être de chaque animal
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Target className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Efficacité</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous optimisons nos ressources pour sauver un maximum de vies
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">Notre Équipe</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Sophie Laurent",
                role: "Présidente & Fondatrice",
                image: "/placeholder.svg?key=nfh6o",
              },
              {
                name: "Thomas Dubois",
                role: "Responsable Adoptions",
                image: "/placeholder.svg?key=7vksa",
              },
              {
                name: "Julie Martin",
                role: "Coordinatrice Bénévoles",
                image: "/placeholder.svg?key=4e5de",
              },
              {
                name: "Marc Petit",
                role: "Responsable Soins",
                image: "/placeholder.svg?key=jqq2b",
              },
            ].map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-square bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="mb-1 font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section>
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">Nos Réalisations</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-serif text-5xl font-bold text-primary">350+</div>
                  <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Chiens sauvés depuis 2016
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-serif text-5xl font-bold text-primary">280+</div>
                  <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Adoptions réussies
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-serif text-5xl font-bold text-primary">50+</div>
                  <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Bénévoles actifs
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-serif text-5xl font-bold text-primary">95%</div>
                  <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Taux de réussite adoptions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
