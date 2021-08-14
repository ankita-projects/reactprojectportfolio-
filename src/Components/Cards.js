import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import projects from "../data";

function Cards() {
  projects.projects.map((project) => console.log(project.image));
  return (
    <div id="parent">
      <section id="projects" className="text-gray-200 bg-yellow-50 body-font">
       
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className=" flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4 text-black" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Portfolio
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
            I'm a fullstack developer based in Helsinki.I develope responsive web applications with Reactjs for frontend and express, nodejs, and PHP for backend. I have also experince in working with mongoDB, mySQL databases. 
            </p>
          </div>
        </div>

        <div className="card-container">
      
        {projects.projects.map((project) => (
                   
              <div className="my-1/2 px-1/2 w-auto md:w-9/12 lg:my-4 lg:px-4 lg:w-102">
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <a href={project.link}>
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src={project.image}
                    />
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <div className="heading">
                      <p className=" text-opacity-100 text-black">
                        {project. description}
                      </p>

                      <h1 className="text-lg">
                            <p className="text-yellow-700 text-opacity-100">
                        {project.subtitle}
                      </p>
                      <a href={project.github}>
                      <p className="text-yellow-700 text-opacity-100">
                        Source Code
                      </p>
                      </a>
                       
                      </h1>
                      </div>
                    </header>

                  
                  </a>
                </article>
              </div>
              
       
              
        ))}
     
        </div>
      </section>

    </div>
  );
}
export default Cards;
