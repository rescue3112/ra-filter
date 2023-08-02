import React from 'react'

const Toolbar = ({ filters, selected, onSelectFilter }) => {
return (
    <div className='filters'>
        {filters.map(el => (
        <a onClick={onSelectFilter} href='#a' className={selected === el ? "selected" : ""} name={el}>
            {el}
            </a>
        ))}
    </div>
 )
}

export default Toolbar;
