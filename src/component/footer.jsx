import React from "react";

function Footer(){
    const date = new Date().getFullYear();

    return (<footer> <p>copyright &copy; {date}</p> </footer>);
}

export default Footer