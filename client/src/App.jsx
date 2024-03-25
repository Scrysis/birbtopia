import "./App.css";
import Navbar from "./components/pages/Navbar";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Birb from './components/pages/Birb';

import { Outlet } from "react-router-dom";

export default function App() {
  const [currentPage, setCurrentPage] = useState('Homepage');

  const showPage = () => {
      if (currentPage === "Home") {
          return <Home />;
      }
      if (currentPage === "Birb") {
          return <Birb />;
      }
      if (currentPage === "Signup") {
          return <Signup />;
      }
      if (currentPage === "Login") {
          return <Login />;
      }
      if (currentPage === "Resume") {
          return <Resume />;
      }
  };

  const pageChange = (page) => setCurrentPage(page);

  return (
      <section>
          <Navbar currentPage={currentPage} pageChange={pageChange} />
          <main className='main'>{showPage()}</main>
      </section>
  );
}

