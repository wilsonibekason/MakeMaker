export default {
  name: "productVariant",
  type: "object",
  title: "Product Variant",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "weight in grams",
      type: "number",
      name: "grams",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "sku",
      type: "boolean",
      title: "SKU",
    },
    {
      names: "taxable",
      type: "boolean",
      title: "Taxable",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: Image, options: { hotspot: true } }],
    },
  ],
};
