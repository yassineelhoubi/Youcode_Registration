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
            let obj = {
                Serious: Serious,
                Motivation: Motivation,
                Administration1: Administration1,
                Administration2: Administration2,
                Administration3: Administration3,
                tech: tech,
            }
            Swal.fire({
                title: 'Do you want to save your info?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* confirmed */
                if (result.isConfirmed) {
                    /* send data */

                    axios.post("http://localhost:3000/result/", obj)
                        .then(
                            download(obj, 'json.txt', 'text/plain')
                        );
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