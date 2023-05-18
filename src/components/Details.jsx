import { useContext, useEffect, useState } from 'react';
import { ContactContext } from '../App';
import Navbar from './nav';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ContactDetails = () => {
  const navigate = useNavigate();
  const { contact } = useContext(ContactContext);

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert('Image mime type is not valid');
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex"
          style={{ width: 414, height: 736 }}
        >
          <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <button
              type="button"
              className="inline-block mt-3 rounded bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft className="h4 w-6" />
            </button>
            <div className="mb-3">
              {contact.name ? (
                <h1 className="mt-6 font-bold text-xl">{contact.name} Info </h1>
              ) : (
                <p></p>
              )}
            </div>
            {contact.name ? (
              <div>
                {' '}
                <div className="mb-4">
                  <input
                    type="file"
                    accept="image/* "
                    onChange={changeHandler}
                    capture = 'user'
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {fileDataURL ? (
                      <p className="img-preview-wrapper">
                        {
                          <img
                            className="rounded-t-3xl"
                            src={fileDataURL}
                            alt="preview"
                          />
                        }
                      </p>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"></h5>
                    <div>
                      <h3 className="3xl mb-10">
                        <span className="mr-7 py-2 px-4 rounded-full  border-0 font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100">Name:</span>{' '}
                        {contact?.name}
                      </h3>
                      <h3 className="3xl mb-10">
                        <span className="mr-8 py-2 px-4 rounded-full  border-0 font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100">Email:</span>{' '}
                        {contact?.email}{' '}
                      </h3>
                      <h3 className="3xl">
                        <span className="mr-1 py-2 px-4 rounded-full  border-0 font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100">Phone No: </span>
                        {contact?.phone}{' '}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="font-bold text-lg flex justify-center mt-10">
                Go back to select a contact
              </p>
            )}
          </div>
          <div className="absolute bottom-0 w-full border-t border-gray-200 flex justify-center items-center bg-blue-700">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
