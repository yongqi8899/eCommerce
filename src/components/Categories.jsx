import Cards from "./Cards"
export default function Categories({categoriesData}) {

  const filterCategories = (categoryKey)=> categoriesData.filter(c=>c.category == categoryKey)
  
  console.log(filterCategories("men's clothing"));
  return (
    <div role="tablist" className="tabs tabs-lifted">
        <Cards cards={filterCategories("men's clothing")} />
    </div>
  );
}
