import Card from './Card'

function Tours({tours,removeTour}){
   return(
    <div className='container'>
        <div>
        <h1>Plan With Gaurav</h1>
        </div>
        <div className='cards'>
           {
            tours.map((tour)=>{
                return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                // ...tour passes the copy of whole object i.e. passes all data of single object (cloning)
            })
           }
        </div>
    </div>
   )
};

export default Tours;