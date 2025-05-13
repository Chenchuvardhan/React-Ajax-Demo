import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import axios from "axios";
export function AjaxDemo() {
    const [product, setProduct] = useState({ title: "", rating: { rate: 0, ratings: 0, reviews: 0 }, image: null, price: 0, offers: [] });
    function GetProduct() {
        // let http = new XMLHttpRequest();
        // http.open("GET", "oppomobile.json", true);
        // http.send();
        // http.onreadystatechange = function () {
        //     if (http.readyState == 4) {
        //         setProduct(JSON.parse(http.responseText));
        //     }
         axios.get('oppomobile.json')
            .then(response=>{
                console.log(response);
                setProduct(response.data);
            })
        }
    
    useEffect(() => {
        GetProduct();
    }, []);
    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>

                <div className="col-9">
                    <div className="fs-4 fw-bold">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded">
                            {product.rating.rate}  <span className="bi bi-star-fill"></span>
                        </span>
                        <span className="mx-2 text-secondary fs-6 fw-bold">{product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews} reviews</span>
                    </div>
                    <div>
                        <div className="mt-4">
                            <div className="fs-1 fw-bold">&#8377; {product.price.toLocaleString('en-in')}</div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h6 className="fw-bold mx-2">Available Offers</h6>
                        <ul>
                            {
                                product.offers.map((offer, index) => <li className="bi bi-tag-fill text-success my-2" key={index}>
                                    <span className="text-secondary">{offer}</span>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="mx-4">
                <button className="btn btn-warning btn-lg">ADD TO CART</button>&nbsp;&nbsp;&nbsp;
                <button className="btn btn-success btn-lg">BUY NOW</button>
            </div>
        </div>
    )
}