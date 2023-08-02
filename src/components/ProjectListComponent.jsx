import React from 'react'

const ProjectList = ({ data }) => {
  return (
    <div className='cards'>
    {data.map((el,index) => <div className='card'>
    <img className='img' 
        key={index}
        src={el.img} alt={el.category}/>
        </div>)}
    </div>
  )
}

export default ProjectList;

