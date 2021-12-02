import  User  from './User.js'

export default class Candidate extends User {
    constructor(cin, age, lName, fName, email, UserLogin, password) {
        super(lName, fName, email, UserLogin, password)
        // this.lName = lName
        this.cin = cin;
        this.age = age
        this.lName = lName
    }

    register() {
        let obj = {
            cin: this.cin,
            age: this.age,
            lName: this.lName,
            fName: this.fName,
            email: this.email,
            UserLogin: this.UserLogin,
            password: this.password,
            cin: this.cin,
        }

        return obj
    }
}