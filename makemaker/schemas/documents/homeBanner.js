export default {
  name: "banners",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "imageList",
      title: "Image List",
      type: "array",
      of: [
        {
          type: "image",
          option: { hotspot: true },
        },
      ],
    },
    {
      name: "imageName",
      title: "ImageName",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
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
