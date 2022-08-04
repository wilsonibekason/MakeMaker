export const productDetailQuery = (productId) => {
  const query = `*[_type == "banner" && _id == '${productId}']{
        image{
            asset->{
                url
            }
        },
        _id,
        title,
        description,
        tags,
        saleTime,
        price,
        product,
        publishedAt,
        discount,
        
    }`;
  return query;
};

export const productDetailMoreQuery = (product) => {
  const query = `*[_type == "banner" && tag == '${product?.tag}' && _id != '${product?._id}']{
    image{
        asset->{
            url
        }
    },
    _id,
    title,
    product,
    publishedAt,
    description,
    price,
    
   }`;
  return query;
};
