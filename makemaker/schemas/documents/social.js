import { MdPeople } from "react-icons/md";

export default {
  name: "social",
  type: "document",
  title: "social",
  icon: MdPeople,
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Initials must be a capital letter",
      type: "string",
    },
    {
      name: "channel",
      type: "string",
      options: {
        list: ["twitter", "linkedIn", "facebook", "instagram"],
      },
    },
    {
      name: "text",
      type: "text",
    },
    {
      name: "attachment",
      type: "image",
      title: "Attachment",
      options: { hotspot: true },
    },
  ],
};
