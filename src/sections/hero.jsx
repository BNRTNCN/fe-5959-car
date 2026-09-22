function Hero() {
  return (
    <header className="custom-hero my-4 p-5 rounded shadow-lg border border-secondary position-relative overflow-hidden">
      {/* Arka plana lüks bir ışık efekti katmak için hafif bir dokunuş */}
      <div 
        className="position-absolute" 
        style={{
          top: '-50%', left: '-20%', width: '300px', height: '300px',
          background: 'rgba(212, 175, 55, 0.15)', filter: 'blur(100px)', borderRadius: '50%'
        }}
      ></div>

      <div className="row align-items-center g-4">
        {/* Sol Taraf: Başlıklar ve Buton */}
        <div className="col-12 col-md-7 text-center text-md-start">
          <span className="badge bg-primary text-dark fw-bold px-3 py-2 text-uppercase tracking-wider mb-3">
            Premium Deneyim
          </span>
          <h1 className="display-4 fw-extrabold text-white lh-sm">
            Lüks Araç <br className="d-none d-md-block" /> Galerisi
          </h1>
          <p className="lead mt-3 text-white-50 max-width-500">
            En son model premium araçları keşfedin.
          </p>
          <div className="mt-4">
            <a href="#galeri" className="btn btn-primary btn-lg fw-bold px-5 py-3 text-uppercase tracking-wide shadow">
              Modelleri İncele
            </a>
          </div>
        </div>

        {/* Sağ Taraf: "Siz sürün siz seçin" Vurgu Alanı */}
        <div className="col-12 col-md-5">
          <div 
            className="p-4 rounded border border-secondary text-center d-flex flex-column justify-content-center align-items-center h-100"
            style={{
              background: 'linear-gradient(145deg, #1e1e24 0%, #121214 100%)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.6)'
            }}
          >
            <h3 className="h5 text-warning fw-bold text-uppercase tracking-wider mb-2">
              Siz Sürün, Siz Seçin
            </h3>
            <p className="text-white-50 small mb-0 px-3">
              Showroomda araçları hissedin.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;

