import MainNav from "./MainNav";
export default function Header() {
  return (
    <header className="bg-[#EBEAE6] text-white pl-14 pr-14 pt-5 pb-5 flex items-center justify-between ">
      <img className="w-36" src="public\logo-boolwine.png" alt="" />
      <MainNav />
    </header>
  );
}
