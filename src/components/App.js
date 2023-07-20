import React, {useEffect, useState} from "react";

function App()
{

    const [pic, setPic] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            console.log("data: ", data)
            setPic(data)
        });
    }, []);

    if(!pic){
        return(<p>Loading...</p>);
    }

    return(
        <div>
            <img
            src={pic.message}
            alt="A Random Dog"
            />
        </div>
    );
}

export default App;