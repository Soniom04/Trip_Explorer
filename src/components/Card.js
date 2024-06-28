import { useState } from 'react'

export default function Card({id,name,info,image,price,removeTour}){
    const [showMore,setShowMore] = useState(false)
    const card_desc = showMore ? info: `${info.substring(0,200)}...`
  
    function handleShowMore(){
        setShowMore(!showMore)
    }

    return (
        <div className='card'>
            <img src={image} className='card-image'></img>
            <div>
                <div className='card-details'>
                    <h4 className='card-price'>₹{price}</h4>
                    <h4 className='card-name'>{name}</h4>
                </div>
                <div className='card-desc'>
                    {card_desc}
                    <span onClick={handleShowMore}className='showMore'>{showMore?`showLess`:`ReadMore`}</span>
                </div>
                </div>
            <button className='card-btn' onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    )
}