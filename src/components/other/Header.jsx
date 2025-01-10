/* eslint-disable react/prop-types */
const Header = () => {
  
  return (
    <>
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-medium">
          Hello <br />
          <span className="text-3xl font-semibold">Arhum 👋</span>
        </h1>
        <button className={`py-2 px-5 bg-emerald-600 font-medium text-lg rounded-xl hover:bg-emerald-500`}>Log Out</button>
      </div>
    </>
  );
};

export default Header;
