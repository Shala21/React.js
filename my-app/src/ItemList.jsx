import React from "react";

function ItemList({items}) {
    return(
        <ul>
            {items.map((item, index) => (

                 // Usa index come key solo se gli elementi non hanno un ID unico
                  <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ItemList;