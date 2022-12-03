import React from "react";
import Card from "./Card";
import data from '../Pdata'
function Projects() {

  return (
    <section id="projects" className="slideanim">
      <div >
        <h3 className="sec-topic"><u>Projects</u></h3>

        {data.map(noteItem => (

          <Card
            name={noteItem.name}
            techStack={noteItem.techStach}
            link={noteItem.link}
          />

        ))}


      </div>

    </section>
  )

}
export default Projects