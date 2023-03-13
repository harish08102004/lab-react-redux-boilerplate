import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./LikeReducer";

function LikeCounter() {
    const likes = useSelector((state) => state.likes.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={() => dispatch(increment())}>Like</button>
            <button onClick={() => dispatch(decrement())}>Unlike</button>
        </div>
);
}

export default LikeCounter;