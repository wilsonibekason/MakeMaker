export default {
  name: "banner",
  type: "document",
  title: "Banner",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "This is the title that would appear on the products section displayed on the home page ",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      placeholder: "What is the description of this banner?",
      required: true,
    },
    {
      name: "discount",
      type: "number",
      title: "Discount",
      min: 0,
      max: 1,
      step: 0.01,
      required: true,
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      min: 0,
      max: 1,
      step: 0.01,
      required: true,
    },
    {
      name: "product",
      type: "string",
      title: "Product",
      required: true,
      description: "Important to add the products name",
    },
    {
      name: "saleTime",
      type: "string",
      title: "Sale Time",
      required: true,
      description: "The time at which the sale will be active",
    },
  ],
};
