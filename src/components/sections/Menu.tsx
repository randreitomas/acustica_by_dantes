import { AnimatePresence, motion } from "framer-motion"
import {
  Beer,
  Coffee,
  CupSoda,
  Drumstick,
  Martini,
  UtensilsCrossed,
  Wheat,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

import { SectionHeading } from "@/components/SectionHeading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type MenuItem = { name: string; price: string; detail?: string }

type MenuSection = {
  title: string
  icon: LucideIcon
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: "Bar Chow",
    icon: UtensilsCrossed,
    items: [
      { name: "Monster Fries", price: "₱199" },
      { name: "Mojos", price: "₱199" },
      { name: "Nachos Supremo", price: "₱299" },
      { name: "Fried Chicken Poppers", price: "₱299" },
      { name: "Chicken Wings", price: "₱299" },
      { name: "Hot Chick Fries", price: "₱250" },
      { name: "Hot Chicken Skin", price: "₱199" },
      { name: "Steak Bites w/ Potatoes", price: "₱250" },
      { name: "Tofu in Sisig Sauce", price: "₱199" },
      { name: "Fried Calamari", price: "₱199" },
    ],
  },
  {
    title: "Rice Meals",
    icon: Drumstick,
    items: [
      { name: "Chicken Fillet", price: "₱169" },
      { name: "Chicken Parmigiana", price: "₱199" },
      { name: "Signature Tapa", price: "₱199" },
      { name: "Corned Beef", price: "₱179" },
      { name: "Boneless Fried Chicken", price: "₱225" },
      { name: "Boneless Bangus", price: "₱199" },
      { name: "Beef Salpicao", price: "₱199" },
    ],
  },
  {
    title: "Pasta",
    icon: Wheat,
    items: [
      { name: "Baked Zitti", price: "₱249" },
      { name: "Carbonara", price: "₱249" },
      { name: "Three Cheese Lasagna", price: "₱249" },
      { name: "Chicken Alfredo", price: "₱279" },
    ],
  },
  {
    title: "Coffee",
    icon: Coffee,
    items: [
      { name: "Americano", price: "₱110" },
      { name: "Cafe Latte", price: "₱130" },
      { name: "Mocha", price: "₱150" },
      { name: "White Mocha", price: "₱160" },
      { name: "Cappuccino", price: "₱130" },
      { name: "Oat Latte", price: "₱160" },
      { name: "Caramel Macchiato", price: "₱150" },
      { name: "Spanish Latte", price: "₱150" },
      { name: "Dirty Matcha", price: "₱160" },
    ],
  },
  {
    title: "Non-Coffee",
    icon: CupSoda,
    items: [
      { name: "Artisan Chocolate", price: "₱165" },
      { name: "Biscoff Crunch", price: "₱165" },
      { name: "Matcha Latte", price: "₱165" },
      { name: "White Matcha", price: "₱165" },
      { name: "Strawberry Milk", price: "₱155" },
      { name: "Strawberry Soda", price: "₱155" },
      { name: "Mango Iced Tea", price: "₱155" },
      { name: "Iced Shaken Black Tea", price: "₱165" },
      { name: "Iced Shaken Hibiscus Tea", price: "₱165" },
    ],
  },
  {
    title: "Cocktails",
    icon: Martini,
    items: [
      { name: "Calamansi Margarita", price: "₱220" },
      { name: "Dalandan Mojito", price: "₱220" },
      { name: "Harana Sour", price: "₱220" },
      { name: "Sinag", price: "₱199" },
      { name: "Isla Matcha", price: "₱199" },
      { name: "Ube Crema", price: "₱199" },
      { name: "Mangga at Hapon", price: "₱199" },
      { name: "Mangga at Hapon Pitcher", price: "₱370" },
      { name: "Nata't Sining", price: "₱199" },
      { name: "Nata't Sining Pitcher", price: "₱390" },
      { name: "Red Sangria", price: "₱220" },
      { name: "Red Sangria Pitcher", price: "₱420" },
      { name: "Rhum Coke", price: "₱199" },
      { name: "Rhum Coke Pitcher", price: "₱370" },
      { name: "Vodka Sprite", price: "₱199" },
      { name: "Vodka Sprite Pitcher", price: "₱370" },
    ],
  },
  {
    title: "Light Beers",
    icon: Beer,
    items: [
      { name: "San Mig Pale", price: "₱99" },
      { name: "San Mig Pale Bucket", price: "₱520" },
      { name: "San Mig Light", price: "₱99" },
      { name: "San Mig Light Bucket", price: "₱520" },
      { name: "San Mig Apple", price: "₱99" },
      { name: "San Mig Apple Bucket", price: "₱520" },
      { name: "Caramel Beer", price: "₱105" },
      { name: "Caramel Beer Bucket", price: "₱580" },
      { name: "Smirnoff Mule", price: "₱105" },
      { name: "Smirnoff Mule Bucket", price: "₱580" },
    ],
  },
]

export function Menu() {
  const [activeTitle, setActiveTitle] = useState(menuSections[0].title)
  const activeSection =
    menuSections.find((section) => section.title === activeTitle) ??
    menuSections[0]
  const ActiveIcon = activeSection.icon

  return (
    <section id="menu" className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="On Offer" title="The Menu" />

        <nav
          className="mb-6 flex flex-wrap justify-center gap-2"
          aria-label="Menu categories"
        >
          {menuSections.map((section) => {
            const isActive = section.title === activeTitle
            return (
              <button
                key={section.title}
                type="button"
                onClick={() => setActiveTitle(section.title)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-md border px-3 py-2 font-body text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                  isActive
                    ? "border-terracotta bg-terracotta text-cream"
                    : "border-espresso/15 bg-cream text-espresso-soft hover:border-terracotta/40 hover:text-espresso"
                )}
              >
                {section.title}
              </button>
            )
          })}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <Card className="grain-overlay">
              <CardHeader className="relative z-[2]">
                <CardTitle className="flex items-center gap-2 font-heading text-2xl font-semibold tracking-tight text-terracotta sm:text-[1.75rem]">
                  <ActiveIcon className="size-5 shrink-0" aria-hidden />
                  {activeSection.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-[2]">
                <ul>
                  {activeSection.items.map((item, index) => (
                    <li key={`${activeSection.title}-${item.name}`}>
                      {index > 0 ? <hr className="dotted-rule my-2.5" /> : null}
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="min-w-0">
                          <p className="font-body text-base font-normal leading-snug text-espresso sm:text-lg">
                            {item.name}
                          </p>
                          {item.detail ? (
                            <p className="mt-0.5 font-caption text-sm font-normal text-espresso-soft/80">
                              {item.detail}
                            </p>
                          ) : null}
                        </div>
                        <p className="shrink-0 font-body text-base font-medium text-maroon sm:text-lg">
                          {item.price}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
