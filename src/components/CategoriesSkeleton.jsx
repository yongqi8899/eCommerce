export default function CategoriesSkeleton() {
  return (
    <div role="tablist" className="flex justify-between flex-wrap gap-6 my-6">
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
      
    </div>
  );
}
