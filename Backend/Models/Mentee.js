import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;
const model = mongoose.model;
const hash = bcrypt.hash;
const compare = bcrypt.compare;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
      minlength: 3
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: data => {
          return validator.isEmail(data);
        },
        message: props => `${props.value} is not a valid email id `
      }
    },
    password: {
      type: String,
      required: function() {
        return !this.isThirdPartyUser;
      },
      trim: true,
      minlength: 8
    },
    isThirdPartyUser: {
      type: Boolean,
      required: false,
      default: false
    },
    accessToken: {
      type: String,
      required: false
    },
    tempToken: {
      type: String,
      required: false
    },
    verified: {
      type: Boolean,
      default: false,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    DOB: {
      type: Date || null,
      required: false,
      validate: {
        validator: data => {
          return data.toLocaleDateString();
        },
        message: props => `${props.value} is not a valid date format`
      },
      default: new Date().toLocaleDateString()
    },
    gender: {
      type: String,
      default: "male",
      enum: ["male", "female", "other"]
    },
    Address: {
      city: {
        type: String,
        default: " "
      },
      district: {
        type: String,
        default: " "
      },
      state: {
        type: String,
        default: " "
      },
      pincode: {
        type: Number,
        default: " "
      }
    },
    phoneNumber: {
      type: Number
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "course"
      }
    ]
  },
  { timestamps: true }
);

userSchema.statics.findByEmailAndPassword = async (email, password) => {
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) throw new Error("email not found");
    const isMatched = await compare(password, foundUser.password);
    if (!isMatched) throw new Error("incorrect password");
    return foundUser;
  } catch (error) {
    error.name = "AuthError";
    throw error;
  }
};

userSchema.pre("save", async function(next) {
  const user = this;
  try {
    if (user.isModified("password")) {
      const hashedPassword = await hash(user.password, 10);
      user.password = hashedPassword;
      next();
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const Mentee = model("Mentee", userSchema);
export default Mentee;
