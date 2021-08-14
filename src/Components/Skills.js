import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import projects, { skills } from "../data";

function Skills() {
  console.log(projects.skills);
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I'm a fullstack developer based in Helsinki.I develope responsive web applications with Reactjs for frontend and express, nodejs, and PHP for backend. I have also experince in working with mongoDB, mySQL databases. 
          </p>
        </div>
        <div className ="icon">
        <div className="flex flex-wrap lg:w-1/2 sm:mx-auto sm:mb-2 -mx-2">
          {projects.skills.map((skill) => (
            <div key={skill.id} className="p-2 sm:w-1/10 w-1/6">
              <main class="hexagon-container">
                <div class="hexagon color-sass">
                  <svg
                    aria-labelledby="simpleicons-sass-icon"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={skill.d}></path>
                  </svg>
                  {skill.title}
                </div>
               
              </main>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
