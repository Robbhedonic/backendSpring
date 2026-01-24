// duplicate property declaration
interface Contact{
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}

let contacts: Contact[] = [];


function addContact(contact: Contact){
    contacts.push(contact);
    console.log(`Contact"${contact.name}" added successfully`);

}

addContact({
    id:1,
    name: "Ediberta Maxsson",
    email: "edi.maxsson@gmail.com",
    phone: "90807060"
});

function listContacts() {
    if (contacts.length === 0){
        console.log("No contacts to display.");
        return;
    }
        
    console.log("List of contacts:");
    contacts.forEach(contact => {
        console.log(`ID: ${contact.id}`);
        console.log(`Name: ${contact.name}`);
        console.log(`Email: ${contact.email ?? "Not available"}`);
        console.log(`Phone: ${contact.phone ?? "Not available"}`);
        console.log(`____________________`);
    });
}

listContacts();