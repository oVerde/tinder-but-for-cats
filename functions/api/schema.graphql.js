module.exports = /* GraphQL */ `
  
  schema {
    query: Query
  }

  type Weight {
    imperial: String
    metric: String
  }

  type Image {
    height: Int
    id: String
    url: String
    width: Int
  }

  type Breed {
    adaptability: Int
    affection_level: Int
    alt_names: String
    cfa_url: String
    child_friendly: Boolean
    country_code: String
    country_codes: String
    description: String
    dog_friendly: Boolean
    energy_level: Int
    experimental: Boolean
    grooming: Int
    hairless: Boolean
    health_issues: Int
    hypoallergenic: Boolean
    id: String
    indoor: Boolean
    intelligence: Int
    lap: Boolean
    life_span: String
    name: String
    natural: Boolean
    origin: String
    rare: Boolean
    reference_image_id: String
    rex: Boolean
    shedding_level: Int
    short_legs: Boolean
    social_needs: Int
    stranger_friendly: Int
    suppressed_tail: Boolean
    temperament: String
    vcahospitals_url: String
    vetstreet_url: String
    vocalisation: Int
    wikipedia_url: String
    weight: Weight
    image: Image
  }

  type Query {
    breeds: [Breed!]!
    breed: Breed
  }
  
`;


