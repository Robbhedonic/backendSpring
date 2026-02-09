interface Contact{
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}

const contacts: Contact[] = [];

// Function 1: addContact(contact: Contact) 
// Takes a contact as a parameter
// Adds it to the contacts array
// Prints a confirmation message

function addContact(contact: Contact){
    contacts.push(contact);
    console.log(`Contact "${contact.name}" added successfully`);
}

addContact({
    id:1,
    name: "Ediberta Maxsson",
    email: "edi.maxsson@gmail.com",
    phone: "90807060"
});

// Function 2: listContacts() 
// Prints all contacts in the array
// Shows the id, name, email, and phone for each

function listContacts(){
    if (contacts.length === 0) {
        console.log("No contacts to display.");
        return;
    }

    console.log("List of contacts:");
    contacts.forEach(contact => {
        console.log(`ID: ${contact.id}`);
        console.log(`Name: ${contact.name}`);
        console.log(`Email: ${contact.email ?? "Not available"}`);
        console.log(`Phone: ${contact.phone ?? "Not available"}`);
        console.log("------------------------");
    });
}

listContacts(); 

// // Function 3: findByName(name: string): Contact[] 
// // Takes a name as a parameter
// // Searches the contacts array for matches
// // Returns an array of matching contacts
// // Prints how many were found

function findByName(name: string): Contact[] {
    const matches: Contact[] = contacts.filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
    );

    console.log(`Found ${matches.length} contact(s) with the name "${name}".`);
    return matches;
}

// Example search
const results = findByName("Edi");

console.log("Search results:");
results.forEach(contact => {
    console.log(`ID: ${contact.id} - Name: ${contact.name}`);
});

// // Function 4: removeById(id: number): boolean
// // Takes an id as a parameter
// // Finds and removes that contact from the array
// // Returns true if removed
// // Returns false if not found
// // Prints a message either way

function removeById(id: number){
    const index = contacts.findIndex(contact => contact.id === id);

    if (index !== -1) {
        const removed = contacts.splice(index, 1)[0]!;
        console.log(`Contact "${removed.name}" removed successfully.`);
        return true;
    } else {
        console.log(`No contact found with ID ${id}.`);
        return false;
    }
}

// // STEP 5: Test your code

// // Add 3 different contacts
// addContact({ id: 4, name: "Ediberta Max", email: "edi.max@gmail.com", phone: "90807060" });
// addContact({ id: 2, name: "Carlos Mendoza", phone: "12345678" });
// addContact({ id: 3, name: "Ana López", email: "ana.lopez@gmail.com" });

// List all contacts
// listContacts();

// Search for a contact by name
// const foundContacts = findByName("Ediberta");
// console.log("Search results:");
// foundContacts.forEach(contact => {
//     console.log(`ID: ${contact.id} - Name: ${contact.name}`);
// });

// // Remove a contact by ID
removeById(2);

// // List all contacts again
// listContacts();

// // STEP 6: Run it

// Checklist
// All 4 functions written
// Added 3 contacts
// Listed all contacts
// Searched by name
// Removed one contact
// Listed again (should show 2 contacts)
// No TypeScript errors
