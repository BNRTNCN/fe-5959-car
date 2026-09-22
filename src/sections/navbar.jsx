function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Sol taraftaki logo / marka adı */}
        <a className="navbar-brand fw-bold text-uppercase tracking-wider" href="#">
          VIP Oto Galeri
        </a>
        
        {/* Mobil cihazlar için açılır menü butonu */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Sağ taraftaki menü linkleri */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-medium">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#galeri">Modeller</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hakkımızda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">İletişim</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
