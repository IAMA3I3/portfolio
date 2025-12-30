// lib/queries.ts
export const projectsQuery = `
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    techStack,
    "imageUrl": image.asset->url,
    liveUrl,
    githubUrl
  }
`
