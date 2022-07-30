import { MdPeople } from "react-icons/md";

export default {
  name: "social",
  type: "document",
  title: "social",
  icon: MdPeople,
  fields: [
    {
      name: "channel",
      type: "string",
      description: "check your channels to see the social media links required",
      options: {
        list: ["twitter", "linkedIn", "facebook", "instagram"],
      },
    },
    {
      name: "title",
      title: "Title",
      description: "Initials must be a capital letter",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "Initials must be a capital letter",
      type: "string",
    },

    {
      name: "socials",
      type: "array",
      description:
        "describe your social media names and links based on the channel list",
      of: [
        {
          name: "name",
          title: "name",
          type: "object",
          fields: [
            {
              title: "Name",
              name: "value",
              type: "string",
            },
          ],
        },
        {
          name: "link",
          title: "link",
          type: "object",
          fields: [
            {
              title: "Name",
              name: "value",
              type: "string",
            },
          ],
        },
        {
          name: "fontItem",
          title: "Font Item",
          type: "object",
          fields: [
            {
              title: "Name",
              name: "value",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "attachment",
      type: "image",
      title: "Attachment",
      options: { hotspot: true },
    },
  ],
};
