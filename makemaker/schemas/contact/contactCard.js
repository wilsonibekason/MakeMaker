const { MdWorkspacesOutline } = require("react-icons/md");

export default {
  name: "contactCard",
  title: "Contact Card",
  description: "The contact card is a group of people who can join the world.",
  icon: MdWorkspacesOutline,
  type: "document",
  fields: [
    {
      name: "cardName",
      title: "Card Name",
      type: "text",
    },
    {
      name: "cardDesc",
      title: "Card Description",
      type: "text",
    },
    {
      name: "cardIcon",
      title: "Card Icon",
      type: "image",
      options: { hostpot: true },
    },
  ],
};
