// mt-[5px]
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../App';
import { IoIosAddCircle } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import Navbar from './nav';

const Contact = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { contacts, setContact } = useContext(ContactContext);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    if (value === '') setData(contacts);
    setData((prev) => prev.filter((user) => user.name.includes(value)));
  };

  const handleClick = (user) => {
    setContact(user);
    navigate(`/contacts/${user.id}`);
  };

  useEffect(() => {
    setData(contacts);
  }, [contacts]);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex"
          style={{ width: 414, height: 736 }}
        >
          <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <div className="p-5 w-full border-b-2 border-gray-200 flex justify-center">
              <input
                name="txt"
                className="bg-gray-100 rounded-full px-24 py-2 outline-none flex justify-center"
                type="text"
                placeholder="Search contacts"
                onChange={handleSearchChange}
              />
            </div>
            <div className="mb-3">
              <h1 className="mt-6 font-bold">Contact</h1>
            </div>
            <ol>
              {data?.map((user, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(user)}
                  className="mb-4 border-b-2 cursor-pointer flex"
                >
                  <p className="mr-3 bg-blue-100 rounded-full p-2">
                    <BsFillPersonFill className="" />
                  </p>{' '}
                  {user.name}
                </li>
              ))}
            </ol>

            <div className="absolute bottom-28 right-4 w-full flex justify-center">
              <div className="absolute  top-0">
                <button onClick={() => navigate('/save')}>
                  <IoIosAddCircle className="h-12 w-12 rounded-3xl hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full border-t border-gray-200 flex justify-center items-center">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
