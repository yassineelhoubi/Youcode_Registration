async function downloadPdf(id) {

    let arr = [];

    await axios.get("http://localhost:3000/result?idUser=" + id)
        .then((res) => {
            arr.push(res.data)
        }
        );
    await axios.get("http://localhost:3000/users?id=" + id)
        .then((res) => {
            arr.push(res.data)
        }
        );
        Down(arr)


}
function Down(arr) {
    console.log(arr, arr[0][0].seriousGame)
    var sTable = `<h1>fname : <span>${arr[0][0].seriousGame}</span></h1>`;

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close();     // CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
}