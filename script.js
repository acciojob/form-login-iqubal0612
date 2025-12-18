
function getFormvalue() {
    event.preventDefault();

    const form = document.forms["form1"];

    // Get values and trim extra spaces
    const firstName = form["fname"].value.trim();
    const lastName = form["lname"].value.trim();

    const fullName = (firstName + " " + lastName).trim();

    // Show alert (even works if one field is empty)
    alert(fullName);
}

