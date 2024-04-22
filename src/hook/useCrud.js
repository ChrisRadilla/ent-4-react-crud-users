import { useState } from "react";
import axios from "axios";

const useCrud = (base) => {
    const [apiData, setApiData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const getApi = (path = 'users') => {
        setIsLoading(true);
        axios.get(`${base}${path}/`)
            .then(res => {
                setApiData(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setHasError(true);
                console.error("Error fetching data:", err);
            });
    };

    const postApi = (path, data) => {
        setIsLoading(true);
        axios.post(`${base}${path}/`, data)
            .then(res => {
                setApiData([...apiData, res.data]);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setHasError(true);
                console.error("Error creating data:", err);
            });
    };

    const deleteApi = (path, id) => {
        setIsLoading(true);
        axios.delete(`${base}${path}/${id}/`)
            .then(() => {
                setApiData(apiData.filter(user => user.id !== id));
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setHasError(true);
                console.error("Error deleting data:", err);
            });
    };

    const patchApi = (path, data, id) => {
        setIsLoading(true);
        axios.patch(`${base}${path}/${id}/`, data)
            .then(res => {
                setApiData(apiData.map((user) => user.id === id ? res.data : user));
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setHasError(true);
                console.error("Error updating data:", err);
            });
    };

    return [apiData, getApi, postApi, deleteApi, patchApi, isLoading, hasError];
};

export default useCrud;
