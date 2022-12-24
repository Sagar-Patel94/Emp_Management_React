export default function Content(props) {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ maxHeight: "90vh" }}>
          <div className="carousel-item active" data-bs-interval="4000">
            <img src="../assets/1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src="../assets/2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src="../assets/3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{textAlign: "center"}}>
        <h1 style={{fontSize: "100px", color: "#024d81"}}>Wel-Come!!!</h1>
        <strong><h1 style={{color: "#3d1d70"}}>{props.animation}</h1></strong>
        <p style={{color: "#192183"}}>Plot No. - 708, G.I.D.C. - 2<br/>Sabalpur, Junagadh<br/>362037</p>
      </div>
    </>
  );
}
