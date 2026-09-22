function CarCard({ title, description, image, year, onAction }) {
  return (
      <div className="card h-100 text-center shadow border-secondary bg-dark text-white">
        <div className="position-relative">
          <img 
            src={image} 
            className="card-img-top" 
            alt={title} 
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h4 className="card-title fw-bold mt-2 text-warning">{title}</h4>
            <span className="badge bg-secondary mb-3">{year} Model</span>
            <p className="card-text text-light-50 small opacity-75">{description}</p>
          </div>
        
        {/* İşlem Butonları */}
        <div className="card-footer bg-transparent border-top-0 d-flex flex-column gap-2 pb-3">
          <button 
            onClick={() => onAction(title, "Sipariş")}
            className="btn btn-primary w-100 text-uppercase fw-bold tracking-wider btn-sm"
          >
            🛒 Satın Al / Sipariş Ver
          </button>
          
          <div className="d-flex gap-2">
            <button 
              onClick={() => onAction(title, "Teklif")}
              className="btn btn-outline-warning w-50 text-uppercase fw-bold btn-sm"
            >
              💰 Teklif Al
            </button>
            <button 
              onClick={() => onAction(title, "Randevu")}
              className="btn btn-outline-info w-50 text-uppercase fw-bold btn-sm"
            >
              📅 Randevu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
