module.exports = {
  Mutation: {
    signupUser: async(_, { username, email, password }, { User }) => {
      const user = User.findOne({ username });
      if ( user ) {
        throw new Error('User already exists!');
      }

      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return newUser;
    }
  }
}