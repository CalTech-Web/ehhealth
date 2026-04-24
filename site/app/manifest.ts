import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EH Nursing and Wellness Services",
    short_name: "EH Nursing",
    description:
      "Medi-Cal approved, nurse-led doula care in Los Angeles. Prenatal, birth, and postpartum support.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F4F3",
    theme_color: "#658B8B",
    icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      {
        src: "/assets/logos/eh-clipart-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
