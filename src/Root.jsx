import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Root() {
    return (
      <>
        <div id="header">
          <Header/>
        </div>
        <div id="body">
          <Outlet/>
        </div>
      </>
    );
  }
  