import { TbNewSection } from "react-icons/tb";

export default {
  name: "sectionAbout ",
  title: "SectionAbout",
  icon: TbNewSection,
  type: "document",
  description: "Length must be four",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      required: true,
      display: {
        render: (text, context) => {
          return `<p>${text}</p>`;
        },
      },
      elements: [
        {
          name: "title",
          type: "text",
          display: {
            render: (text, context) => {
              return `<h3>${text}</h3>`;
            },
          },
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      required: true,
      title: "Collections of categories",
      of: [
        {
          type: "string", // type is required
          title: "Author",
          required: true,
        },
      ],
    },
    {
      name: "homeAboutImage",
      title: "Home About Images ",
      required: true,
      description: "Only One Image is required",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
