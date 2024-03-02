// const contentful = require('contentful-management');
// console.log("HELLO FIZAMAAAAAA")

// const client = contentful.createClient({
//   accessToken: 'CFPAT-DngYl9OCOyzx63dS07aiFrRegT5DcJhUjjjl4dU5eiE'
// });

// // Create entry
// client.getSpace('8fhkkx1egwnn')
//   .then((space) => space.getEnvironment('master'))
//   .then((environment) => environment.createEntry('dish', {
//     fields: {
//       title: {
//         'en-US': 'Shawarma'
//       },
//       // Add other fields as needed
//     }
//   }))
//   .then((entry) => {
//     console.log('Entry created:', entry);
//     // Publish entry
//     return entry.publish();
//   })
//   .then((publishedEntry) => {
//     console.log('Entry published:', publishedEntry);
//   })
//   .catch(console.error);


// //   content management api - CFPAT-DngYl9OCOyzx63dS07aiFrRegT5DcJhUjjjl4dU5eiE