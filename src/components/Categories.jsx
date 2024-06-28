export default function Categories({ categoriesData }) {
  return (
    <div className="flex justify-start flex-wrap gap-6 my-6">
      {categoriesData.map((category,index) => {
        return (
          <button className="btn btn-outline btn-blue" key={index} onClick={()=>console.log({category})}>
            {category}
          </button>
        );
      })}
    </div>
  );
}
