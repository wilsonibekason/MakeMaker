export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "product",
      title: "Product",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },

    {
      name: "productNmae",
      title: "Product Name",
      type: "string",
      required: true,
    },
  ],
};
