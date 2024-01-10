import React,{useState} from "react";

const ImageCorousel = ({images}) => {
const [currentState, setCurrentState] = useState(0)

const handleOnNextState = () => {
    if (currentState === images.length-1) {
        setCurrentState(0);
    }
    else {
        setCurrentState(currentState+1);
    }
}

const handleOnPreviousState = () => {
    if (currentState===0 ){
        setCurrentState(images.length-1);
    }
    else {
        setCurrentState(currentState-1)
    }
}
 


return (
    <div>
        <img src = {images[currentState].url}
        alt = {images[currentState].alt}
        width = {600}
        height = {500}/>
        <button onClick = {handleOnPreviousState}>previous</button>
        <button onClick = {handleOnNextState}>next</button>
    </div>
)
}
export default ImageCorousel;