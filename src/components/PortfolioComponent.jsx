import React, { useState } from 'react'
import Toolbar from './ToolbarComponent'
import ProjectList from './ProjectListComponent'
import { data } from './data'

const Portfolio = () => {
  const [active,setActive] = useState("All");
  
  const onSelectFilter = (filter) => {
    setActive(filter.target.name);
  }

  const finalData = active === "All" ? data : data.filter(({ category }) => category === active)
    
    return (
    <>
      <Toolbar
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected={active}
      onSelectFilter={onSelectFilter}/>
      <ProjectList data = {finalData} />
      </>
      )
    }

    export default Portfolio;
