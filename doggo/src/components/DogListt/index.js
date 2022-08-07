import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import DogImg from "../DogImg";
import style from "../DogListt/style.css"
function DogListt() {
    const [dogList, setDogList] = useState([])
    axios.get(`https://dog.ceo/api/breeds/list`)
        .then(res => {
            const dogs = res.data.message
            // console.log(dogs)
            setDogList(dogs)
        })
    return (
        <div>
            <div className="container">
                {
                    dogList
                        .map((dog, index) =>
                            <div key={index} className="item">
                                <Link to={`/dog/${dog}`}>
                                    <h3>{dog}</h3>
                                </Link>
                                <DogImg
                                    name={dog}
                                ></DogImg>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default DogListt;