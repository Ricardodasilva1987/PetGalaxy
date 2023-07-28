import "./Counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "7vh",
      }}
    >
      <button className="plus" onClick={restar}>
        {" "}
        -{" "}
      </button>
      <div
        style={{
          border: "solid 1px",
          width: "10%",
          justifyContent: "center",
        }}
      >
        <h3>{contador}</h3>
      </div>
      <button className="plus" onClick={sumar}>
        {" "}
        +{" "}
      </button>

      <button
        className="agregar"
        onClick={() => {
          onAdd(contador);
        }}
      >
        Agregar al Carro
      </button>
    </div>
  );
};

export default Counter;
