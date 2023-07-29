import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

// Define the type for the API response data
type ApiResponse<T> = {
	data: T | null;
	loading: boolean;
	error: string | null;
};

// Create the custom hook
function useGetRequest<T>(url: string): ApiResponse<T> {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			try {
				const response: AxiosResponse<T> = await axios.get(url);
				if (isMounted) {
					setData(response.data);
					setLoading(false);
				}
			} catch (error) {
				if (isMounted) {
					setError("Error fetching data.");
					setLoading(false);
				}
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, [url]);

	return { data, loading, error };
}

export default useGetRequest;
