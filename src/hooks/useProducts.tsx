import {useEffect, useState} from 'react';
import axios, {AxiosError} from "axios";
import {IProducts} from "../components/cards/cards";

const useProducts = () => {
    const [products, setProducts] = useState<IProducts[]>([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')


    async function fetchProducts() {
        try{
            setError('')
            setLoading(true)
            const response = await axios.get<IProducts[]>("https://fakestoreapi.com/products?limit=6")
            setProducts(response.data)
            setLoading(false)
        } catch (e) {
            // const error = e as AxiosError
            setLoading(false)
            setError(error)
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products, error,loading}
};

export default useProducts;