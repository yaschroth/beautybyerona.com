// Beauty by Erona Heilbronn Configuration
// Wimpern, Microblading & Permanent Make-up Studio

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Beauty by Erona",
    tagline: "MASTER OF EYEBROWS",
    motto: "Microblading · Permanent Make-up · Schulungen · Wimpernverlängerung",
    description: "Dein Kosmetikstudio in Heilbronn. Microblading, Permanent Make-up, Wimpernverlängerung mit UV System, Brow & Lash Lifting - und professionelle Schulungen.",
    foundingYear: 2019,
    yearsExperience: 6,
    yearsInCenter: 5,
    satisfiedClients: "800+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "0157 36742327",
    phoneLink: "tel:+4915736742327",
    email: "info@beautybyerona.com",
    whatsapp: "+49 157 36742327",
    whatsappLink: "https://wa.me/4915736742327",
    address: {
      street: "Hauffstraße 48",
      city: "Heilbronn",
      district: "Heilbronn",
      zip: "74074",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sHauffstrasse%2048%2C%2074074%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Hauffstrasse+48,+74074+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/beautybyerona/",
    facebook: "https://www.facebook.com/p/Beauty-by-Erona-100063568809376/",
    tiktok: "https://www.tiktok.com/@lashesby_e.b",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 09:00-18:00",
    saturday: "Sa nach Vereinbarung",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung",
    display: "Mo-Fr 09:00-18:00",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "https://wa.me/4915736742327",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 4.9,
    count: "186",
    googleReviewLink: "https://www.google.com/maps/place/Beauty+by+Erona",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Erona",
    fullName: "Erona & Merita",
    image: "/beauty/face.jpg",
    bio: [
      "Willkommen bei Beauty by Erona - MASTER OF EYEBROWS! Wir sind spezialisiert auf Microblading, Permanent Make-up, Wimpernverlängerung mit UV System und Brow & Lash Lifting.",
      "Unser Studio ist sauber, hell und wunderschön dekoriert. Wir arbeiten mit höchsten Hygiene- und Qualitätsstandards - deshalb kommen Kundinnen sogar über 150 km zu uns.",
      "Neben Behandlungen bieten wir auch professionelle Schulungen an. Folge uns auf Instagram @beautybyerona und TikTok @lashesby_e.b für unsere neuesten Arbeiten!",
    ],
    certifications: [
      { label: "Master of Eyebrows", icon: "award" },
      { label: "Microblading Expertin", icon: "star" },
      { label: "Professionelle Schulungen", icon: "check" },
      { label: "4.9 ★ bei 186 Bewertungen", icon: "shield" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Google Rezension",
      rating: 5,
      text: "Ein unfassbar schönes Endergebnis! Die Arbeit an meinen Augenbrauen war präzise, perfekt und sauber. Das Team ist sehr freundlich und entgegenkommend.",
      service: "Microblading",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Das Studio ist sehr sauber, hell, wunderschön dekoriert und riecht frisch. Es gibt auch Parkplätze. Die Schulungen sind strukturiert und informativ - absolute Empfehlung!",
      service: "Schulung",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Ich fahre über 150 km hierher und es lohnt sich jedes Mal! Die Qualität der Behandlungen ist hervorragend und das Team ist super professionell.",
      service: "Wimpernverlängerung",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Exzellenter Kundenservice und eine unterstützende Atmosphäre. Die Ergebnisse meiner Beauty-Behandlung sind von höchster Qualität. Komme immer wieder!",
      service: "Permanent Make-up",
      date: "Google Bewertung",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Microblading",
      description: "MASTER OF EYEBROWS - Perfekte Augenbrauen mit der Härchentechnik. Präzise, perfekte und saubere Arbeit für ein unfassbar schönes Endergebnis.",
      price: "auf Anfrage",
      image: "/beauty/eyebrow-after.png",
      benefits: ["1-2 Jahre Halt", "Natürlich"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Wimpernverlängerung mit UV System - traumhaft volle Wimpern für einen verführerischen Blick. Classic, Volume oder Mega Volume.",
      price: "auf Anfrage",
      image: "/beauty/wimpern.png",
      benefits: ["UV System", "Langanhaltend"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Lippen, Augenbrauen oder Lidstrich - jeden Tag. Hochwertige Pigmentierung für langanhaltende Schönheit.",
      price: "auf Anfrage",
      image: "/beauty/face.jpg",
      benefits: ["Langanhaltend", "Wasserfest"],
    },
    {
      title: "Brow Lifting",
      description: "Perfekt geformte, volle Augenbrauen ohne tägliches Styling. Lamination und Färbung in einem.",
      price: "auf Anfrage",
      image: "/beauty/face2.jpg",
      benefits: ["6-8 Wochen", "Pflegeleicht"],
    },
    {
      title: "Lash Lifting",
      description: "Deine natürlichen Wimpern - nur besser! Dauerwelle und Färbung für einen wachen, offenen Blick.",
      price: "auf Anfrage",
      image: "/beauty/wimpern (2).webp",
      benefits: ["6-8 Wochen", "Natürlich"],
    },
    {
      title: "Schulungen",
      description: "Professionelle Beauty-Schulungen in Microblading, Wimpernverlängerung und mehr. Strukturiert, informativ und praxisnah.",
      price: "auf Anfrage",
      image: "/beauty/Generated Image January 05, 2026 - 2_18PM (2).png",
      benefits: ["Zertifikat", "Praxisnah"],
    },
  ],

  // ============================================
  // SCHULUNGEN (Training Section)
  // ============================================
  schulungen: {
    headline: "Professionelle Beauty-Schulungen",
    description: "Unsere Schulungen sind strukturiert und informativ - das bestätigen unsere Teilnehmerinnen! Lerne von den Master of Eyebrows und starte dein eigenes Beauty-Business.",
    subtext: "Ob Anfängerin oder Fortgeschrittene – wir begleiten dich auf deinem Weg in die Selbstständigkeit. Praxisnah, individuell und mit Zertifikat.",
    courses: [
      {
        title: "Wimpernverlängerung",
        description: "Lerne die Kunst der perfekten Wimpernverlängerung. Von Classic bis Mega Volume - alle Techniken inklusive.",
        duration: "2-3 Tage",
        includes: ["Starter-Kit", "Zertifikat", "Modelle"],
        image: "/beauty/wimpern.png",
      },
      {
        title: "Microblading",
        description: "Meistere die Härchentechnik für natürlich aussehende Augenbrauen. Theorie und Praxis an echten Modellen.",
        duration: "2 Tage",
        includes: ["Material", "Zertifikat", "Nachbetreuung"],
        image: "/beauty/eyebrow-after.png",
      },
      {
        title: "Permanent Make-up",
        description: "Professionelle Pigmentierung für Lippen, Augenbrauen und Lidstrich. Umfassende Ausbildung mit Praxis.",
        duration: "3-5 Tage",
        includes: ["Equipment", "Zertifikat", "Support"],
        image: "/beauty/face.jpg",
      },
      {
        title: "Lash & Brow Lifting",
        description: "Der perfekte Einstieg in die Beauty-Branche. Schnell erlernbar mit sofort sichtbaren Ergebnissen.",
        duration: "1 Tag",
        includes: ["Starter-Set", "Zertifikat", "Übungsmaterial"],
        image: "/beauty/face2.jpg",
      },
    ],
    cta: {
      text: "Jetzt Schulung anfragen",
      link: "https://wa.me/4915736742327?text=Hi,%20ich%20interessiere%20mich%20für%20eine%20Schulung.%20Kannst%20du%20mir%20mehr%20Infos%20geben?",
    },
  },

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Microblading & Permanent Make-up",
      items: [
        { name: "Microblading Augenbrauen", price: "auf Anfrage" },
        { name: "Powder Brows / Ombré", price: "auf Anfrage" },
        { name: "Permanent Lidstrich", price: "auf Anfrage" },
        { name: "Permanent Lippen", price: "auf Anfrage" },
        { name: "Nacharbeit", price: "auf Anfrage" },
      ],
    },
    {
      category: "Wimpernverlängerung (UV System)",
      items: [
        { name: "Classic Wimpern", price: "auf Anfrage" },
        { name: "Volume Wimpern 2D-3D", price: "auf Anfrage" },
        { name: "Mega Volume 4D-6D", price: "auf Anfrage" },
        { name: "Auffüllung", price: "auf Anfrage" },
        { name: "Wimpern Entfernung", price: "auf Anfrage" },
      ],
    },
    {
      category: "Brow & Lash Lifting",
      items: [
        { name: "Lash Lifting inkl. Färbung", price: "auf Anfrage" },
        { name: "Brow Lifting inkl. Färbung", price: "auf Anfrage" },
        { name: "Lash & Brow Lifting Kombi", price: "auf Anfrage" },
        { name: "Wimpern Färbung", price: "auf Anfrage" },
        { name: "Augenbrauen Färbung", price: "auf Anfrage" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "Beauty by Erona - Professionelles Beauty-Studio Heilbronn",
    hygiene: "/beauty/behandlung 3.png",
    gallery: [
      { url: "/beauty/wimpern.png", category: "Wimpern" },
      { url: "/beauty/eyebrow-after.png", category: "Microblading" },
      { url: "/beauty/face.jpg", category: "Permanent Make-up" },
      { url: "/beauty/face2.jpg", category: "Brow Lifting" },
      { url: "/beauty/Generated Image January 05, 2026 - 2_18PM (2).png", category: "Wimpern" },
      { url: "/beauty/Generated Image January 05, 2026 - 2_18PM.png", category: "Beauty" },
      { url: "/beauty/behandlung 3.png", category: "Schulungen" },
      { url: "/beauty/wimpern (2).webp", category: "Lash Lifting" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Elegant Rose/Blush Pink for Beauty Studio
  // ============================================
  colors: {
    primary: "#C4A484", // Elegant Rose Gold / Champagne
    primaryRgb: "196, 164, 132",
    dark: "#2D2D2D",
    light: "#FDF8F5",
    lightAlt: "#F9F3EF",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Sauber, hell & wunderschön",
    description: "Unser Studio ist sehr sauber, hell, wunderschön dekoriert und riecht frisch. Wir bieten exzellenten Kundenservice in einer unterstützenden Atmosphäre - deshalb kommen Kundinnen sogar über 150 km zu uns.",
    features: [
      {
        icon: "shield",
        title: "4.9 Sterne Bewertung",
        description: "186 Google-Bewertungen bestätigen unsere Qualität und Professionalität.",
      },
      {
        icon: "star",
        title: "Master of Eyebrows",
        description: "Präzise, perfekte und saubere Arbeit für unfassbar schöne Endergebnisse.",
      },
      {
        icon: "award",
        title: "Kundinnen aus ganz Deutschland",
        description: "Manche Kundinnen fahren über 150 km zu uns - es lohnt sich jedes Mal!",
      },
      {
        icon: "check",
        title: "Parkplätze vorhanden",
        description: "Bequeme Anfahrt mit eigenem Parkplatz direkt am Studio.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "Beauty by Erona Heilbronn Logo",
  },
};

export type Config = typeof config;
