import { useState, useEffect } from "react";

const Cards = ({ cards }) => {
  const [cardsData, setCardsData] = useState(cards);

  function filterData(filterKey) {
    return cards.filter((c) => c.category == filterKey);
  }

  useEffect(() => {
    const filteredData = filterData("women's clothing");
    setCardsData(filteredData);
  }, [cards]);

  return (
    <>
      <div className="flex justify-between flex-wrap gap-4">
        {cardsData.map((item) => (
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
