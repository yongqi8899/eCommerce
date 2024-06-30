import Categories from "../components/Categories.jsx";
export default function HomeCategories({categoriesData}) {
  return (
    <div className="flex flex-wrap justify-start gap-6 my-6">
     <Categories categoriesData ={categoriesData} />
     category detail 
    </div>
  );
}
