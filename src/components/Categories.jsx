import { Link, useParams } from "react-router-dom";
export default function Categories({ categoriesData }) {
  const params = useParams();
  return (
    <div className="flex flex-wrap justify-start gap-6 my-6">
      {categoriesData.map((category) => (
        <button className="btn btn-outline btn-blue" key={category}>
          <Link to={`/categories/${category}`}>{category}</Link>
        </button>
      ))}
    </div>
  );
}
