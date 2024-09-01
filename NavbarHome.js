import Navbar from './Navbar';

function NavbarHome() {
  return (
    <div className="home-page">
              <Navbar />
      <div className="welcome-message">
        <h1>Welcome to the Home Appliance Service Center</h1>
        <p>"Service beyond expectations, repairs beyond perfection"</p>
      </div>
     
    </div>
  );
}

export default NavbarHome;