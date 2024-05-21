import style from "./Cartcard.module.css";

function Cartcard({ img, title, price, handleDelete }) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.description}>
          <img src={img} alt="" className={style.cartimg} />
          <h6 className={style.title}>{title}</h6>
        </div>
        {/* <input type="number" className={style.quantity} min={1} /> */}
        <div className={style.subtotal}>{price}</div>
        <button className={style.delete} onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cartcard;
