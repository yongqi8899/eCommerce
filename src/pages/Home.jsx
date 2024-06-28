import Cards from "../components/Cards";
import Categories from "../components/Categories";
import CategoriesSkeleton from "../components/CategoriesSkeleton.jsx";
import { useLoaderData, Await } from "react-router-dom";

const Home = () => {
  const {productsData, categoriesData} = useLoaderData();
  console.log("home productsData", productsData);
  console.log("home categoriesData", categoriesData);
  return (
    <>
    {/* <React.Suspense fallback={<CategoriesSkeleton />}>
        <Await
          // and is the promise we pass to Await
          resolve={categoriesData}
        >
          <Categories categoriesData={categoriesData}/>
        </Await>
      </React.Suspense> */}
      
      {productsData && <Cards cards={productsData} />}
    </>
  );
};
export default Home;
