// duplicate property declaration
interface Contact{
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}

const contacts: Contact[] = [];


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

// Function 3: findByName(name: string): Contact[] 
// Takes a name as a parameter
// Searches the contacts array for matches
// Returns an array of matching contacts
// Prints how many were found


function findByName(name: string): Contact[] {
    const matches: Contact[] = contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase())
);
console.log(`Found${matches.length} contact(s) with the name "${name}".`);
return matches;
}

const results = findByName("Edi");


console.log("Search results:");

results.forEach(contact =>{
console.log(`ID:${contact.id} - Name: ${contact.name}`)
});

