export async function fetchProductsData() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if(!res.ok) throw new Error("An error occurred while fetching the data");
        const data = await res.json();
        return await data
    } catch (error) {
        console.log(error);
    }
}
// export async function fetchProductsData(params = "") {
//     try {
//         const res = await fetch(`https://fakestoreapi.com/products/${params}`);
//         if(!res.ok) throw new Error("An error occurred while fetching the data");
//         const data = await res.json();
//         return await data
//     } catch (error) {
//         console.log(error);
//     }
// }

export async function fetchCategoriesData(params="") {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/categories/${params}`);
        if(!res.ok) throw new Error("An error occurred while fetching the data");
        const data = await res.json();
        return await data
    } catch (error) {
        console.log(error);
    }
}