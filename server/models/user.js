const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user' 
    },
    token: {
        type: String,
        required: true
    }
});

// Cifrar contraseña
userSchema.pre("save", function (next) {
    var user = this;

    //check if password is modified, else no need to do anything
    if (!user.isModified('password')) {
       return next();
    }

    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        next();
    });
});

// Confirmar contraseña valida
userSchema.methods.validatePassword = function(password){
    const user = this;
    return bcrypt.compareSync(password, user.password);
};

//module.exports = mongoose.model('User', userSchema);