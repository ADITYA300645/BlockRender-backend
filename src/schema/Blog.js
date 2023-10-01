const { default: mongoose, Mongoose } = require("mongoose");
const accountSchema = require("./Account");

const blogSchema = mongoose.Schema({
    blog: { type: String, required: true },
    image: { type: String, require: true },
    postedBy: { type: accountSchema, required: true },
    date: { type: mongoose.Schema.Types.Date, required: true },
});
module.exports = blogSchema;
