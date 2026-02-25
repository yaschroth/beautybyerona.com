// Beauty by Erona Heilbronn Configuration
// Wimpern, Microblading & Permanent Make-up Studio

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Beauty by Erona",
    tagline: "Deine Schönheit. Unsere Leidenschaft.",
    motto: "Natürliche Schönheit, perfekt betont.",
    description: "Dein professionelles Beauty-Studio in Heilbronn. Wimpernverlängerung, Microblading, Lash- & Browlifting und Permanent Make-up - von zertifizierten Beauty-Expertinnen.",
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
    tiktok: "",
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
    rating: 5.0,
    count: "50+",
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
      "Willkommen bei Beauty by Erona! Mit jahrelanger Erfahrung und viel Feingefühl sorgen wir für Ergebnisse, die überzeugen - individuell, hochwertig und modern.",
      "Unser Team besteht aus zertifizierten Beauty-Expertinnen, die mit höchsten Hygiene- und Qualitätsstandards arbeiten.",
      "Im Mittelpunkt steht eine präzise, typgerechte Umsetzung mit Fokus auf Qualität und Zufriedenheit. Wir begleiten dich auf deinem Weg zu natürlicher Schönheit.",
    ],
    certifications: [
      { label: "Zertifizierte Lash Artistin", icon: "award" },
      { label: "Microblading Expertin", icon: "star" },
      { label: "Hygiene Garantie", icon: "shield" },
      { label: "Schulungen & Workshops", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Laura M.",
      rating: 5,
      text: "Die besten Wimpern die ich je hatte! Erona hat ein unglaubliches Gespür für den perfekten Look. Komme immer wieder gerne!",
      service: "Wimpernverlängerung",
      date: "vor 1 Woche",
    },
    {
      name: "Sarah K.",
      rating: 5,
      text: "Mein Microblading sieht so natürlich aus! Ich wache jeden Morgen mit perfekten Augenbrauen auf. Absolute Empfehlung!",
      service: "Microblading",
      date: "vor 2 Wochen",
    },
    {
      name: "Anna T.",
      rating: 5,
      text: "Das Browlifting hat meine Augenbrauen komplett verwandelt. Super professionell und das Ergebnis ist einfach wow!",
      service: "Brow Lifting",
      date: "vor 3 Wochen",
    },
    {
      name: "Jessica H.",
      rating: 5,
      text: "Ich liebe mein neues Permanent Make-up! Erona und Merita sind echte Künstlerinnen. Die Beratung war super ausführlich.",
      service: "Permanent Make-up",
      date: "vor 1 Monat",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Wimpernverlängerung",
      description: "Traumhaft volle Wimpern für einen verführerischen Blick. Classic, Volume oder Mega Volume - ganz nach deinem Wunsch.",
      price: "ab 89 €",
      image: "/beauty/wimpern.png",
      benefits: ["Langanhaltend", "Natürlich"],
    },
    {
      title: "Microblading",
      description: "Perfekte Augenbrauen mit der Härchentechnik. Natürlich aussehende, volle Brauen die bis zu 2 Jahre halten.",
      price: "ab 249 €",
      image: "/beauty/eyebrow-after.png",
      benefits: ["2 Jahre Halt", "Natürlich"],
    },
    {
      title: "Lash Lifting",
      description: "Deine natürlichen Wimpern - nur besser! Dauerwelle und Färbung für einen wachen, offenen Blick.",
      price: "ab 49 €",
      image: "/beauty/wimpern (2).webp",
      benefits: ["6-8 Wochen", "Natürlich"],
    },
    {
      title: "Brow Lifting",
      description: "Perfekt geformte, volle Augenbrauen ohne tägliches Styling. Lamination und Färbung in einem.",
      price: "ab 45 €",
      image: "/beauty/face2.jpg",
      benefits: ["6-8 Wochen", "Pflegeleicht"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Lippen, Augenbrauen oder Lidstrich - jeden Tag. Hochwertige Pigmentierung für langanhaltende Schönheit.",
      price: "ab 199 €",
      image: "/beauty/face.jpg",
      benefits: ["Langanhaltend", "Wasserfest"],
    },
    {
      title: "Wimpern Auffüllung",
      description: "Regelmäßige Auffüllung für deine Wimpernverlängerung. Hält deine Wimpern perfekt in Form.",
      price: "ab 49 €",
      image: "/beauty/Generated Image January 05, 2026 - 2_18PM (2).png",
      benefits: ["Pflege", "Formerhalt"],
    },
  ],

  // ============================================
  // SCHULUNGEN (Training Section)
  // ============================================
  schulungen: {
    headline: "Starte dein eigenes Beauty-Business!",
    description: "Erfülle dir den Traum vom eigenen Beauty-Business! In unseren professionellen Schulungen lernst du alles, was du brauchst, um als Beauty-Profi erfolgreich durchzustarten – praxisnah, individuell und mit Zertifikat.",
    subtext: "Ob Anfängerin oder Fortgeschrittene – wir begleiten dich auf deinem Weg in die Selbstständigkeit und zeigen dir, wie du mit deinem Talent Kunden begeisterst.",
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
      category: "Wimpernverlängerung",
      items: [
        { name: "Classic Wimpern (90 Min)", price: "89 €" },
        { name: "Volume Wimpern 2D-3D (120 Min)", price: "109 €" },
        { name: "Mega Volume 4D-6D (150 Min)", price: "129 €" },
        { name: "Auffüllung Classic (60 Min)", price: "49 €" },
        { name: "Auffüllung Volume (75 Min)", price: "59 €" },
        { name: "Wimpern Entfernung", price: "15 €" },
      ],
    },
    {
      category: "Microblading & PMU",
      items: [
        { name: "Microblading Augenbrauen", price: "249 €" },
        { name: "Powder Brows / Ombré", price: "279 €" },
        { name: "Kombi Brows", price: "299 €" },
        { name: "Permanent Lidstrich", price: "199 €" },
        { name: "Permanent Lippen", price: "349 €" },
        { name: "Nacharbeit (4-6 Wochen)", price: "49 €" },
      ],
    },
    {
      category: "Lash & Brow Lifting",
      items: [
        { name: "Lash Lifting inkl. Färbung", price: "49 €" },
        { name: "Brow Lifting inkl. Färbung", price: "45 €" },
        { name: "Lash & Brow Lifting Kombi", price: "79 €" },
        { name: "Wimpern Färbung", price: "15 €" },
        { name: "Augenbrauen Färbung", price: "12 €" },
        { name: "Augenbrauen Zupfen", price: "10 €" },
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
    headline: "Qualität, Hygiene & Expertise",
    description: "Bei Beauty by Erona setzen wir auf höchste Hygienestandards und professionelle Qualität. Unser Team ist zertifiziert und arbeitet mit modernsten Materialien und Techniken.",
    features: [
      {
        icon: "shield",
        title: "Zertifizierte Expertinnen",
        description: "Erona und Merita sind zertifizierte Beauty-Expertinnen mit jahrelanger Erfahrung.",
      },
      {
        icon: "star",
        title: "Premium Materialien",
        description: "Wir verwenden nur hochwertige, hautfreundliche Produkte und Pigmente.",
      },
      {
        icon: "award",
        title: "800+ Kundinnen",
        description: "Zufriedene Kundinnen vertrauen auf unsere Expertise und Präzision.",
      },
      {
        icon: "check",
        title: "Sterilisierte Werkzeuge",
        description: "Alle Instrumente werden nach jeder Kundin gründlich sterilisiert.",
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
