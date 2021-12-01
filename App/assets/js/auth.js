class User {
    constructor(lName, fName, email, UserLogin, password) {
        this.lName = lName;
        this.fName = fName;
        this.email = email;
        this.UserLogin = UserLogin;
        this.password = password;
        this.role = "candidate";
    }

    login() {

    }

    logout() {

    }

}

class Candidate extends User {
    constructor(cin, age, lName, fName, email, UserLogin, password) {
        super(lName, fName, email, UserLogin, password)
        // this.lName = lName
        this.cin = cin;
        this.age = age
        this.lName = lName
    }

    register() {
        let obj = {
            cin : this.cin,
            age : this.age,
            lName : this.lName,
            fName : this.fName,
            email : this.email,
            UserLogin : this.UserLogin,
            password : this.password,
            cin : this.cin,
        }

        return obj
    }
}

const form = document.querySelector('.register')
form.addEventListener('submit', (e) => {
    e.preventDefault() ;
    const email = form.email.value;
    const cin = form.cin.value ;
    const age = form.age.value ;
    const lName = form.lName.value ;
    const fName = form.fName.value ;
    const UserLogin = `${Math.random()
        .toString(36)
        .substr(3, 4)}`;
    const password = `${Math.random()
        .toString(36)
        .substr(2, 6)}`;
    test = new Candidate(cin, age, lName, fName, email, UserLogin, password)
    obj = test.register()
    fetch("http://localhost:3000/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
    console.log(obj)
})
users = []


