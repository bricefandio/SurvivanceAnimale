"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, ClipboardList, FileText, Heart, Home, UserCheck } from "lucide-react"
import { dogsData } from "@/lib/dogs-data"

function AdoptionForm() {
  const searchParams = useSearchParams()
  const dogId = searchParams.get("dog")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    housingType: "",
    hasGarden: false,
    hasChildren: false,
    childrenAges: "",
    hasOtherPets: false,
    otherPetsDetails: "",
    dogExperience: "",
    selectedDog: dogId || "",
    motivation: "",
    agreedToTerms: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary">
            <CardContent className="p-8 text-center">
              <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h1 className="mb-4 font-serif text-3xl font-bold text-foreground">Demande envoyée avec succès !</h1>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                Merci pour votre demande d&apos;adoption. Notre équipe va l&apos;examiner et vous contactera dans les 48
                heures.
              </p>
              <Button asChild>
                <a href="/chiens">Retour aux chiens</a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-3 font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Adopter un Chien
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vous êtes prêt à offrir un foyer aimant ? Découvrez notre processus d&apos;adoption
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Adoption Process */}
        <section className="mb-12">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">Processus d&apos;Adoption</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ClipboardList className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">1. Formulaire</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Remplissez le formulaire de demande d&apos;adoption
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">2. Examen</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Nous examinons votre demande sous 48h</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">3. Visite</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Visite à domicile et rencontre avec le chien
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">4. Adoption</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Finalisation et accueil de votre nouveau compagnon
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">Conditions d&apos;Adoption</h2>
              <ul className="space-y-3">
                {[
                  "Être majeur et avoir une pièce d'identité valide",
                  "Disposer d'un logement stable et adapté",
                  "Avoir l'accord de tous les membres du foyer",
                  "Accepter une visite pré-adoption à domicile",
                  "S'engager à prendre soin du chien à vie",
                  "Participer aux frais d'adoption (vaccination, stérilisation, identification)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <UserCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Adoption Form */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Formulaire de Demande d&apos;Adoption
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Informations personnelles</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Adresse *</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="city">Ville *</Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Code postal *</Label>
                      <Input
                        id="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={(e) => handleChange("postalCode", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Living Situation */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Situation de logement</h3>
                  <div>
                    <Label htmlFor="housingType">Type de logement *</Label>
                    <Select
                      value={formData.housingType}
                      onValueChange={(value) => handleChange("housingType", value)}
                      required
                    >
                      <SelectTrigger id="housingType">
                        <SelectValue placeholder="Sélectionnez..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maison">Maison</SelectItem>
                        <SelectItem value="appartement">Appartement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasGarden"
                      checked={formData.hasGarden}
                      onCheckedChange={(checked) => handleChange("hasGarden", checked as boolean)}
                    />
                    <label
                      htmlFor="hasGarden"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Je dispose d&apos;un jardin
                    </label>
                  </div>
                </div>

                {/* Family Composition */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Composition du foyer</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasChildren"
                      checked={formData.hasChildren}
                      onCheckedChange={(checked) => handleChange("hasChildren", checked as boolean)}
                    />
                    <label
                      htmlFor="hasChildren"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      J&apos;ai des enfants
                    </label>
                  </div>
                  {formData.hasChildren && (
                    <div>
                      <Label htmlFor="childrenAges">Âges des enfants</Label>
                      <Input
                        id="childrenAges"
                        placeholder="Ex: 5, 8, 12 ans"
                        value={formData.childrenAges}
                        onChange={(e) => handleChange("childrenAges", e.target.value)}
                      />
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasOtherPets"
                      checked={formData.hasOtherPets}
                      onCheckedChange={(checked) => handleChange("hasOtherPets", checked as boolean)}
                    />
                    <label
                      htmlFor="hasOtherPets"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      J&apos;ai d&apos;autres animaux
                    </label>
                  </div>
                  {formData.hasOtherPets && (
                    <div>
                      <Label htmlFor="otherPetsDetails">Précisez (type, nombre, etc.)</Label>
                      <Input
                        id="otherPetsDetails"
                        placeholder="Ex: 1 chat, 1 chien"
                        value={formData.otherPetsDetails}
                        onChange={(e) => handleChange("otherPetsDetails", e.target.value)}
                      />
                    </div>
                  )}
                </div>

                {/* Experience */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Expérience avec les chiens</h3>
                  <div>
                    <Label htmlFor="dogExperience">Avez-vous déjà eu des chiens ? Décrivez votre expérience *</Label>
                    <Textarea
                      id="dogExperience"
                      required
                      rows={4}
                      value={formData.dogExperience}
                      onChange={(e) => handleChange("dogExperience", e.target.value)}
                    />
                  </div>
                </div>

                {/* Dog Selection */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Chien souhaité</h3>
                  <div>
                    <Label htmlFor="selectedDog">Quel chien vous intéresse ?</Label>
                    <Select value={formData.selectedDog} onValueChange={(value) => handleChange("selectedDog", value)}>
                      <SelectTrigger id="selectedDog">
                        <SelectValue placeholder="Sélectionnez un chien..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aucun">Aucun chien en particulier</SelectItem>
                        {dogsData
                          .filter((dog) => dog.status === "Disponible" || dog.status === "Urgent")
                          .map((dog) => (
                            <SelectItem key={dog.id} value={dog.id}>
                              {dog.name} - {dog.breed}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Motivation */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Motivation</h3>
                  <div>
                    <Label htmlFor="motivation">Pourquoi souhaitez-vous adopter un chien ? *</Label>
                    <Textarea
                      id="motivation"
                      required
                      rows={6}
                      placeholder="Parlez-nous de vos motivations, de ce que vous recherchez chez un compagnon..."
                      value={formData.motivation}
                      onChange={(e) => handleChange("motivation", e.target.value)}
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreedToTerms"
                    required
                    checked={formData.agreedToTerms}
                    onCheckedChange={(checked) => handleChange("agreedToTerms", checked as boolean)}
                  />
                  <label
                    htmlFor="agreedToTerms"
                    className="text-sm leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    J&apos;accepte les conditions d&apos;adoption et je m&apos;engage à fournir au chien un foyer aimant
                    et stable pour toute sa vie. *
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Envoyer ma demande d&apos;adoption
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default function AdopterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdoptionForm />
    </Suspense>
  )
}
