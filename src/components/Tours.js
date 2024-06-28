import Card from './Card'
export default function Tours({tours,removeTour}){
    return(
        <div className='tour-container'>
          <div className='tour-heading-container'>
            <h2/>Plan With Love
          </div>
          <div className="card-container">{
            tours.map((tour) =>{
                return <Card {...tour} key={tour.id} removeTour={removeTour}/>
            })
          }
          </div>
      </div>
    )
}