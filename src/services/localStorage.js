export const loadContacts = () => {
    try {
      const serializedContacts = localStorage.getItem('contacts');
      return serializedContacts ? JSON.parse(serializedContacts) : [];
    } catch (error) {
      console.error("Error loading contacts: ", error);
      return [];
    }
};
  
  export const saveContacts = (contacts) => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error("Error saving contacts: ", error);
    }
};