// Beauty by Erona Heilbronn Configuration
// Wimpern, Microblading & Permanent Make-up Studio

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Beauty by Erona",
    tagline: "Deine Schonheit. Unsere Leidenschaft.",
    motto: "Naturliche Schonheit, perfekt betont.",
    description: "Dein professionelles Beauty-Studio in Heilbronn. Wimpernverlangerung, Microblading, Lash- & Browlifting und Permanent Make-up - von zertifizierten Beauty-Expertinnen.",
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
      street: "Hauffstrasse 48",
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
      "Willkommen bei Beauty by Erona! Mit jahrelanger Erfahrung und viel Feingefuhl sorgen wir fur Ergebnisse, die uberzeugen - individuell, hochwertig und modern.",
      "Unser Team besteht aus zertifizierten Beauty-Expertinnen, die mit hochsten Hygiene- und Qualitatsstandards arbeiten.",
      "Im Mittelpunkt steht eine prazise, typgerechte Umsetzung mit Fokus auf Qualitat und Zufriedenheit. Wir begleiten dich auf deinem Weg zu naturlicher Schonheit.",
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
      text: "Die besten Wimpern die ich je hatte! Erona hat ein unglaubliches Gespuer fuer den perfekten Look. Komme immer wieder gerne!",
      service: "Wimpernverlaengerung",
      date: "vor 1 Woche",
    },
    {
      name: "Sarah K.",
      rating: 5,
      text: "Mein Microblading sieht so natuerlich aus! Ich wache jeden Morgen mit perfekten Augenbrauen auf. Absolute Empfehlung!",
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
      text: "Ich liebe mein neues Permanent Make-up! Erona und Merita sind echte Kuenstlerinnen. Die Beratung war super ausfuehrlich.",
      service: "Permanent Make-up",
      date: "vor 1 Monat",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Wimpernverlaengerung",
      description: "Traumhaft volle Wimpern fuer einen verfuehrerischen Blick. Classic, Volume oder Mega Volume - ganz nach deinem Wunsch.",
      price: "ab 89 Euro",
      image: "/beauty/wimpern.png",
      benefits: ["Langanhaltend", "Natuerlich"],
    },
    {
      title: "Microblading",
      description: "Perfekte Augenbrauen mit der Haerchentechnik. Natuerlich aussehende, volle Brauen die bis zu 2 Jahre halten.",
      price: "ab 249 Euro",
      image: "/beauty/eyebrow-after.png",
      benefits: ["2 Jahre Halt", "Natuerlich"],
    },
    {
      title: "Lash Lifting",
      description: "Deine natuerlichen Wimpern - nur besser! Dauerwelle und Faerbung fuer einen wachen, offenen Blick.",
      price: "ab 49 Euro",
      image: "/beauty/wimpern (2).webp",
      benefits: ["6-8 Wochen", "Natuerlich"],
    },
    {
      title: "Brow Lifting",
      description: "Perfekt geformte, volle Augenbrauen ohne taegliches Styling. Lamination und Faerbung in einem.",
      price: "ab 45 Euro",
      image: "/beauty/face2.jpg",
      benefits: ["6-8 Wochen", "Pflegeleicht"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Lippen, Augenbrauen oder Lidstrich - jeden Tag. Hochwertige Pigmentierung fuer langanhaltende Schoenheit.",
      price: "ab 199 Euro",
      image: "/beauty/face.jpg",
      benefits: ["Langanhaltend", "Wasserfest"],
    },
    {
      title: "Wimpern Auffuellung",
      description: "Regelmaessige Auffuellung fuer deine Wimpernverlaengerung. Haelt deine Wimpern perfekt in Form.",
      price: "ab 49 Euro",
      image: "/beauty/Generated Image January 05, 2026 - 2_18PM (2).png",
      benefits: ["Pflege", "Formerhalt"],
    },
    {
      title: "Schulungen",
      description: "Starte dein eigenes Beauty-Business! Zertifizierte Schulungen fuer Wimpern, Microblading und mehr.",
      price: "auf Anfrage",
      image: "/beauty/behandlung 3.png",
      benefits: ["Zertifikat", "Praxisnah"],
    },
    {
      title: "Kombi-Pakete",
      description: "Kombiniere deine Lieblingsbehandlungen und spare! Lash & Brow Lifting oder Wimpern mit Augenbrauen-Styling.",
      price: "ab 79 Euro",
      image: "/beauty/Generated Image January 05, 2026 - 2_18PM.png",
      benefits: ["Ersparnis", "Komplett-Look"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Wimpernverlaengerung",
      items: [
        { name: "Classic Wimpern (90 Min)", price: "89 Euro" },
        { name: "Volume Wimpern 2D-3D (120 Min)", price: "109 Euro" },
        { name: "Mega Volume 4D-6D (150 Min)", price: "129 Euro" },
        { name: "Auffuellung Classic (60 Min)", price: "49 Euro" },
        { name: "Auffuellung Volume (75 Min)", price: "59 Euro" },
        { name: "Wimpern Entfernung", price: "15 Euro" },
      ],
    },
    {
      category: "Microblading & PMU",
      items: [
        { name: "Microblading Augenbrauen", price: "249 Euro" },
        { name: "Powder Brows / Ombre", price: "279 Euro" },
        { name: "Kombi Brows", price: "299 Euro" },
        { name: "Permanent Lidstrich", price: "199 Euro" },
        { name: "Permanent Lippen", price: "349 Euro" },
        { name: "Nacharbeit (4-6 Wochen)", price: "49 Euro" },
      ],
    },
    {
      category: "Lash & Brow Lifting",
      items: [
        { name: "Lash Lifting inkl. Faerbung", price: "49 Euro" },
        { name: "Brow Lifting inkl. Faerbung", price: "45 Euro" },
        { name: "Lash & Brow Lifting Kombi", price: "79 Euro" },
        { name: "Wimpern Faerbung", price: "15 Euro" },
        { name: "Augenbrauen Faerbung", price: "12 Euro" },
        { name: "Augenbrauen Zupfen", price: "10 Euro" },
      ],
    },
    {
      category: "Schulungen",
      items: [
        { name: "Wimpernverlaengerung Basis", price: "auf Anfrage" },
        { name: "Volume Technik Schulung", price: "auf Anfrage" },
        { name: "Microblading Schulung", price: "auf Anfrage" },
        { name: "Permanent Make-up Schulung", price: "auf Anfrage" },
        { name: "Lash & Brow Lifting Kurs", price: "auf Anfrage" },
        { name: "Auffrischungskurs", price: "auf Anfrage" },
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
    headline: "Qualitaet, Hygiene & Expertise",
    description: "Bei Beauty by Erona setzen wir auf hoechste Hygienestandards und professionelle Qualitaet. Unser Team ist zertifiziert und arbeitet mit modernsten Materialien und Techniken.",
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
        description: "Zufriedene Kundinnen vertrauen auf unsere Expertise und Praezision.",
      },
      {
        icon: "check",
        title: "Sterilisierte Werkzeuge",
        description: "Alle Instrumente werden nach jeder Kundin gruendlich sterilisiert.",
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
