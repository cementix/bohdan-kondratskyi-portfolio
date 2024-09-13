import HomeBlocks from "./HomeBlocks";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="flex flex-col p-7 font-gilroy">
      <Navbar />
      <HomeBlocks />
    </div>
  );
}
