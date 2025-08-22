import React from "react";
import Feedback from "./feedback";
import Mostpopular from "./mostpopular";
import Newproduct from "./newproduct";
import Background3 from "./Background3";
import Background4 from "./Background4";
import Herosection from "./herosection";
import Imagesection from "./imagesection";


export default function Home() {
    return (
        <>
            <Herosection />
            <Mostpopular />
            <Imagesection />
            <Newproduct />
            <Feedback />
            <Background3 />
            <Background4 />
        </>
    );
}