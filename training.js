var contacts = [];
function addContact(contact) {
    contacts.push(contact);
    console.log("Contact\"".concat(contact.name, "\" added successfully"));
}
addContact({
    id: 1,
    name: "Ediberta Maxsson",
    email: "edi.maxsson@gmail.com",
    phone: "90807060"
});
