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
            console.log(products);
            dispatch( setProducts( products ) );

        } catch (error) {
            console.error("Error loading products:", error);
            
        }
    }


    return {
        //* properties
        clothes,

        //* methods
        startLoadingProducts
    }
}