import "./App.css";
import Navbar from "./components/navBar/navbar";
import Signup from "./components/pages/Signup";

import { Outlet } from "react-router-dom";

export default function App() {
  const [currentPage, setCurrentPage] = useState('Homepage');

  const showPage = () => {
      if (currentPage === "Homepage") {
          return <Homepage />;
      }
      if (currentPage === "About") {
          return <About />;
      }
      if (currentPage === "Projects") {
          return <Projects />;
      }
      if (currentPage === "Contact") {
          return <Contact />;
      }
      if (currentPage === "Resume") {
          return <Resume />;
      }
  };

  const pageChange = (page) => setCurrentPage(page);

  return (
      <section>
          <Header />
          <NavTabs currentPage={currentPage} pageChange={pageChange} />
          <main className='main'>{showPage()}</main>
      </section>
  );
}

export default App;
