import { defineField, defineType } from "sanity"

export const project = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            }
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text"
        }),
        defineField({
            name: "techStack",
            title: "Tech Stack",
            type: "array",
            of: [{ type: "string" }]
        }),
        defineField({
            name: "image",
            title: "Project Image",
            type: "image",
            options: { hotspot: true }
        }),
        defineField({
            name: "liveUrl",
            title: "Live URL",
            type: "url"
        }),
        defineField({
            name: "githubUrl",
            title: "GitHub URL",
            type: "url"
        }),
        defineField({
            name: "featured",
            title: "Featured Project",
            type: "boolean",
        })
    ]
})
