/* import  */
import Candidate from "./Candidate.js";

/* ==================Registrater =========================*/
const registerForm = document.querySelector('.register')
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = registerForm.email.value;
        const cin = registerForm.cin.value;
        const age = registerForm.age.value;
        const lName = registerForm.lName.value;
        const fName = registerForm.fName.value;
        /* check data if null */
        if (cin == "" || email == "" || age == "" || lName == "" || fName == "") {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incomplete information!',

            })

        } else {
            /* if age valide */
            if (age >= 18 && age <= 35) {
                /* check email if alredy exist */
                var emailExist = false

                await axios.get("http://localhost:3000/users/")
                    .then((res) => {
                        res.data.forEach(user => {

                            if (user.email == email) {
                                emailExist = true

                            }

                        });

                    })
                if (emailExist) {
                    Swal.fire('You Can\'t Register', 'Your alredy register', 'warning')
                } else {
                    /* generate random login and password */
                    const Uid = `${Math.random()
                        .toString(36)
                        .substr(3, 4)}`;
                    const password = `${Math.random()
                        .toString(36)
                        .substr(2, 6)}`;
                    /* instance candidate module */
                    const newCandidate = new Candidate(cin, age, lName, fName, email, Uid, password)
                    /* return data as object */
                    const obj = newCandidate.register()
                    /* ask user if really want to register */
                    Swal.fire({
                        title: 'Do you want to save your info?',
                        html: `Your Login :${Uid}<br>Your Password:${password}`,
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Save',
                        denyButtonText: `Don't save`,
                    }).then((result) => {
                        /* confirmed */
                        if (result.isConfirmed) {
                            /* send data */

                            axios.post("http://localhost:3000/users/", obj)
                                .then(
                                    //register successfuly
                                    Swal.fire({
                                        title: 'Please Remember Your Login?',
                                        html: `Your Login : <strong>${Uid}</strong><br>Your Password: <strong>${password}</strong>`,
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
                            /* Not confirmed */
                        } else if (result.isDenied) {
                            Swal.fire('Infos are not saved', '', 'info')
                        }
                    })
                }


            }
            /* age not valid */
            else {
                Swal.fire('You Can\'t Register', 'Your Age Must be Between 18 and 35', 'info')
            }
        }

    })
}


/* ===================== Login =================== */

const loginForm = document.querySelector('#loginForm')
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const Uid = loginForm.Uid.value;
        const password = loginForm.password.value
        if (Uid == "" || password == "") {
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Incomplete information!',

            })

        } else {

            await axios.get("http://localhost:3000/users/")
                .then((res) => {
                    var userLoged = false
                    var responsibleLoged = false
                    res.data.forEach(user => {
                        /* if candidate */
                        if ( user.Uid == Uid && user.password == password && user.role == "candidate" ){
                            userLoged = true
                        } 
                        /* if responsible */
                        else if ( user.Uid == Uid && user.password == password && user.role == "responsible" ){
                            responsibleLoged = true
                        }

                    })
                    console.log(userLoged, responsibleLoged)
                    if (userLoged) {
                        sessionStorage.setItem('Uid', Uid);
                        sessionStorage.setItem('password', password)
                        sessionStorage.setItem('role', 'candidate')
                        location.href = 'test.html';
                    } else if (responsibleLoged) {
                        sessionStorage.setItem('Uid', Uid);
                        sessionStorage.setItem('password', password)
                        sessionStorage.setItem('role', 'responsible')
                        location.href = 'responsible/main.html';
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Data not valid',

                        })
                    }
                })

        }

    })
}