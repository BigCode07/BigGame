const ItemDetail = ({ juego }) => {
  return (
    <div className="container">
      <div className="juego-detalle">
        <img src={juego.image} alt={juego.title} />
        <div>
          <h3 className="titulo">{juego.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
