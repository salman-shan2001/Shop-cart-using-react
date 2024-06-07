import React, { useState } from 'react'
import Navebar from './Navebar'

const ViewLap = () => {
    const [data, changedata] = useState(
        [
            { "name": "MSI Modern 14 Intel Core i5", "prize": 20000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/f/y/-original-imagvyw9hqh6srxw.jpeg?q=70" },
            { "name": "ASUS TUF Gaming F15", "prize": 30000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/v/h/-original-imagqbudxbf9djaz.jpeg?q=70" },
            { "name": "ZEBRONICS Pro Series Y Intel Core i5", "prize": 40000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/v/h/-original-imagqbudxbf9djaz.jpeg?q=70" },
            { "name": "Acer Aspire 7 Intel Core i5", "prize": 50000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/v/h/-original-imagqbudxbf9djaz.jpeg?q=70" },
            { "name": "Infinix Inbook Y2 Plus Intel", "prize": 60000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/r/k/o/-original-imagqkqmf9zzsz5y.jpeg?q=70" },
            { "name": "MSI Modern 14 Intel Core i5", "prize": 20000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/n/f/y/-original-imagvyw9hqh6srxw.jpeg?q=70" },
            { "name": "ASUS TUF Gaming F15", "prize": 30000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/v/h/-original-imagqbudxbf9djaz.jpeg?q=70" },
            { "name": "ZEBRONICS Pro Series Y Intel Core i5", "prize": 40000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/v/h/-original-imagqbudxbf9djaz.jpeg?q=70" },
            { "name": "Acer Aspire 7 Intel Core i5", "prize": 50000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/g/v/h/-original-imagqbudxbf9djaz.jpeg?q=70" },
            { "name": "Infinix Inbook Y2 Plus Intel", "prize": 60000, "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/r/k/o/-original-imagqkqmf9zzsz5y.jpeg?q=70" }
        ]
    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Navebar/>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {
                            data.map(
                                (value, index) => {
                                    return <div className="row g-3">
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img src={value.img} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <a href="#" class="btn btn-primary">{value.prize}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewLap;
