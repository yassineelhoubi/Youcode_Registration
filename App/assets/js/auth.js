users = [];
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

/* submit registration form */
const form = document.querySelector('.register')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value;
    const cin = form.cin.value;
    const age = form.age.value;
    const lName = form.lName.value;
    const fName = form.fName.value;
    if (cin == "" || email == "" || age == "" || lName == "" || fName == "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incomplete information!',

        })

    } else {
        if (age >= 18 && age <=35) {
            const UserLogin = `${Math.random()
                .toString(36)
                .substr(3, 4)}`;
            const password = `${Math.random()
                .toString(36)
                .substr(2, 6)}`;
            newCandidate = new Candidate(cin, age, lName, fName, email, UserLogin, password)
            obj = newCandidate.register()
            Swal.fire({
                title: 'Do you want to save your info?',
                html: `Your Login :${UserLogin}<br>Your Password:${password}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
    
                if (result.isConfirmed) {
                    fetch("http://localhost:3000/users/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(obj),
                    }).then(
                        //register successfuly
                        Swal.fire({
                            title: 'Please Remember Your Login?',
                            html: `Your Login : <strong>${UserLogin}</strong><br>Your Password: <strong>${password}</strong>`,
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'I saved it!'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire('Saved!', ``, 'success')
                                location.href = 'login.html';
                            }
                          })
                    );
    
                } else if (result.isDenied) {
                    Swal.fire('Infos are not saved', '', 'info')
                }
            })
        } else {
            Swal.fire('You Can\'t Register', 'Your Age Must be Between 18 and 35', 'info')
        }
        
    }

})