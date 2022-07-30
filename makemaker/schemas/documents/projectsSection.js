export default {
  name: "productDisplay",
  title: "ProductDisplay",
  type: "document",
  description: "Display products to showcase to the customers on the home page",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      description: "length of the images must be three",
      type: "array",
      of: [
        {
          type: "image",
          name: "image",
        },
      ],
      options: { hotspot: true },
    },
    {
      name: "imageTitle",
      title: "Image Title",
      type: "array",
      of: [
        {
          type: "string",
          name: "ProductTitle",
          title: "Product Title",
        },
      ],
    },
  ],
};
