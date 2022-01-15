import React, {useState} from 'react'
import Addform from './Addform';





function FormList() {

    const [names, setNames] = useState ([
        {firstname:'Lipika', lastname:'Panigrahi', age:31, id:1},
        {firstname:'Bithika', lastname:'Sarangi', age:28, id:2},
        {firstname:'Bhabatosh', lastname:'Pani', age:30, id:3}
    ]);
    const [forms,setForms] = useState([]);

    
    const deleteForm = (id) => {
        console.log(id);
        const updatedForms = forms.filter((form, index) =>{
         return index !== id
        });
        setForms(updatedForms);
       }
   



    return (
        
        <div className="form-list">
            {
                names.map(name => {
                   return (
                   <div  className='form-item' key={name.id}> 
                  <p>Firstname:{name.firstname}</p>  
                  <p>Lastname: {name.lastname} </p> 
                  <button >Delete Form</button> 
                    
                 </div>
                    )
               

                })
                }
            
            
         
        </div>
    )
}
<Addform />

export default FormList;
