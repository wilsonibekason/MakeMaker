// initialising postBlogQuery

export const postBlogQuery = `*[_type == "post"]{
  _id,
   title,
      slug,
      publishedAt,
      author->{
  name,
  image
    },
  description,
  mainImage,
  slug
  }`;
/// quering to get featuredBlog post
export const getFeaturedPosts = () => {
  const query = `*[_type == "post"]{
      _id,
       title,
          slug,
          publishedAt,
          author->{
      name,
      image
        },
      description,
      mainImage,
      slug
      }`;
  return query;
};
/// fetching each blog query
export const blogDetailQuery = (slug) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
    _id,
    _createdAt,
    title,
    author ->{
      name,
      image,
    } ,
    'blogComments': *[_type == "blogComments" && post._ref == ^._id && approved == true],
    description,
    mainImage,
    slug,
    body
  }`;
  return query;
};

/// fetching category based blogs for our blogs
export const blogDetailMoreQuery = (product) => {
  const query = `*[_type == "post" && category == '${product?.category}' && _id != '${product?._id}']{
    mainImage{
      asset->{
        url
      }
    },
    _id,
    title,
    slug,
    description,
    publishedAt,
    author->{
      name,
      image
    }
  }`;
  return query;
};

// initialising productDetailQuery
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
        productImage
    }`;
  return query;
};

// initialising productDetailMoreQuery
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
    productImage
   }`;
  return query;
};
