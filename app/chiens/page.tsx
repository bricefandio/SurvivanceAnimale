"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DogCard } from "@/components/dog-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { dogsData } from "@/lib/dogs-data"

export default function ChiensPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    status: [] as string[],
    gender: [] as string[],
    minAge: "",
    maxAge: "",
  })

  const toggleFilter = (category: "status" | "gender", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }))
  }

  const clearFilters = () => {
    setFilters({
      status: [],
      gender: [],
      minAge: "",
      maxAge: "",
    })
    setSearchQuery("")
  }

  const filteredDogs = dogsData.filter((dog) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      dog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dog.breed.toLowerCase().includes(searchQuery.toLowerCase())

    // Status filter
    const matchesStatus = filters.status.length === 0 || filters.status.includes(dog.status)

    // Gender filter
    const matchesGender = filters.gender.length === 0 || filters.gender.includes(dog.gender)

    return matchesSearch && matchesStatus && matchesGender
  })

  const hasActiveFilters =
    filters.status.length > 0 ||
    filters.gender.length > 0 ||
    filters.minAge !== "" ||
    filters.maxAge !== "" ||
    searchQuery !== ""

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-3 font-serif text-4xl font-bold text-foreground sm:text-5xl text-balance">
            Nos Chiens à l&apos;Adoption
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Découvrez tous nos protégés qui attendent une famille aimante
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-foreground">Filtres</h2>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                    Effacer tout
                  </Button>
                )}
              </div>

              {/* Status Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Statut</Label>
                <div className="space-y-2">
                  {["Disponible", "Urgent", "Réservé"].map((status) => (
                    <div key={status} className="flex items-center space-x-2">
                      <Checkbox
                        id={`status-${status}`}
                        checked={filters.status.includes(status)}
                        onCheckedChange={() => toggleFilter("status", status)}
                      />
                      <label
                        htmlFor={`status-${status}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {status}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Genre</Label>
                <div className="space-y-2">
                  {["Mâle", "Femelle"].map((gender) => (
                    <div key={gender} className="flex items-center space-x-2">
                      <Checkbox
                        id={`gender-${gender}`}
                        checked={filters.gender.includes(gender)}
                        onCheckedChange={() => toggleFilter("gender", gender)}
                      />
                      <label
                        htmlFor={`gender-${gender}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {gender}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Mobile Filters */}
            <div className="mb-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher par nom ou race..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Mobile Filter Button */}
              <div className="flex items-center justify-between lg:hidden">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filtres
                  {hasActiveFilters && (
                    <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">•</span>
                  )}
                </Button>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Effacer
                  </Button>
                )}
              </div>

              {/* Mobile Filters Panel */}
              {showFilters && (
                <div className="space-y-4 rounded-lg border border-border bg-card p-4 lg:hidden">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Filtres</h3>
                    <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Status Filter Mobile */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Statut</Label>
                    <div className="space-y-2">
                      {["Disponible", "Urgent", "Réservé"].map((status) => (
                        <div key={status} className="flex items-center space-x-2">
                          <Checkbox
                            id={`mobile-status-${status}`}
                            checked={filters.status.includes(status)}
                            onCheckedChange={() => toggleFilter("status", status)}
                          />
                          <label htmlFor={`mobile-status-${status}`} className="text-sm leading-none">
                            {status}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gender Filter Mobile */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Genre</Label>
                    <div className="space-y-2">
                      {["Mâle", "Femelle"].map((gender) => (
                        <div key={gender} className="flex items-center space-x-2">
                          <Checkbox
                            id={`mobile-gender-${gender}`}
                            checked={filters.gender.includes(gender)}
                            onCheckedChange={() => toggleFilter("gender", gender)}
                          />
                          <label htmlFor={`mobile-gender-${gender}`} className="text-sm leading-none">
                            {gender}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="mb-4 text-sm text-muted-foreground">
              {filteredDogs.length} chien{filteredDogs.length !== 1 ? "s" : ""} trouvé
              {filteredDogs.length !== 1 ? "s" : ""}
            </div>

            {/* Dogs Grid */}
            {filteredDogs.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredDogs.map((dog) => (
                  <DogCard key={dog.id} {...dog} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-border p-12 text-center">
                <p className="text-lg text-muted-foreground">Aucun chien ne correspond à vos critères</p>
                <Button variant="outline" className="mt-4 bg-transparent" onClick={clearFilters}>
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
