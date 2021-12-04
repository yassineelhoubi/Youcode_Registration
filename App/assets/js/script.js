import Candidate from "./Candidate.js";
import  Result  from "./Result.js";

const testForm = document.querySelector('.test2')
if (testForm) {
    testForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const seriousGame = testForm.Serious.value;
        const motivationTest = testForm.Motivation.value;
        const administrationTest1 = testForm.Administration1.value;
        const administrationTest2 = testForm.Administration2.value;
        const administrationTest3 = testForm.Administration3.value;
        const technicalTest = testForm.tech.value;
        /* check data if null */

        if (seriousGame == "" || motivationTest == "" || administrationTest1 == "" || administrationTest2 == "" || administrationTest3 == "" || technicalTest == "") {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incomplete information!',

            })

        } else {
            /* brining the user ID and check if it logged */
            const Uid = sessionStorage.getItem('Uid');
            const password = sessionStorage.getItem('password')
            const candidate = new Candidate();
            const idUser = await candidate.getId (Uid, password)
            if(idUser == undefined){
                return document.location.href = './login.html'
            }

            Swal.fire({
                title: 'Do you want to save your info?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then(async (result) => {
                /* confirmed */
                if (result.isConfirmed) {
                    /* send data */
                    const result = new Result(idUser, true, seriousGame, motivationTest, administrationTest1, administrationTest2, administrationTest3, technicalTest)
                    result.add()                    
                    /* Not confirmed */
                } else if (result.isDenied) {
                    Swal.fire('Infos are not saved', '', 'info')
                }
            })
        }

    });

}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(content)], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}