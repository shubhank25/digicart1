import { useEffect, useState } from "react";
import app_config from "../config";

const Search = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = app_config.api_url;

    const fetchProductData = () => {

        fetch(url + '/apple/getall')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProductList(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchProductData();
    }, [])


    const renderProducts = () => {
        if (!loading) {
            return productList.map((product, index) => {
                return (
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <img className="img-fluid" src={url + '/' + product.thumbnail} />
                                </div>
                                <div className="col-md-4">
                                    <h2>{product.name}</h2>
                                    <p>{product.type}</p>
                                </div>
                                <div className="col-md-2">
                                    <h1>{product.price} /- only</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div>
            <h1>Search Product Here</h1>

            <div className="container">

                {renderProducts()}
            </div>

        </div>
    )
}

export default Search;