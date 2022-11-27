import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue , setInputValue] = useState('');
    
    const onInputChange = ( event ) =>{       

        setInputValue( event.target.value );
    }

    const onEnter = ( event ) =>{       
        
        event.preventDefault();    
        
        if(inputValue.trim().length == 0) return;

        onNewCategory( inputValue.trim() );     

        setInputValue('');
    }

  return (
    <form action="" onSubmit={ onEnter }>
         <input type="text" value={ inputValue }  onChange={ onInputChange } placeholder="Buscar gifs"/>
    </form>
   
  )
}
