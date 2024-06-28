const Cards = ({ cards }) => {
  console.log("cards",cards);
  return (
    <>
      <div className="flex justify-between flex-wrap gap-4">
        {cards.map((item) => (
          <div key={item.id} className="shadow-xl card bg-base-100 w-96">
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cards;
