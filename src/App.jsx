import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import MyCenter from './components/MyCenter';
import Save from './components/Save';
import ContactDetails from './components/Details';
import { createContext, useState, useEffect } from 'react';

export const ContactContext = createContext();

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  let urlData = 'https://jsonplaceholder.typicode.com/users';

  async function fetchUsers() {
    try {
      const response = await fetch(urlData);
      const responseData = await response.json();
      setContacts(responseData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <ContactContext.Provider value={{ contact, setContact, contacts, setContacts }}>
      <Routes>
        <Route path="/" element={<Contact />}></Route>
        <Route path="/recent" element={<HomePage />}></Route>
        <Route path="/contacts/:id" element={<ContactDetails />}></Route>
        <Route path="/myCenter" element={<MyCenter />}></Route>
        <Route path="/save" element={<Save />}></Route>
      </Routes>
    </ContactContext.Provider>
  );
};

export default App;
