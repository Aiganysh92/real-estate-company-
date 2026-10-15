const properties = [
  {
    id: 1,
    title: "Modern Hillside Retreat",
    type: "House",
    city: "Austin",
    state: "TX",
    address: "214 Lakeview Trail",
    price: 725000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2850,
    yearBuilt: 2019,
    lat: 30.2672,
    lng: -97.7431,
    image: "https://picsum.photos/seed/crestview-austin-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-austin-1/900/600",
      "https://picsum.photos/seed/crestview-austin-2/900/600",
      "https://picsum.photos/seed/crestview-austin-3/900/600"
    ],
    description:
      "A light-filled modern home tucked into the Austin hills, featuring an open-concept living area, chef's kitchen with quartz countertops, and a private backyard oasis with a pool and covered patio perfect for entertaining.",
    features: ["Pool", "Smart Home", "2-Car Garage", "Quartz Countertops", "Hardwood Floors"]
  },
  {
    id: 2,
    title: "Downtown Skyline Loft",
    type: "Condo",
    city: "Seattle",
    state: "WA",
    address: "901 Pine Street, Unit 14B",
    price: 540000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1180,
    yearBuilt: 2015,
    lat: 47.6062,
    lng: -122.3321,
    image: "https://picsum.photos/seed/crestview-seattle-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-seattle-1/900/600",
      "https://picsum.photos/seed/crestview-seattle-2/900/600",
      "https://picsum.photos/seed/crestview-seattle-3/900/600"
    ],
    description:
      "Floor-to-ceiling windows frame unobstructed skyline and water views in this sleek downtown loft. Steps from transit, restaurants, and the waterfront, with building amenities including a gym and rooftop deck.",
    features: ["Rooftop Deck", "Gym Access", "Floor-to-Ceiling Windows", "In-Unit Laundry"]
  },
  {
    id: 3,
    title: "Craftsman Family Home",
    type: "House",
    city: "Denver",
    state: "CO",
    address: "3312 Maple Grove Ave",
    price: 615000,
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3100,
    yearBuilt: 2008,
    lat: 39.7392,
    lng: -104.9903,
    image: "https://picsum.photos/seed/crestview-denver-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-denver-1/900/600",
      "https://picsum.photos/seed/crestview-denver-2/900/600",
      "https://picsum.photos/seed/crestview-denver-3/900/600"
    ],
    description:
      "Spacious craftsman-style home with mountain views, a finished basement, and a fenced backyard. Close to top-rated schools and parks, this home is ideal for growing families.",
    features: ["Finished Basement", "Mountain Views", "Fenced Yard", "Fireplace"]
  },
  {
    id: 4,
    title: "Oceanfront Beach Bungalow",
    type: "House",
    city: "Miami",
    state: "FL",
    address: "77 Coral Reef Drive",
    price: 980000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1950,
    yearBuilt: 2012,
    lat: 25.7617,
    lng: -80.1918,
    image: "https://picsum.photos/seed/crestview-miami-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-miami-1/900/600",
      "https://picsum.photos/seed/crestview-miami-2/900/600",
      "https://picsum.photos/seed/crestview-miami-3/900/600"
    ],
    description:
      "Wake up to ocean breezes in this beautifully renovated beach bungalow just steps from the sand. Open living spaces, impact windows, and a wraparound deck make this a true coastal gem.",
    features: ["Ocean View", "Impact Windows", "Wraparound Deck", "Renovated Kitchen"]
  },
  {
    id: 5,
    title: "Historic Brownstone",
    type: "Townhouse",
    city: "Boston",
    state: "MA",
    address: "58 Beacon Hill Row",
    price: 1150000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2600,
    yearBuilt: 1890,
    lat: 42.3601,
    lng: -71.0589,
    image: "https://picsum.photos/seed/crestview-boston-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-boston-1/900/600",
      "https://picsum.photos/seed/crestview-boston-2/900/600",
      "https://picsum.photos/seed/crestview-boston-3/900/600"
    ],
    description:
      "Impeccably restored brownstone blending historic charm with modern updates. Exposed brick, original moldings, and a chef's kitchen make this Beacon Hill townhouse one of a kind.",
    features: ["Exposed Brick", "Original Moldings", "Private Patio", "Updated Kitchen"]
  },
  {
    id: 6,
    title: "Urban Garden Townhome",
    type: "Townhouse",
    city: "Portland",
    state: "OR",
    address: "412 Willow Creek Lane",
    price: 489000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1620,
    yearBuilt: 2017,
    lat: 45.5152,
    lng: -122.6784,
    image: "https://picsum.photos/seed/crestview-portland-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-portland-1/900/600",
      "https://picsum.photos/seed/crestview-portland-2/900/600",
      "https://picsum.photos/seed/crestview-portland-3/900/600"
    ],
    description:
      "Energy-efficient townhome with a private rooftop garden, solar panels, and a two-car garage. Located in a walkable neighborhood close to cafes, parks, and transit.",
    features: ["Rooftop Garden", "Solar Panels", "2-Car Garage", "Energy Efficient"]
  },
  {
    id: 7,
    title: "Lincoln Park Classic",
    type: "Condo",
    city: "Chicago",
    state: "IL",
    address: "2200 N Clybourn Ave, Unit 6",
    price: 465000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1300,
    yearBuilt: 2005,
    lat: 41.8781,
    lng: -87.6298,
    image: "https://picsum.photos/seed/crestview-chicago-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-chicago-1/900/600",
      "https://picsum.photos/seed/crestview-chicago-2/900/600",
      "https://picsum.photos/seed/crestview-chicago-3/900/600"
    ],
    description:
      "Classic Lincoln Park condo with a sunny south-facing balcony, hardwood floors throughout, and in-unit washer/dryer. Walking distance to the lake, parks, and the L train.",
    features: ["Balcony", "Hardwood Floors", "In-Unit Laundry", "Pet Friendly"]
  },
  {
    id: 8,
    title: "Desert Modern Oasis",
    type: "House",
    city: "Phoenix",
    state: "AZ",
    address: "9087 Saguaro Ridge Rd",
    price: 575000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2700,
    yearBuilt: 2021,
    lat: 33.4484,
    lng: -112.074,
    image: "https://picsum.photos/seed/crestview-phoenix-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-phoenix-1/900/600",
      "https://picsum.photos/seed/crestview-phoenix-2/900/600",
      "https://picsum.photos/seed/crestview-phoenix-3/900/600"
    ],
    description:
      "Brand-new desert modern build with clean architectural lines, a saltwater pool, and panoramic mountain views. Xeriscaped landscaping keeps maintenance low year-round.",
    features: ["Saltwater Pool", "Mountain Views", "Xeriscaped Yard", "Open Floor Plan"]
  },
  {
    id: 9,
    title: "Music Row Townhouse",
    type: "Townhouse",
    city: "Nashville",
    state: "TN",
    address: "615 Melody Lane",
    price: 525000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1890,
    yearBuilt: 2016,
    lat: 36.1627,
    lng: -86.7816,
    image: "https://picsum.photos/seed/crestview-nashville-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-nashville-1/900/600",
      "https://picsum.photos/seed/crestview-nashville-2/900/600",
      "https://picsum.photos/seed/crestview-nashville-3/900/600"
    ],
    description:
      "Stylish townhouse minutes from Music Row with a rooftop terrace overlooking the skyline. Open-concept living, a gourmet kitchen island, and a flexible bonus room for a home office or studio.",
    features: ["Rooftop Terrace", "Skyline Views", "Bonus Room", "Kitchen Island"]
  },
  {
    id: 10,
    title: "La Jolla Coastal Condo",
    type: "Condo",
    city: "San Diego",
    state: "CA",
    address: "7700 Shoreline Terrace, Unit 302",
    price: 865000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1420,
    yearBuilt: 2010,
    lat: 32.7157,
    lng: -117.1611,
    image: "https://picsum.photos/seed/crestview-sandiego-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-sandiego-1/900/600",
      "https://picsum.photos/seed/crestview-sandiego-2/900/600",
      "https://picsum.photos/seed/crestview-sandiego-3/900/600"
    ],
    description:
      "Light and airy coastal condo with partial ocean views and a short walk to the beach. Updated bathrooms, a private balcony, and secure parking round out this low-maintenance retreat.",
    features: ["Partial Ocean View", "Private Balcony", "Secure Parking", "Updated Bathrooms"]
  },
  {
    id: 11,
    title: "Southern Charm Estate",
    type: "House",
    city: "Atlanta",
    state: "GA",
    address: "145 Magnolia Court",
    price: 695000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3400,
    yearBuilt: 2003,
    lat: 33.749,
    lng: -84.388,
    image: "https://picsum.photos/seed/crestview-atlanta-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-atlanta-1/900/600",
      "https://picsum.photos/seed/crestview-atlanta-2/900/600",
      "https://picsum.photos/seed/crestview-atlanta-3/900/600"
    ],
    description:
      "Grand Southern estate on a quarter-acre lot with a wraparound porch, soaring ceilings, and a three-car garage. The gourmet kitchen opens to a sunlit family room overlooking mature gardens.",
    features: ["Wraparound Porch", "3-Car Garage", "Gourmet Kitchen", "Mature Landscaping"]
  },
  {
    id: 12,
    title: "Research Triangle New Build",
    type: "House",
    city: "Raleigh",
    state: "NC",
    address: "3025 Innovation Park Dr",
    price: 455000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    yearBuilt: 2023,
    lat: 35.7796,
    lng: -78.6382,
    image: "https://picsum.photos/seed/crestview-raleigh-1/900/600",
    gallery: [
      "https://picsum.photos/seed/crestview-raleigh-1/900/600",
      "https://picsum.photos/seed/crestview-raleigh-2/900/600",
      "https://picsum.photos/seed/crestview-raleigh-3/900/600"
    ],
    description:
      "Brand-new construction near the Research Triangle tech corridor. Energy-efficient appliances, an open-concept layout, and a flexible loft space make this move-in-ready home a smart buy.",
    features: ["New Construction", "Energy-Efficient Appliances", "Loft Space", "Smart Thermostat"]
  }
];

module.exports = properties;
