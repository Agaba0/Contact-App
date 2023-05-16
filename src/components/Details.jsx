import { useContext } from 'react';
import { ContactContext } from '../App';
import Navbar from './nav';
import { useNavigate } from 'react-router-dom';

const ContactDetails = () => {
  const navigate = useNavigate();
  const { contact } = useContext(ContactContext);
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex"
          style={{ width: 414, height: 736 }}
        >
          <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <div className="mb-3">
              <h1 className="mt-6 font-bold text-xl">{contact.name} Details</h1>
            </div>
            <div class="mb-4">
              <label
                for="profile-picture"
                class="block text-gray-700 font-bold mb-2"
              >
                Profile Picture:
              </label>
              <input
                type="file"
                id="profile-picture"
                name="profile-picture"
                class="py-2 px-3 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div className=" bg-gray-100 rounded-3xl p-5 space-y-4 border-4 hover:shadow-lg">
              <h3 className="3xl">
                <span className="text-xl font-bold">Name:</span> {contact?.name}
              </h3>
              <h3 className="3xl">
                <span className="text-xl font-bold">email:</span>{' '}
                {contact?.email}{' '}
              </h3>
              <h3 className="3xl">
                <span className="text-xl font-bold">Phone No: </span>
                {contact?.phone}{' '}
              </h3>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 p-1 text-lg mt-2 rounded-lg hover:shadow-lg"
            >
              Back
            </button>
          </div>
          <div className="absolute bottom-0 w-full border-t border-gray-200 flex justify-center items-center">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
