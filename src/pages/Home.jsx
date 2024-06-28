import Cards from "../components/Cards.jsx";
import Categories from "../components/Categories.jsx";
import CategoriesSkeleton from "../components/CategoriesSkeleton.jsx";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
const Home = () => {
  const { productsData, categoriesData } = useLoaderData();
  console.log("home productsData", productsData);
  console.log("home categoriesData", categoriesData);

  return (
    <>
      <Suspense fallback={<CategoriesSkeleton />}>
        <Await resolve={categoriesData}>
          {(categoriesData) => <Categories categoriesData={categoriesData} />}
        </Await>
      </Suspense>

      {productsData && <Cards cards={productsData} />}
    </>
  );
};
export default Home;
