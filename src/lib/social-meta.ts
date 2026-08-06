type SocialMetaArgs = {
  origin: string;
  path: string;
  title: string;
  description: string;
  image: string;
  type?: string;
};

/** Builds a complete OpenGraph + Twitter Card meta set for a single route. */
export function socialMeta({
  origin,
  path,
  title,
  description,
  image,
  type = "article",
}: SocialMetaArgs) {
  const url = `${origin}${path}`;
  const imageUrl = `${origin}${image}`;

  return [
    { title },
    { name: "description", content: description },
    { name: "author", content: "Sandhya Ramesh" },

    { property: "og:site_name", content: "The Future" },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:image:secure_url", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "900" },
    { property: "og:image:alt", content: title },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: title },
    { name: "twitter:creator", content: "@sandhyaramesh" },
    { name: "twitter:site", content: "@thefuture" },
  ];
}
