import Cards from "./Cards";
export default function Categories({ categoriesData }) {
  return (
    <div className="flex justify-start flex-wrap gap-6 my-6">
      {categoriesData.map((c)=>{
        return (
          <button className="btn btn-outline btn-blue">{c}</button>
          )
      })}
    </div>
  )
}
