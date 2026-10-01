export interface EventItem {
  slug: string;
  title: string;
  client: string;
  location: string;
  summary: string;
  description: string;
  image: string;
  heroImage: string;
}

export const EVENTS: EventItem[] = [
  {
    slug: "united-toyota-beach-activation",
    title: "United Toyota Beach Activation",
    client: "United Toyota",
    location: "Mangaluru",
    summary:
      "A beach-side activation for United Toyota, with a vehicle showcase, live stage and LED screen.",
    description:
      "A beach-side brand activation for United Toyota, bringing their vehicle lineup — from the Hilux to the Camry — out onto the sand for a hands-on showcase. The setup included a row of marquee tents, a staging area with an LED screen running live visuals, string lighting, and a red-carpet welcome, giving visitors a full evening of browsing the latest models in a relaxed, open-air setting.",
    image: "/events/united-toyota-beach-activation.jpg",
    heroImage: "/events/united-toyota-beach-activation-full.jpg",
  },
  {
    slug: "croma-store-launch",
    title: "Croma Store Launch",
    client: "Croma",
    location: "Mangaluru",
    summary:
      "Store-opening activation for Croma, Mangaluru, with a traditional welcome setup and festive décor.",
    description:
      "Launch-day activation for a new Croma store in Mangaluru. The entrance was dressed with a traditional bullock-cart centerpiece and marigold garlands, a red-carpet walkway, and floral arches framing the storefront — a festive, locally-rooted welcome for opening-day visitors stepping into the new store.",
    image: "/events/croma-store-launch.jpg",
    heroImage: "/events/croma-store-launch-full.jpg",
  },
  {
    slug: "kfc-store-launch",
    title: "KFC Store Launch",
    client: "KFC",
    location: "Mangaluru",
    summary:
      "Launch-day activation for a new KFC outlet in Mangaluru, with a floral welcome arch.",
    description:
      "Launch-day activation for a new KFC outlet in Mangaluru, featuring a floral welcome arch at the entrance and a red-carpet walkway for opening-day guests. On-ground coordination covered the entrance setup, crowd flow, and day-of logistics for the new store's debut.",
    image: "/events/kfc-store-launch.jpg",
    heroImage: "/events/kfc-store-launch-full.jpg",
  },
  {
    slug: "silver-spirit-cruise-docking",
    title: "Silver Spirit Cruise Docking",
    client: "Silver Spirit",
    location: "Mangaluru",
    summary:
      "Passenger reception and transport coordination as the Silver Spirit cruise ship called at Mangaluru.",
    description:
      "Shore-side reception and transport coordination as the cruise ship Silver Spirit docked at Mangaluru port. A fleet of coaches and cars, including senior-citizen and wheelchair-friendly vehicles, was lined up dockside to move disembarking passengers onward for their day ashore.",
    image: "/events/silver-spirit-cruise-docking.jpg",
    heroImage: "/events/silver-spirit-cruise-docking-full.jpg",
  },
];
