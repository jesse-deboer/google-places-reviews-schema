const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const fetch = require("node-fetch");

const resolvers = {
  Query: {
    reviews: (root, args, context, info) => {
      const location = args.location;
      const language = args.language;

      const url =
        "https://maps.googleapis.com/maps/api/place/details/json?key=" +
        GOOGLE_MAPS_API_KEY +
        "&fields=reviews&language=" +
        language +
        "&place_id=" +
        location;
      return fetch(url)
        .then(res => res.json())
        .then(body => {
          const results = body.result;
          const finalResults = results.reviews.map(item => {
            const finalObj = {
              name: item.author_name,
              rating: item.rating,
              text: item.text,
              time: item.time
            };
            return finalObj;
          });
          return finalResults;
        });
    }
  }
};

module.exports = {
  resolvers
};
