import { useDispatch, useSelector } from "react-redux";
import serendipiaApi from "../api/SerendipaApi";
import { setProducts } from "../store/ui/productSlice";



export const useProductStore = () => {

    const { clothes } = useSelector( state => state.product );
    const dispatch = useDispatch();

    const startLoadingProducts = async() => {

        try {
            // API call to get products
            const response = await serendipiaApi.get('/clothes');
            const products = response.data.clothes;
            
            dispatch( setProducts( products ) );

        } catch (error) {
            console.error("Error loading products:", error);
            
        }
    }

    const startLoadingProductsByCategory = async( category ) => {

        try {
            // API call to get products by category
            const response = await serendipiaApi.get(`/clothes/category/${category}`);
            const products = response.data.clothes;
            
            dispatch( setProducts( products ) );

            // Optionally, you can handle the case where no products are found
            if (products.length === 0) {
                console.warn(`No products found for category: ${category}`);
            }
        } catch (error) {
            console.error("Error loading products by category:", error);
            
        }
    }


    return {
        //* properties
        clothes,

        //* methods
        startLoadingProducts,
        startLoadingProductsByCategory
    }
}