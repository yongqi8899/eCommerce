import Cards from "../components/Cards";
import Categories from "../components/Categories";
// import CategoriesSkeleton from "../components/CategoriesSkeleton.jsx";
import { useLoaderData, Await } from "react-router-dom";

const Home = () => {
  const {productsData} = useLoaderData();
  console.log("home productsData", productsData);
  // console.log("home categoriesData", categoriesData);
  return (
    <>
      <Categories categoriesData={productsData}/>
      {/* {productsData && <Cards cards={productsData} />} */}
    </>
  );
};
export default Home;
