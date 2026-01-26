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
function listContacts() {
    if (contacts.length === 0) {
        console.log("No contacts to display.");
        return;
    }
    console.log("List of contacts:");
    contacts.forEach(function (contact) {
        var _a, _b;
        console.log("ID: ".concat(contact.id));
        console.log("Name: ".concat(contact.name));
        console.log("Email: ".concat((_a = contact.email) !== null && _a !== void 0 ? _a : "Not available"));
        console.log("Phone: ".concat((_b = contact.phone) !== null && _b !== void 0 ? _b : "Not available"));
        console.log("____________________");
    });
}
listContacts();
// Function 3: findByName(name: string): Contact[] 
// Takes a name as a parameter
// Searches the contacts array for matches
// Returns an array of matching contacts
// Prints how many were found
function findByName(name) {
    var matches = contacts.filter(function (contact) { return contact.name.toLowerCase().includes(name.toLowerCase()); });
    console.log("Found".concat(matches.length, " contact(s) with the name \"").concat(name, "\"."));
    return matches;
}
var results = findByName("Edi");
console.log("Search results:");
results.forEach(function (contact) {
    console.log("ID:".concat(contact.id, " - Name: ").concat(contact.name));
});
