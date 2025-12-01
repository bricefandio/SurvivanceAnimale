import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, HandHeart, Users, Share2, Euro, Gift } from "lucide-react"

export default function SoutenirPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">Nous Soutenir</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Votre aide est précieuse pour continuer notre mission de sauvetage
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Ways to Help */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">Comment Nous Aider</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Euro className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Faire un don</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Chaque euro compte pour soigner et nourrir nos protégés
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90">Donner maintenant</Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Devenir bénévole</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Donnez de votre temps pour promener, soigner ou accompagner
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  S&apos;engager
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <HandHeart className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Parrainer un chien</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Soutenez un chien en attendant qu&apos;il trouve sa famille
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Parrainer
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Share2 className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">Partager notre mission</h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Aidez-nous à trouver des familles en partageant nos posts
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Partager
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Donation Impact */}
        <section className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">
                L&apos;Impact de Votre Don
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border-2 border-primary bg-card p-6 text-center">
                  <Gift className="mx-auto mb-3 h-12 w-12 text-primary" />
                  <div className="mb-2 font-serif text-3xl font-bold text-foreground">30€</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Couvre les frais de vaccination d&apos;un chiot
                  </p>
                </div>
                <div className="rounded-lg border-2 border-primary bg-card p-6 text-center">
                  <Gift className="mx-auto mb-3 h-12 w-12 text-primary" />
                  <div className="mb-2 font-serif text-3xl font-bold text-foreground">75€</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Finance la stérilisation d&apos;un chien
                  </p>
                </div>
                <div className="rounded-lg border-2 border-primary bg-card p-6 text-center">
                  <Gift className="mx-auto mb-3 h-12 w-12 text-primary" />
                  <div className="mb-2 font-serif text-3xl font-bold text-foreground">150€</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Prise en charge complète d&apos;un sauvetage d&apos;urgence
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Volunteer Testimonials */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">Témoignages de Bénévoles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    M
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Marie Dubois</h3>
                    <p className="text-sm text-muted-foreground">Bénévole depuis 2 ans</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;Être bénévole à La Survivance Animale est l&apos;expérience la plus enrichissante de ma vie.
                  Chaque chien sauvé est une victoire partagée avec toute l&apos;équipe.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    P
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Pierre Martin</h3>
                    <p className="text-sm text-muted-foreground">Bénévole depuis 1 an</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;J&apos;ai commencé par promener les chiens le week-end, et maintenant je ne peux plus m&apos;en
                  passer. Leur bonheur quand ils sortent est ma plus belle récompense.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="overflow-hidden border-2 border-primary bg-gradient-to-br from-primary via-primary to-accent">
            <CardContent className="p-12 text-center text-primary-foreground">
              <Heart className="mx-auto mb-6 h-16 w-16" />
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl text-balance">
                Ensemble, sauvons plus de vies
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90 leading-relaxed">
                Chaque geste compte. Rejoignez-nous dans notre mission pour offrir une seconde chance à tous les chiens
                en détresse.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="border-2 border-primary-foreground bg-card text-foreground hover:bg-card/90"
                >
                  Faire un don
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}
