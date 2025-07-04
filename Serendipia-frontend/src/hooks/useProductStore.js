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

            if (products.length === 0) {
                console.warn(`No products found for category: ${category}`);
            }
        } catch (error) {
            console.error("Error loading products by category:", error);
        }
    }

    const startLoadingProductsById = async( id ) => {
        //TODO: a implementar 
        try {
            
        } catch (error) {
            console.error("Error loading product by id:", error);
        }
    }

    const startDeletingProduct = async( id ) => {
        try {
            
            const del = await serendipiaApi.delete(`/clothes/${ id }`);
            console.log( 'Eliminado: ', del );

            dispatch( startLoadingProducts() );

        } catch (error) {
            console.log('Error deleting: ', error );
        }
    }


    return {
        //* properties
        clothes,

        //* methods
        startDeletingProduct,
        startLoadingProducts,
        startLoadingProductsById,
        startLoadingProductsByCategory,
    }
}