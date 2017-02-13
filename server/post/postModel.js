var Q = require('q');
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  
  userid : {
    type : ObjectId,
    required : true,
    unique : true
  },

  text : String,
  imgUrl : String,
  createdAt : 
  like : {
    type : number,
    default : 0
  },
  map : String

},
{ 
  timestamps: { createdAt: 'created_at' } 
});

PostSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

PostSchema.pre('save', function (next) {
  var post = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model('posts', PostSchema);
