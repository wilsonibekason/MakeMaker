export default {
  name: "productDisplay",
  title: "Product",
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
      type: "array",
      of: [
        {
          type: "image",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Customers",
        },
      ],
    },
  ],
};
