// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
// import schemas
import social from "./documents/social";
import testimonials from "./documents/testimonials";
import brand from "./documents/brand";
//import contact from './documents/contact';
import contact from "./documents/contact";
import workExperience from "./documents/workExperience";
import logo from "./documents/logo";
import header from "./documents/header";
import sections from "./documents/sections";
import sectionItem from "./documents/sectionItem";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    social,
    testimonials,
    brand,
    contact,
    workExperience,
    logo,
    header,
    sections,
    sectionItem,
  ]),
});
