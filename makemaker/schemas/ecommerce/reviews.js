import { GrContact } from "react-icons/gr";

export default {
  name: "reviews",
  title: "Reviews",
  icon: GrContact,
  description: "A collection of reviews from the customers .",
  usage: "review",
  options: [
    {
      name: "name",
      title: "Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      title: "Email",
      type: "text",
      required: true,
    },
  ],
};
