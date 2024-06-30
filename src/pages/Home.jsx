import Cards from "../components/Cards.jsx";
import Categories from "../components/Categories.jsx";
// import HomeCategories from "./HomeCategories.jsx";
import CategoriesSkeleton from "../components/CategoriesSkeleton.jsx";
import { useLoaderData, Await, useOutletContext, useParams} from "react-router-dom";
import { Suspense } from "react";
const Home = () => {
  const { productsData, categoriesData } = useLoaderData();
  const params = useParams();
  // const {filterKey, setFilterKey} = useOutletContext()
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
