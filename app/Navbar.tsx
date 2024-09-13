const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#8FB4C7] mb-5 p-8 rounded-xl w-full h-[100px]">
      <h2 className="font-thin text-[25px]">
        BOHDAN <span className="font-gilroyBold">KONDRATSKYI</span>
      </h2>
      <ul className="flex items-center gap-14 text-xl">
        <li>PROJECTS</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Navbar;
