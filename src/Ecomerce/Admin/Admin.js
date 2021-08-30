import Asidebar from './Asidebar';
import MainContent from './MainContent';
import { Navbar } from './Navbar';

// const context = createContext();
function Admin() {
  return (

    <div className="wrapper">
      <Navbar />
      <Asidebar />
      <MainContent />
    </div>

  );
}

export default Admin;
// export { context };
