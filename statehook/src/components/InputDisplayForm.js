import React, {useState} from 'react'

const InputDisplayForm = (addForm) =>  {
    const [name, setName]= useState({firstName:'', lastName:''})
   const handleSubmit = (e) =>{
     e.preventDefault();
     addForm(name)
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">Firstname:</label>
                    <input type="text" value={name.firstName} onChange= {(e )=> setName({ ...name,firstName:e.target.value})}  />

                    <label htmlFor="lastname">Lastname:</label>
                    <input type="text" value={name.lastName} onChange= {( e)=> setName({ ...name,lastName:e.target.value})} />
                    <button >Submit</button>
                     <h4>
                         First name : {name.firstName}
                     </h4>
                     <h4>
                         Last name : {name.lastName}
                     </h4>


                  

            </form>
        </div>
    )
}

export default InputDisplayForm
