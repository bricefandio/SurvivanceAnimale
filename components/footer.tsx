import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center">
              <div className="relative h-10 w-28">
                <Image
                  src="/images/logo.jpeg"
                  alt="Logo La Survivance Animale"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Association de sauvetage et protection animale dédiée au bien-être des chiens en détresse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chiens" className="text-sm text-muted-foreground hover:text-primary">
                  Nos chiens
                </Link>
              </li>
              <li>
                <Link href="/adopter" className="text-sm text-muted-foreground hover:text-primary">
                  Adopter
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm text-muted-foreground hover:text-primary">
                  L&apos;association
                </Link>
              </li>
              <li>
                <Link href="/soutenir" className="text-sm text-muted-foreground hover:text-primary">
                  Nous soutenir
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@lasurvivance.fr" className="hover:text-primary">
                  contact@lasurvivance.fr
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+33123456789" className="hover:text-primary">
                  06 49 66 55 42
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} La Survivance Animale. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
