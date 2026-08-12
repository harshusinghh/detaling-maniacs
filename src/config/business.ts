export const businessConfig = {
  name: "MAK Shield Detailing Studio",
  tagline: "PRECISION. PROTECTION. PRESENCE.",
  contact: {
    phone: "+91 77805 85278",
    whatsapp: "917780585278", // Numeric for API link
    email: "info@makshield.com", // Placeholder
  },
  location: {
    address: "S.No. 55 & 56, Nagole – Bandlaguda Road, Hanuman Gardens, Adarsh Nagar Colony, Nagole, Hyderabad, Telangana – 500068",
    googleMapsUrl: "https://www.google.com/maps/place/Mak+Shield+Detailing+Studio/@17.3757144,78.5594878,3a,75y,90t/",
    coordinates: {
      lat: 17.3757147,
      lng: 78.5594827
    }
  },
  hours: [
    { day: "Monday", time: "10:00 AM – 8:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 8:00 PM" },
    { day: "Thursday", time: "10:00 AM – 8:00 PM" },
    { day: "Friday", time: "10:00 AM – 8:00 PM" },
    { day: "Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 8:00 PM" }
  ],
  services: [
    {
      id: "01",
      name: "Premium Car Detailing",
      shortDescription: "Deep exterior and interior detailing designed to restore the vehicle's appearance.",
      image: "/images/services/detailing.jpg", // Placeholder
    },
    {
      id: "02",
      name: "Ceramic Coating",
      shortDescription: "Advanced paint protection focused on gloss, hydrophobic performance, and surface preservation.",
      image: "/images/services/ceramic.jpg",
    },
    {
      id: "03",
      name: "Graphene Coating",
      shortDescription: "Premium coating technology designed to provide enhanced surface protection and gloss.",
      image: "/images/services/graphene.jpg",
    },
    {
      id: "04",
      name: "Paint Protection Film",
      shortDescription: "PPF designed to protect vulnerable painted surfaces from road debris, scratches, and stone chips.",
      image: "/images/services/ppf.jpg",
    },
    {
      id: "05",
      name: "Paint Correction",
      shortDescription: "Careful machine polishing and paint correction to reduce visible defects and restore clarity and gloss.",
      image: "/images/services/paint-correction.jpg",
    },
    {
      id: "06",
      name: "Interior Detailing",
      shortDescription: "Deep interior cleaning and detailing for seats, carpets, dashboards, panels, and interior surfaces.",
      image: "/images/services/interior.jpg",
    },
    {
      id: "07",
      name: "Car Wash / Maintenance",
      shortDescription: "Professional exterior cleaning and maintenance detailing.",
      image: "/images/services/wash.jpg",
    },
    {
      id: "08",
      name: "Custom Protection",
      shortDescription: "Tailored detailing and protection packages depending on vehicle condition and customer requirements.",
      image: "/images/services/custom.jpg",
    }
  ],
  social: {
    instagram: "https://instagram.com/makshield", // Verify
    facebook: "https://facebook.com/makshield", // Verify
  },
  reviews: {
    rating: 5.0,
    count: "25+",
    link: "https://www.google.com/maps/place/Mak+Shield+Detailing+Studio/@17.3757144,78.5594878"
  }
};
