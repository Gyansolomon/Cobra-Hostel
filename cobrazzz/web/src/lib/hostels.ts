export type Hostel = {
  slug: string;
  name: string;
  room: string;
  area: string;
  distance: string;
  price: string;
  yearlyPrice: string;
  offer: string;
  address: string;
  rating: string;
  reviews: string;
  label: string;
  image: string;
  gallery: string[];
  tags: string[];
  map: { left: string; top: string };
  summary: string;
  manager: string;
  availableFrom: string;
  nearby: string[];
  amenities: string[];
  rules: string[];
};

export const hostels: Hostel[] = [
  {
    slug: "science-view-residence",
    name: "Science View Residence",
    room: "2 in a room",
    area: "Science / New Site",
    distance: "8 min walk to UCC Science gate",
    price: "GHS 3,200",
    yearlyPrice: "₵3,200/year",
    offer: "Save up to GHS 250",
    address: "Science Market Road, Cape Coast",
    rating: "4.8",
    reviews: "126",
    label: "Admin reviewed",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["Bills included", "Manager confirmed", "Study desk", "2 in a room", "Near campus"],
    map: { left: "47%", top: "39%" },
    summary:
      "Reviewed student rooms close to the Science gate with shared study space, clear utilities information, and manager-confirmed availability.",
    manager: "Science Market Rooms",
    availableFrom: "2026/2027 academic year",
    nearby: ["0.4 mi from Sasakawa lecture hall", "8 min walk to UCC Science gate", "3 min ride to campus shuttle"],
    amenities: ["Bills included", "Study desk", "Water available", "Shared kitchen", "Security lights", "Manager on call"],
    rules: ["Students only", "No subletting", "Quiet hours after 10 PM"],
  },
  {
    slug: "ayensu-court-rooms",
    name: "Ayensu Court Rooms",
    room: "3 in a room",
    area: "Ayensu",
    distance: "12 min shuttle to campus",
    price: "GHS 2,400",
    yearlyPrice: "₵2,400/year",
    offer: "Budget rooms",
    address: "Ayensu Junction, Cape Coast",
    rating: "4.6",
    reviews: "84",
    label: "Manager confirmed",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["Water storage", "Shared kitchen", "Budget room", "3 in a room", "Near shuttle"],
    map: { left: "33%", top: "58%" },
    summary:
      "Budget-friendly shared rooms around Ayensu with shuttle access and clear room expectations before students call the manager.",
    manager: "Ayensu Court Management",
    availableFrom: "July 2026",
    nearby: ["12 min shuttle to campus", "Near Ayensu Junction", "10 min walk to food vendors"],
    amenities: ["Water storage", "Shared kitchen", "Ceiling fan", "Near shuttle", "Manager confirmed"],
    rules: ["Students only", "Visitors by manager approval", "Keep shared kitchen clean"],
  },
  {
    slug: "kwaprow-studio-house",
    name: "Kwaprow Studio House",
    room: "1 in a room",
    area: "Kwaprow",
    distance: "15 min ride to UCC old site",
    price: "GHS 4,500",
    yearlyPrice: "₵4,500/year",
    offer: "Private room",
    address: "Kwaprow Main Road, Cape Coast",
    rating: "4.9",
    reviews: "61",
    label: "Physically verified",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["Private washroom", "Security", "Quiet area", "1 in a room", "Study desk"],
    map: { left: "66%", top: "32%" },
    summary:
      "Private room option for students who want quiet space, a verified location, and a shorter comparison path before visiting.",
    manager: "Kwaprow Studio House",
    availableFrom: "August 2026",
    nearby: ["15 min ride to UCC old site", "Close to Kwaprow taxi stop", "Quiet residential lane"],
    amenities: ["Private washroom", "Study desk", "Security", "Quiet area", "Water available"],
    rules: ["Single occupant", "No loud parties", "Manager visit required before payment"],
  },
  {
    slug: "amamoma-hostel-annex",
    name: "Amamoma Hostel Annex",
    room: "2 in a room",
    area: "Amamoma",
    distance: "10 min ride to main campus",
    price: "GHS 2,850",
    yearlyPrice: "₵2,850/year",
    offer: "Manager confirmed",
    address: "Amamoma Hostel Street, Cape Coast",
    rating: "4.7",
    reviews: "92",
    label: "Photos confirmed",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    ],
    tags: ["Manager confirmed", "Private washroom", "Near shuttle", "2 in a room", "Water available"],
    map: { left: "55%", top: "66%" },
    summary:
      "A practical Amamoma option with confirmed photos, shuttle access, and the key room details students usually ask for first.",
    manager: "Amamoma Annex Manager",
    availableFrom: "June 2026",
    nearby: ["10 min ride to main campus", "Near Amamoma station", "Walkable food options nearby"],
    amenities: ["Private washroom", "Water available", "Near shuttle", "Shared kitchen", "Manager confirmed"],
    rules: ["Students only", "Respect shared facilities", "Inspect room before payment"],
  },
];

export function getHostelBySlug(slug: string) {
  return hostels.find((hostel) => hostel.slug === slug);
}
