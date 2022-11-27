
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '.';


export const GifGrid = ({ category }) => {

    const { gifs, isLoading} = useFetchGifs( category );    

    
    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && <p>Cargando...</p>
            }
            
            <div className='card-grid'>
            {
                gifs.map( ( gif ) =>                  
                    
                   ( <GifGridItem {...gif} key={gif.id}/>)               
                )
            }
            </div>
           
        </>
    )
}
