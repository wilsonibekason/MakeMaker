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

/// fetching category based blogs for our blogs
export const blogDetailMoreQuery = (product) => {
  const query = `*[_type == "post" && categories.category.title == '${product?.categories.category.title}' && _id != '${product?._id}']{
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
export const blogMoreQuery = () => {
  const query = `*[_type == 'category']{
    title,
   'id':*[defined(categories) && _type == 'product' && references(^._id)][0]{
   _id
  }
  }[defined(id)]`;
  return query;
};

// categories[] {
//   category-> { name }
// }
// {singlePost.categories.map { |c| c.category.name }.join(", ")
/// fetching each blog query
export const blogDetailQuery = (postId) => {
  const query = `*[_type == "post" && _id == '${postId}']{
    mainImage{
      asset->{
        url
      }
    },
    _id,
    _createdAt,
    title,
    author ->{
      name,
      image,
    } ,
    'blogComments': *[_type == "blogComments" && post._ref == ^._id && approved == true],
    description,
    slug,
    body
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

// query for recentpost

export const blogRecentPost = (blogId) => {
  const query = `*[_type == "post" && category == '${blogId?.category}' && _id != '${blogId?._id}']{
    _id, 
    title,
    publishedAt,
  }`;
  return query;
};
// initialsing for fetching tags and categories
export const tagsCategories = (blogId) => {
  const query = `*[_type == "post" && _id  == '${blogId}']{
    categories -> {
       category
     }
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
