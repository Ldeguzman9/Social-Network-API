const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      //NEED TO LOOK UP
      //validate: true,
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
      id: false,
    },
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
