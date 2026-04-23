import React, { useState, useEffect } from "react";
import { Coffee, MapPin, Clock, Phone, Menu as MenuIcon, X, Map, ChefHat, Instagram, ArrowRight } from "lucide-react";

// Images (will use generated images)
import heroBg from "@assets/Delmela_Cover_1776854833713.jpeg";
import latteArt from "@/assets/latte-art.webp";
import waffleDish from "@/assets/waffle-dish.webp";
import riceBowl from "@/assets/rice-bowl.webp";
import storefront from "@/assets/storefront.webp";
import breakfastCover from "@assets/Breakfasts_cover_1776855428091_optimized.webp";
import saladsCover from "@assets/Salads_Cover_1776855273574_optimized.webp";
import riceBowlsCover from "@assets/Ricce_Bowls_Cover_1776855273574_optimized.webp";
import sandwichesCover from "@assets/Sandwiches_cover_1776855273575_optimized.webp";
import dessertsCover from "@assets/Deserts_Cover_1776855273572_optimized.webp";
import drinksCover from "@assets/Drinks_Cover_1776855273573_optimized.webp";

const CATEGORY_COVERS: Record<string, string> = {
  "Breakfast": breakfastCover,
  "Salads": saladsCover,
  "Rice Bowls": riceBowlsCover,
  "Sandwiches & Wraps": sandwichesCover,
  "Desserts": dessertsCover,
  "Drinks & Extras": drinksCover,
};

