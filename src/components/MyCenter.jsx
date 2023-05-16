import Navbar from './nav';
import SearchInput from './SearchInput';

const MyCenter = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          className="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex"
          style={{ width: 414, height: 736 }}
        >
          <div className="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <SearchInput />
            <div className="mb-3">
              <h1 className="mt-6 font-bold">My Center</h1>
            </div>
          </div>
          <div className="absolute bottom-0 w-full border-t border-gray-200 flex justify-center items-center">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCenter;
