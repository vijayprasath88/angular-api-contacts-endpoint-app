export interface User {
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    address: {
        street: String,
        city: String,
        country: String
    }
}