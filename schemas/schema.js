// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import teamMember from "./teamMember";
import facultyMember from "./facultyMember";
import facultyAdvisor from "./facultyAdvisor";
import event from "./event";

import socialLinks from "./socialLinks";
import member from "./member";
import blockContent from "./blockContent";
import guestDetails from "./guestDetails";
import coordinatorDetails from "./coordinatorDetails";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([

    member,
    socialLinks,
    blockContent,
    guestDetails,
    coordinatorDetails,

    teamMember,
    facultyMember,
    facultyAdvisor,
    event,

    /* Your types here! */
  ]),
});
