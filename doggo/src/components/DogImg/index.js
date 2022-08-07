import { useState } from "react";
import axios from 'axios';
import style from '../DogImg/style.css'
function DogImg(props) {
    const [dogImg, setDogImg] = useState();
    axios.get(`https://dog.ceo/api/breed/${props.name}/images`)
        .then(res => {
            const dogs = res.data.message[0]
            setDogImg(dogs)
        })
    return (
        <img src={dogImg} alt="dog-img"></img>
    );
}

export default DogImg
    ;