const MENUS = {
  "Breakfast": [
    { name: "Egg & Waffle", desc: "Classic breakfast combination" },
    { name: "Banana Foster Waffle", desc: "Sweet bananas with caramel sauce" },
    { name: "Fresh n' Fruity Pancake", desc: "Topped with seasonal fresh fruits" },
    { name: "Shakshuka", desc: "Poached eggs in a hearty, spiced tomato sauce" },
    { name: "Special Foul Bowl", desc: "Traditional fava bean dish with spices" },
    { name: "Scrambled Egg", desc: "With Ethiopian butter & vegetables" },
    { name: "Eggs & Avocado Toast", desc: "Healthy start on toasted bread" },
    { name: "Egg Sandwich", desc: "Simple and satisfying" },
    { name: "Kinche", desc: "Traditional cracked wheat" },
    { name: "Special Chechebsa", desc: "Spiced flatbread bits in Ethiopian butter" },
    { name: "Garden Omelette", desc: "Loaded with fresh vegetables" },
    { name: "Chicken & Egg Sandwich", desc: "Protein packed sandwich" },
    { name: "Breakfast Combos", desc: "Waffles, oatmeal, croissant options" },
    { name: "Honey Peanut Butter Banana Toast", desc: "Sweet energy booster" },
    { name: "Chicken & Waffle", desc: "Savory and sweet perfection" },
  ],
  "Salads": [
    { name: "House Salad", desc: "Chickpeas, egg, vegetables mix" },
    { name: "Tuna House Salad", desc: "Our house salad topped with tuna" },
    { name: "Chicken House Salad", desc: "Our house salad topped with chicken" },
    { name: "Beef House Salad", desc: "Our house salad topped with beef" },
  ],
  "Rice Bowls": [
    { name: "Tika Tika Bowl", desc: "Chicken curry rice bowl" },
    { name: "Cado Bowl", desc: "Avocado, chickpeas, beets, vegetables" },
    { name: "Vegetarian Curry Bowl", desc: "Rich and flavorful vegetable curry" },
    { name: "Chicken Teriyaki Rice Bowl", desc: "Sweet and savory classic" },
    { name: "Keto Bowl", desc: "Eggs, avocado, and protein options" },
    { name: "Burrito Bowl", desc: "Rice/kinche, beans, vegetables" },
  ],
  "Sandwiches & Wraps": [
    { name: "Signature Delmela Sandwich", desc: "Our house special" },
    { name: "Chicken Sandwich / Wrap", desc: "Freshly prepared chicken" },
    { name: "Beef Sandwich / Wrap", desc: "Tender beef slices" },
    { name: "Tuna Sandwich / Wrap", desc: "Classic tuna salad" },
    { name: "Veggie Sandwich / Wrap", desc: "Packed with fresh vegetables" },
    { name: "Chicken Wrap", desc: "Tzatziki, potatoes, vegetables" },
  ],
  "Desserts": [
    { name: "Chocolate Waffle", desc: "Rich chocolate goodness" },
    { name: "Classic Waffle", desc: "Simple perfection" },
    { name: "Country Apple Pie Waffle", desc: "Comforting apple pie flavors" },
    { name: "Frutopia Waffle", desc: "Loaded with fruits" },
    { name: "Cinnamon Rolls", desc: "Freshly baked" },
    { name: "Croissant", desc: "Including chocolate croissant" },
    { name: "Pastries", desc: "Danish-style items" },
    { name: "Frappuccino", desc: "Blended sweet coffee treat" },
  ],
  "Drinks & Extras": [
    { name: "Coffee drinks", desc: "Latte, iced coffee, macchiato" },
    { name: "Fresh juices & smoothies", desc: "Seasonal selection" },
    { name: "Soft drinks & Milkshakes", desc: "Refreshing cold beverages" },
    { name: "Extra sides", desc: "Rice, hummus, beef, tuna, potato wedges" },
  ]
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState("Breakfast");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <Coffee className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`} />
            <span className={`font-serif font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
              Delmela
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('about')} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>About</button>
            <button onClick={() => scrollTo('menu')} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>Menu</button>
            <button onClick={() => scrollTo('locations')} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>Locations</button>
            <button onClick={() => scrollTo('contact')} className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>Contact</button>
            <a href="tel:+251980635959" className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md">
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-primary'}`} />
            ) : (
              <MenuIcon className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-primary'}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
            <button onClick={() => scrollTo('about')} className="text-left font-medium text-lg py-2 text-foreground">About</button>
            <button onClick={() => scrollTo('menu')} className="text-left font-medium text-lg py-2 text-foreground">Menu</button>
            <button onClick={() => scrollTo('locations')} className="text-left font-medium text-lg py-2 text-foreground">Locations</button>
            <button onClick={() => scrollTo('contact')} className="text-left font-medium text-lg py-2 text-foreground">Contact</button>
            <div className="flex flex-col gap-2 pt-2">
              <a href="tel:+251980635959" className="bg-accent text-white text-center py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Summit · +251 98 063 5959
              </a>
              <a href="tel:+251996153422" className="bg-primary text-white text-center py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Sarbet · +251 99 615 3422
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90svh] flex items-center pt-20 pb-12">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Delmela Cafe Interior" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:to-black/30"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium tracking-wide">Open daily · Closes at 10:00 pm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-white drop-shadow-sm">
              Delmela Café & <br/>Restaurant
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-lg leading-relaxed">
              A warm café experience in Addis Ababa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+251980635959" className="bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-0.5">
                <Phone className="w-5 h-5" /> Summit · +251 98 063 5959
              </a>
              <a href="tel:+251996153422" className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-0.5">
                <Phone className="w-5 h-5" /> Sarbet · +251 99 615 3422
              </a>
              <button onClick={() => scrollTo('menu')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                View Menu <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src={latteArt} alt="Beautiful Latte Art" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border-4 border-background overflow-hidden hidden md:block shadow-xl">
                <img src={waffleDish} alt="Waffle Dish" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
            <div>
              <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">Warmth in every cup.</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Delmela Café and Restaurant is a cozy modern café in Addis Ababa serving breakfast, rice bowls, sandwiches, desserts, and specialty coffee in a warm, welcoming atmosphere.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-5 rounded-2xl border border-card-border">
                  <Coffee className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-bold text-primary mb-1">Specialty Coffee</h4>
                  <p className="text-sm text-foreground/70">Expertly crafted drinks</p>
                </div>
                <div className="bg-card p-5 rounded-2xl border border-card-border">
                  <ChefHat className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-bold text-primary mb-1">Fresh Food</h4>
                  <p className="text-sm text-foreground/70">Bowls, sandwiches & more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32 bg-[#F2EAE1]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Our Menu</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">Made with love</h3>
          </div>

          <div className="grid lg:grid-cols-[250px_1fr] gap-8 md:gap-12">
            {/* Category Sidebar */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 scrollbar-hide">
              {Object.keys(MENUS).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveMenuCategory(category)}
                  className={`whitespace-nowrap text-left px-5 py-4 rounded-xl transition-all font-medium text-sm md:text-base ${
                    activeMenuCategory === category 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-card text-foreground/70 hover:bg-card-border hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="bg-card rounded-3xl border border-card-border shadow-sm min-h-[400px] overflow-hidden">
              <div className="relative aspect-[16/7] md:aspect-[21/8] w-full overflow-hidden bg-muted">
                <img
                  key={activeMenuCategory}
                  src={CATEGORY_COVERS[activeMenuCategory]}
                  alt={`${activeMenuCategory} cover`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Warm cream wash to keep the light/warm palette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-background/10"></div>
                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-xs mb-1">Category</span>
                  <h4 className="text-3xl md:text-4xl font-serif font-bold text-primary drop-shadow-sm">{activeMenuCategory}</h4>
                </div>
              </div>
              <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {MENUS[activeMenuCategory as keyof typeof MENUS].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="font-bold text-primary text-lg group-hover:text-accent transition-colors">{item.name}</h5>
                      <div className="flex-1 mx-4 border-b border-dotted border-border/50"></div>
                    </div>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Visit Us</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Two locations in Addis</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Summit */}
            <div className="bg-card rounded-3xl overflow-hidden border border-card-border shadow-sm group hover:shadow-md transition-shadow">
              <a
                href="https://maps.app.goo.gl/zpKiSkseM8T4EhGY7"
                target="_blank"
                rel="noreferrer"
                className="aspect-[16/9] w-full relative bg-muted block group/map"
                aria-label="Open Summit location in Google Maps"
              >
                <img
                  src={storefront}
                  alt="Map preview of Summit location"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover/map:bg-primary/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/95 backdrop-blur-sm text-primary px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-md">
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </div>
                </div>
              </a>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-3">Summit Location</h4>
                <p className="text-foreground/80 mb-4 flex items-start gap-3">
                  <Map className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  Around Summit Feyele Bet next to Chanoly, Addis Ababa
                </p>
                <a href="tel:+251980635959" className="text-foreground/90 mb-6 flex items-center gap-3 font-medium hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  +251 98 063 5959
                </a>
                <a href="https://maps.app.goo.gl/zpKiSkseM8T4EhGY7" target="_blank" rel="noreferrer" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Sarbet */}
            <div className="bg-card rounded-3xl overflow-hidden border border-card-border shadow-sm group hover:shadow-md transition-shadow">
              <a
                href="https://maps.app.goo.gl/wMXEpFgJNcxYAXUQ8"
                target="_blank"
                rel="noreferrer"
                className="aspect-[16/9] w-full relative bg-muted block group/map"
                aria-label="Open Sarbet location in Google Maps"
              >
                <img
                  src={latteArt}
                  alt="Map preview of Sarbet location"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover/map:bg-primary/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/95 backdrop-blur-sm text-primary px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-md">
                    <MapPin className="w-4 h-4" />
                    Open in Google Maps
                  </div>
                </div>
              </a>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-3">Sarbet Location</h4>
                <p className="text-foreground/80 mb-4 flex items-start gap-3">
                  <Map className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  Across from Tutto Gelato, The Nest Residence, Addis Ababa
                </p>
                <a href="tel:+251996153422" className="text-foreground/90 mb-6 flex items-center gap-3 font-medium hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  +251 99 615 3422
                </a>
                <a href="https://maps.app.goo.gl/wMXEpFgJNcxYAXUQ8" target="_blank" rel="noreferrer" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="h-[40vh] md:h-[60vh] w-full relative">
        <img src={riceBowl} alt="Delmela Fresh Food" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-primary/20"></div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-primary pt-20 pb-10 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <Coffee className="w-8 h-8 text-secondary" />
                <span className="font-serif font-bold text-3xl tracking-tight">Delmela</span>
              </div>
              <p className="text-primary-foreground/80 mb-8 max-w-sm">
                A warm café experience in Addis Ababa. Serving breakfast, bowls, specialty coffee and more.
              </p>
              <div className="flex gap-4">
                <a href="tel:+251980635959" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/_delmela/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="font-serif font-bold text-xl mb-6 text-secondary">Contact Us</h4>
              <ul className="space-y-4 text-primary-foreground/80">
                <li>
                  <a href="tel:+251980635959" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span><strong className="block text-white text-sm font-medium">Summit</strong>+251 98 063 5959</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+251996153422" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span><strong className="block text-white text-sm font-medium">Sarbet</strong>+251 99 615 3422</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    Open daily · Closes 10:00 pm
                  </div>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-serif font-bold text-xl mb-6 text-secondary">Locations</h4>
              <ul className="space-y-6 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span>
                    <strong className="block text-white font-medium mb-1">Summit</strong>
                    Around Summit Feyele Bet next to Chanoly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span>
                    <strong className="block text-white font-medium mb-1">Sarbet</strong>
                    Across from Tutto Gelato, The Nest Residence
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Delmela Café and Restaurant. All rights reserved.</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
