const { Schema, model } = require("mongoose");

const User = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: [{ type: String, required: true, ref: "Role" }],
  status: { type: String, default: "active" },
  lastLogin: { type: Date, required: true, default: Date.now },
}, {
  timestamps: true
});

module.exports = model("user", User);
