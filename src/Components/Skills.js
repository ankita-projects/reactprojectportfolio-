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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <h1>Front End</h1>
          {projects.skills.map((skill) => (
            <div key={skill.id} className="p-2 sm:w-1/2 w-2/5">
              <div className="bg-white rounded flex p-1 object-fit: contain;">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
										<title>{skill.title}</title>
										<path d={skill.d}></path>
									</svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
