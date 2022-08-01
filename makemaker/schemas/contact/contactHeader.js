import { MdGroupWork } from "react-icons/md";

export default {
  name: "contactHeader",
  title: "Contact Header",
  icon: MdGroupWork,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      required: true,
      type: "text",
      validation: (Rule) => {
        if (Rule.required) {
          return "Required";
        } else {
          return "Must be unique";
        }
      },
    },
    {
      name: "description",
      title: "Description",
      required: true,
      type: "text",
      validation: (Rule) => {
        if (Rule.required) {
          return "Required";
        } else {
          return "Must be unique";
        }
      },
    },
  ],
};
