const testForm = document.querySelector('.test2')
if (testForm) {
    testForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const Serious = testForm.Serious.value;
        const Motivation = testForm.Motivation.value;
        const Administration1 = testForm.Administration1.value;
        const Administration2 = testForm.Administration2.value;
        const Administration3 = testForm.Administration3.value;
        const tech = testForm.tech.value;
        /* check data if null */
        if (Serious == "" || Motivation == "" || Administration1 == "" || Administration2 == "" || Administration3 == "" || tech == "") {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incomplete information!',

            })

        } else {

        }
        // else {
        //     /* if age valide */
        //     if (age >= 18 && age <= 35) {
        //         /* check email if alredy exist */
        //         var emailExist = false

        //         await axios.get("http://localhost:3000/users/")
        //             .then((res) => {
        //                 res.data.forEach(user => {

        //                     if (user.email == email) {
        //                         emailExist = true

        //                     }

        //                 });

        //             })
        //         if (emailExist) {
        //             Swal.fire('You Can\'t Register', 'Your alredy register', 'warning')
        //         } else {
        //             /* generate random login and password */
        //             const Uid = `${Math.random()
        //                 .toString(36)
        //                 .substr(3, 4)}`;
        //             const password = `${Math.random()
        //                 .toString(36)
        //                 .substr(2, 6)}`;
        //             /* instance candidate module */
        //             const newCandidate = new Candidate(cin, age, lName, fName, email, Uid, password)
        //             /* return data as object */
        //             const obj = newCandidate.register()
        //             /* ask user if really want to register */
        //             Swal.fire({
        //                 title: 'Do you want to save your info?',
        //                 html: `Your Login :${Uid}<br>Your Password:${password}`,
        //                 showDenyButton: true,
        //                 showCancelButton: true,
        //                 confirmButtonText: 'Save',
        //                 denyButtonText: `Don't save`,
        //             }).then((result) => {
        //                 /* confirmed */
        //                 if (result.isConfirmed) {
        //                     /* send data */

        //                     axios.post("http://localhost:3000/users/", obj)
        //                         .then(
        //                             //register successfuly
        //                             Swal.fire({
        //                                 title: 'Please Remember Your Login?',
        //                                 html: `Your Login : <strong>${Uid}</strong><br>Your Password: <strong>${password}</strong>`,
        //                                 icon: 'warning',
        //                                 showCancelButton: true,
        //                                 confirmButtonColor: '#3085d6',
        //                                 cancelButtonColor: '#d33',
        //                                 confirmButtonText: 'I saved it!'
        //                             }).then((result) => {
        //                                 if (result.isConfirmed) {
        //                                     Swal.fire('Saved!', ``, 'success')
        //                                     location.href = 'login.html';
        //                                 }
        //                             })
        //                         );
        //                     /* Not confirmed */
        //                 } else if (result.isDenied) {
        //                     Swal.fire('Infos are not saved', '', 'info')
        //                 }
        //             })
        //         }


        //     }
        //     /* age not valid */
        //     else {
        //         Swal.fire('You Can\'t Register', 'Your Age Must be Between 18 and 35', 'info')
        //     }
        // }

    })
}