import { IoIosHeart } from "react-icons/io";
import { Outlet } from "react-router";


export default function Layout() {
     return (
      <>
      <footer className="bg-slate-600">
      <p>Made with <IoIosHeart /> out of obligation</p>
      </footer>
      <Outlet />
      </>
    );
}