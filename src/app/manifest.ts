import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FR Portfolio — Muhammad Furqon Rizqi",
    short_name: "FR Portfolio",
    description: "Muhammad Furqon Rizqi Full-Stack Developer Portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#080808",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
