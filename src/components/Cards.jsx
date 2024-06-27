const Cards = ({ cards }) => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {cards.map((item) => (
          <div key={item.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
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
