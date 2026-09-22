import { useState } from 'react';
import CarCard from '../components/carcard.jsx';

function Features() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [actionType, setActionType] = useState(""); 
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Markalar, resimler ve yıllar tamamen birbiriyle eşleştirildi
  const cars = [
    {
      id: 1,
      title: <>Porsche<br />Macan EV</>,
      description: "Çöl şartlarında sınırları zorlayan aerodinamik gövde ve tamamen elektrikli yeni nesil sürüş dinamikleri.",
      image: "/porsche-macan.jpg",       
      interiorImage: "/porsche-kokpit.jpg", 
      year: "2026"
    },
    {
      id: 2,
      title: <>Audi<br />Q7 Facelift</>,
      description: "Yenilenen devasa ön panjur yapısı, fütüristik matrix LED farları ve üst düzey aile konforu.",
      image: "/audi-q7.jpg",             
      interiorImage: "/audi-r8.jpg",     
      year: "2026"
    },
    {
      id: 3,
      title: <>Tesla<br />Cyber Roadster</>,
      description: "Minimalist dış hatlar ve fütüristik direksiyon tasarımıyla elektrikli spor otomobil dünyasının geleceği.",
      image: "/tesla-y.jpg",               
      interiorImage: "/tesla-direksiyon.jpg", 
      year: "2026"
    },
    {
      id: 4,
      title: <>BMW<br />X6 M Competition</>,
      description: "Gece ışıklarında mat füme kaplamasıyla dikkat çeken, safkan M gücünü yollara aktaran coupe-SUV.",
      image: "/bmw-x6.jpg",              
      interiorImage: "/bmw-4.jpg",     
      year: "2027"
    }
  ];

  const handleAction = (carId, type) => {
    const car = cars.find(c => c.id === carId);
    setSelectedCar(car);
    setActionType(type);
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="galeri" className="py-5">
      {/* Kart animasyonları ve gri kutuları yok eden yeni premium form stilleri */}
      <style>{`
        .car-card-wrapper {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .car-card-wrapper:hover {
          transform: translateY(-8px);
        }
        /* Yeni Lüks İnce Çizgili Pencere Kenarı */
        .premium-modal {
          background-color: #121214 !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7) !important;
        }
        /* Gri Kutuları Yok Eden Derin Siyah / Şeffaf Input Tasarımı */
        .custom-input {
          background-color: rgba(255, 255, 255, 0.03) !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        .custom-input:focus {
          background-color: rgba(255, 255, 255, 0.06) !important;
          border-color: #d4af37 !important; /* Altın Sarısı Parıltı */
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.2) !important;
          outline: none;
        }
        /* Placeholder yazı rengini netleştirme */
        .custom-input::placeholder {
          color: rgba(255, 255, 255, 0.3) !important;
        }
        /* Seçim (Select) kutusunun içindeki yazıları karartma */
        .custom-input option {
          background-color: #121214 !important;
          color: #ffffff;
        }
      `}</style>

      <div className="row g-4 justify-content-center">
        {cars.map((car) => (
          <div key={car.id} className="col-10 col-sm-6 col-lg-4 col-xl-3 car-card-wrapper">
            <CarCard 
              title={car.title}
              description={car.description}
              image={car.image}
              year={car.year}
              onAction={(title, type) => handleAction(car.id, type)}
            />
          </div>
        ))}
      </div>

      {/* Yenilenmiş Dinamik İşlem Modalı */}
      {selectedCar && (
        <div className="modal d-block d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.85)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050 }}>
          <div className="modal-dialog premium-modal text-white rounded shadow-lg p-0 overflow-hidden" style={{ width: '500px' }}>
            
            <div className="position-relative" style={{ height: '240px', overflow: 'hidden' }}>
              <img 
                src={selectedCar.interiorImage} 
                alt="Donanım Detayı" 
                className="w-100 h-100" 
                style={{ objectFit: 'cover' }}
              />
              <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(18,18,20,1))' }}>
                <span className="badge bg-warning text-dark mb-1 fw-bold">{selectedCar.year} Model Premium Donanım</span>
                <h4 className="fw-bold m-0 text-white">{selectedCar.title}</h4>
              </div>
            </div>

            <div className="p-4">
              <div className="modal-header border-0 d-flex justify-content-between align-items-center p-0 mb-3">
                <h5 className="modal-title fw-bold text-warning">
                  {actionType === "Teklif" && "💰 Fiyat Verme / Teklif İstemi"}
                  {actionType === "Sipariş" && "🛒 Ön Sipariş Süreci"}
                  {actionType === "Randevu" && "📅 Test Sürüşü Randevusu"}
                </h5>
                <button onClick={() => setSelectedCar(null)} className="btn-close btn-close-white" aria-label="Close"></button>
              </div>
              
              <div className="modal-body p-0">
                <p className="text-white-50 small mb-4">
                  {actionType === "Teklif" && "Lütfen düşündüğünüz bütçeyi ve alım yöntemini belirterek teklifinizi iletin."}
                  {actionType === "Sipariş" && "Aracı adınıza rezerve etmek üzere distribütör ön sipariş talebi oluşturuyorsunuz."}
                  {actionType === "Randevu" && "Seçtiğiniz modelin sürüş asistanlarını showroomumuzda test etmek için tarih seçin."}
                </p>
                
                {formSubmitted ? (
                  <div className="alert alert-success text-center fw-bold py-3 border-0 bg-opacity-10 bg-success text-success" role="alert">
                    🎉 Başvurunuz Alındı! Fiyat değerlendirmeniz uzman ekibimize iletilmiştir.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label small text-white-50">Adınız Soyadınız  </label>
                      <input type="text" className="form-control custom-input" required placeholder="--- --- ---" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small text-white-50">Telefon Numaranız  </label>
                      <input type="tel" className="form-control custom-input" required placeholder="--- --- ---" />
                    </div>

                    {/* Yenilenmiş Şeffaf/Siyah Fiyat Verme Modülü */}
                    {actionType === "Teklif" && (
                      <div className="row g-2 mb-3">
                        <div className="col-md-6">
                          <label className="form-label small text-white-50">Alım Yöntemi</label>
                          <select className="form-select custom-input">
                            <option>Nakit / Havale</option>
                            <option>Taşıt Kredisi</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label small text-white-50">Fiyat Teklifiniz / Bütçeniz</label>
                          <input type="text" className="form-control custom-input" required placeholder="Fiyat giriniz (Örn: \$100,000)" />
                        </div>
                      </div>
                    )}

                    {actionType === "Randevu" && (
                      <div className="mb-3">
                        <label className="form-label small text-white-50">Randevu Tarihi</label>
                        <input type="date" className="form-control custom-input" required />
                      </div>
                    )}

                    <div className="d-flex gap-2 mt-4">
                      <button type="button" onClick={() => setSelectedCar(null)} className="btn btn-secondary w-50">Kapat</button>
                      <button type="submit" className="btn btn-primary w-50 fw-bold text-uppercase">
                        {actionType === "Teklif" && "Teklif Ver"}
                        {actionType === "Sipariş" && "Siparişi Başlat"}
                        {actionType === "Randevu" && "Randevu Al"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Features;