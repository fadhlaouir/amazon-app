const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: Schema.Types.ObjectId, ref: "Address" }, // City:String , Address_1: Sting...
});

// pre save => before saving users {} into db run this encrypt than save it
UserSchema.pre("save", function(next) {
    let user = this;
    if (this.isModified("password" || this.isNew)) {
        // generate 10 length random characters
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }
            // mix the 10 length random characters with user password => output the hash
            bcrypt.hash(user.password, salt, null, function(err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                // we are done with the operation so let's move on
                next();
            });
        });
    } else {
        return next();
    }
});

// Compare Password
UserSchema.methods.comparePassword = function(password, next) {
    let user = this; // this reference the user itself
    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model("User", UserSchema);