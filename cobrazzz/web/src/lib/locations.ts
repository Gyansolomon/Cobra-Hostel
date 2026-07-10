export type City = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  studentAreas: string[];
  transport: string;
  priceGuide: string;
  image: string;
};

export type University = {
  slug: string;
  shortName: string;
  name: string;
  citySlug: string;
  campus: string;
  summary: string;
  popularAreas: string[];
  image: string;
};

export const cities: City[] = [
  {
    slug: "cape-coast",
    name: "Cape Coast",
    region: "Central Region",
    summary: "A compact university city with hostel areas around UCC New Site, Old Site, Ayensu, Kwaprow, Amamoma, and Apewosika.",
    studentAreas: ["Science / New Site", "Ayensu", "Kwaprow", "Amamoma", "Apewosika"],
    transport: "Walking, shared taxis, campus shuttles, and local buses connect the main student areas.",
    priceGuide: "Shared rooms commonly start around GHS 2,300 per academic period, with private rooms priced higher.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "accra",
    name: "Accra",
    region: "Greater Accra Region",
    summary: "Ghana’s largest student market, with university accommodation around Legon, Madina, Adenta, East Legon, and Dzorwulu.",
    studentAreas: ["Legon", "Madina", "Adenta", "East Legon", "Dzorwulu"],
    transport: "Trotros, buses, ride-hailing, and campus shuttles are widely available, but commute time varies significantly.",
    priceGuide: "Private and studio rooms carry a premium; compare commute cost as carefully as rent.",
    image: "https://images.unsplash.com/photo-1577704280797-f1e71c9285d3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kumasi",
    name: "Kumasi",
    region: "Ashanti Region",
    summary: "A major student city centred around KNUST and popular hostel communities such as Ayeduase, Bomso, and Kentinkrono.",
    studentAreas: ["Ayeduase", "Bomso", "Kentinkrono", "Tech Junction", "Boadi"],
    transport: "Shared taxis and trotros connect hostel communities to campus gates and commercial areas.",
    priceGuide: "Prices vary strongly by walking distance, room occupancy, water reliability, and washroom type.",
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "takoradi",
    name: "Takoradi",
    region: "Western Region",
    summary: "A coastal student and commercial city with accommodation serving TTU and nearby training institutions.",
    studentAreas: ["Anaji", "Effiakuma", "Kwesimintsim", "Market Circle", "Apremdo"],
    transport: "Trotros and shared taxis provide the main links between residential areas and TTU.",
    priceGuide: "Budget shared rooms are available farther from campus; verify transport and water arrangements.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const universities: University[] = [
  { slug: "ucc", shortName: "UCC", name: "University of Cape Coast", citySlug: "cape-coast", campus: "Cape Coast", summary: "Browse student rooms near UCC Science Gate, Old Site, New Site, and the main shuttle routes.", popularAreas: ["Science / New Site", "Ayensu", "Kwaprow", "Amamoma"], image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80" },
  { slug: "cctu", shortName: "CCTU", name: "Cape Coast Technical University", citySlug: "cape-coast", campus: "Cape Coast", summary: "Compare rooms serving CCTU students across Cape Coast’s central and northern residential areas.", popularAreas: ["Abura", "Pedu", "Cape Coast Central", "Kotokuraba"], image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1200&q=80" },
  { slug: "ug", shortName: "UG", name: "University of Ghana", citySlug: "accra", campus: "Legon", summary: "Find accommodation around Legon, Madina, East Legon, and Adenta with clear commute context.", popularAreas: ["Legon", "Madina", "East Legon", "Adenta"], image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80" },
  { slug: "knust", shortName: "KNUST", name: "Kwame Nkrumah University of Science and Technology", citySlug: "kumasi", campus: "Kumasi", summary: "Explore shared rooms, studios, and private rooms around Ayeduase, Bomso, and Kentinkrono.", popularAreas: ["Ayeduase", "Bomso", "Kentinkrono", "Boadi"], image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" },
  { slug: "ttu", shortName: "TTU", name: "Takoradi Technical University", citySlug: "takoradi", campus: "Takoradi", summary: "Compare student accommodation near TTU with commute, water, and room-sharing information.", popularAreas: ["Effiakuma", "Anaji", "Kwesimintsim", "Market Circle"], image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80" },
];

export function getCity(slug: string) { return cities.find((city) => city.slug === slug); }
export function getUniversity(slug: string) { return universities.find((university) => university.slug === slug); }
