import Cards from "../components/Cards";
// import Categories from "../components/Categories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  // const categoriesData = useLoaderData(categories)
  console.log("home", data);
  return (
    <>
      {/* <Categories categoriesData={categoriesData}/> */}
      {data && <Cards cards={data} />}
    </>
  );
};
export default Home;
