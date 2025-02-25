import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragon Ball' ])

    const onAddCategory = ( newCategory ) => {
        
        if( categories.includes(newCategory) ) return
        
        //Hace un callback 
        setCategories( (newCat) => [ newCategory, ...newCat ] )

    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ event => onAddCategory(event) }
                
            />

            { 
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }/>
                    ))
            }

                {/* Gif Items */}
        </>
    )
}