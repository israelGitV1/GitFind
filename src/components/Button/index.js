import React from "react";
import { ButtonContent } from "./styles";

export default function Button ({onClick, name}){
    return(
        <ButtonContent onClick={onClick}>
            <button>{name}</button>
        </ButtonContent>
    )
};