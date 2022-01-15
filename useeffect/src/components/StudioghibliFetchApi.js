import React, {useState, useEffect} from 'react'

const StudioghibliFetchApi = () => {

    const [movies,setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch("https://ghibliapi.herokuapp.com/films");
        // const data =  await response.json();
        // console.log(data);
       setMovies (await response.json());

      
    }
    useEffect(() => {
        getMovies();
      },[]);

    return (
        <div>
           <div className='image'><img src='https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png'/></div>

           <div className="container-fluid mt-3">
               <div className="row text-center">
                   {
                       movies.map((movie) =>{
                           return(
                               <div className='d-flex float-left'>
                                   <div className="col-10 col-md-4 mt-3 " key={movie.id}>
                                   <div className='card p-2'>
                                   <div className='d-flex align-items-center float-left'>
                                   <div className="ml-3 w-100">
                                   <h4 className="mb-0 mt-0 textLeft bg-info">{movie.title}</h4>
                                   <p className='content p-2 mt-2  d-flex  justify-content-between '>{movie.description}</p>
                                       </div>
                                   </div>

                                     </div>
                                   </div>
                               </div>
                           )
                       })
                   }
               </div>



            </div>           
        </div>
    )
}

export default StudioghibliFetchApi

