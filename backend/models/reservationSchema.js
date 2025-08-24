import mongoose from "mongoose"
import validator from "validatore"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        miniLength: [3,"Frist name must contain at least 3 characters!"],
        maxLenght: [30, "First name cannot exceed 30 characters"]
    },

    lastName: {
        type: String,
        required: true,
        miniLength: [3,"Last name must contain at least 3 characters!"],
        maxLenght: [30, "Last name cannot exceed 30 characters"]
    },

    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },

    phone: {
        type: String,
        required: true,
        miniLength: [10,"Phone number must contain only 10 digits"],
        maxLenght: [10,"Phone number must contain only 10 digits"]
    },

    time: {
        type: String,
        required: true,
    },
    date: {
        type : String,
        required: true,
    }
});


export const Reservation = mongoose.model("Reservation",reservationSchema)