import { TbNewSection } from "react-icons/tb";

export default {
  name: "section",
  title: "Section",
  icon: TbNewSection,
  description: "The section of a section.",
  type: "document",
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
      name: "image",
      type: "image",
      display: {
        render: (image, context) => {
          return `<img src="${image.url}" />`;
        },
      },

      elements: [
        {
          name: "alt",
          type: "text",
          options: { hotspot: true },
          display: {
            render: (text, context) => {
              return `<p>${text}</p>`;
            },
          },
        },
      ],
    },
  ],
};
