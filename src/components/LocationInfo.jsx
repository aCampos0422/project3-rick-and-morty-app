import './style/LocationInfo.css'


const LocationInfo = ({location}) => {



  return (

    <article className='location__global'>
      <section className='location__info'>
        <h2 className='location__name'>{location?.name}</h2>
          <div>
              <ul className='location__list'>
                  <li><span className='location__list-title'>Type:</span> <br /> <span className='location__list-content'> {location?.type} </span> </li>
                  <li><span className='location__list-title'>Dimension:</span> <br /> <span className='location__list-content'> {location?.dimension} </span> </li>
                  <li><span className='location__list-title'>Population:</span> <br /> <span className='location__list-content'> {location?.residents.length} Residents </span></li>
              </ul>
          </div>
      </section>
        
    </article>
  )
}

export default LocationInfo
