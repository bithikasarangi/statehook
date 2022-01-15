import React from 'react'

export class StudioghibliClassComponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies:[]
            
        };
    }

    componentDidMount() {
        fetch(
           "https://ghibliapi.herokuapp.com/films")
           .then((res) => res.json())
           .then((json) => {
               this.setState({
                   movies: json });
                  
                })
            }
              
               
           
           
    
    render() {
        return (
            <div >
                <div className='image justify-content-center'><img src='https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png'/></div>

<div className="container-fluid mt-3 d-flex">
    <div className="row text-center d-flex">
        {
            this.state.movies.map((movie) =>{
                return(
                    <div className=' main d-flex'>
                        <div className="movie col-10 col-md-4 mt-3 " key={movie.id}>
                        <div className='card p-2'>
                        <div className='d-flex align-items-center float-left'>
                        <div className=" ml-3 w-100">
                        <h4 className=" title mb-0 mt-0 textLeft bg-info">{movie.title}</h4>
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
}

export default StudioghibliClassComponent
