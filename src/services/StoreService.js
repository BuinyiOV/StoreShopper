import { useHttp } from "../hooks/http.hooks";

const useStore = () => {
	const {request, clearError, process, setProcess} = useHttp();

	const _apiBase = 'https://dummyjson.com';
	const _apiProducts = '/products';
	const _apiCategories = '/categories';
	const _apiCategory = '/category';
	const _apiUsers = '/users';
	const _apiPosts = '/posts';

	const getAllProducts = async () => {
		const res = await request(`${_apiBase}${_apiProducts}?limit=12`);
		return res
	}

	const getSingleProduct = async (id) => {
		const res = await request(`${_apiBase}${_apiProducts}/${id}`);
		return res
	}

	const getAllCategories = async () => {
		const res = await request(`${_apiBase}${_apiProducts}${_apiCategories}`);
		return res
	}

	const getProductsOfCategory = async (selectedCategory) => {
		const res = await request(`${_apiBase}${_apiProducts}${_apiCategory}/${selectedCategory}`);
		return res
	}

	const getAllUsers = async () => {
		const res = await request(`${_apiBase}${_apiUsers}?limit=100`);
		return res
	}

	const getAllPosts = async () => {
		const res = await request(`${_apiBase}${_apiPosts}?limit=150`);
		return res
	}

	return { 
		clearError,
		process,
		setProcess, 
		getAllProducts,
		getSingleProduct,
		getAllCategories,
		getProductsOfCategory,
		getAllUsers,
		getAllPosts
	}
}

export default useStore
;