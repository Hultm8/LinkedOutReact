import EmployeeComponent from "./Components/EmployeeComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <>
    <header>
    <HeaderComponent/>
  </header>
  <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Sidebar/>
      <EmployeeComponent/>
  </div>
  <footer>
    <FooterComponent/>
  </footer>
    </>
  
  );
}

export default App;
