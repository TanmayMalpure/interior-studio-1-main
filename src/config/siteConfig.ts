const companyName = "Arch Interiors";

const domain = companyName
  .toLowerCase()
  .replace(/\s+/g, "");


export const siteConfig = {
  companyName,
  companyNameShort: companyName.split(" ")[0]?.toUpperCase() ?? "",
  companyNameSuffix: companyName.split(" ").slice(1).join(" ").toUpperCase(),
  domain,
  email: `hello@${domain}.com`,
  phone: "+91 96077 31229",
  phoneRaw: "+91 1234567890",
  address: {
    street: "Arch Interiors",
    city: "Pune",
    state: "Maharashtra",
    zip: "411004",
    country: "IN",
  },
  social: {
    twitter: `@${domain}`,
    instagram: {
      profile: `https://www.instagram.com/interiors_archh?stkn=MTl6aGNmMDE3eWtzdQ==`,
      posts: [
        "https://www.instagram.com/reel/Dc00OQmDmes/embed",
        "https://www.instagram.com/reel/DcTSIVBlQWd/embed",
        "https://www.instagram.com/reel/DNccTioSQpF/embed",
      ],
    },
  },
  tagline: "Luxury Interior Design for Modern Living",
  description: `${companyName} — premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions. Book your free consultation today.`,
  shortDescription: "Premium interior design studio specializing in residential interiors, modular kitchens, office design, and turnkey solutions.",
  foundedYear: "2019",
};

