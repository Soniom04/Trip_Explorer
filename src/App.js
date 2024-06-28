import Tours from './components/Tours';
import React,{useState} from 'react'
import data from './data'

const App = () => {

  const [tours,setTours] = useState(data)

  function removeTour(id){
    const new_tours = tours.filter(tour =>tour.id!==id)
    setTours(new_tours)
  }

  if(tours.length === 0){
    return(
      <div className='no-tour'>
        <h2 className='no-tour-heading'>Sorry!!...No Tours Left</h2>
        <button className='refresh-btn' onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return(
      <Tours tours={tours} removeTour={removeTour} className="App"/>
  )
};

export default App;
