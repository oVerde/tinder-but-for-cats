module.exports = {
  Query: {
    breeds: async (parent, args, context) =>
      context.db
        .ref("breeds")
        .once("value")
        .then(data => data.val())
        .catch(err => console.log(err))
  }
};
