import React from "react";

function Resume() {
  return (
    <div className ="page-wrap">
      <header className="flex">
				<nav aria-label="website" className="site-nav flex">
				
					<ul>
						<li><a href="/portfolio" className="nav-link">Portfolio</a></li>
						<li>
							<p><span className="visually-hidden"></span>Resume</p>
						</li>
						<li><a href="#contact" className="nav-link">Contact</a></li>
					</ul>
				</nav>
		
			</header>
      <main>
      <section className="resume">
        <h1 className="heading-1">Resume</h1>
        <a className="link" href="https://docs.google.com/document/d/1bGUew759nO1Lal1_hKLt6LBa3rYodvisNIqNp-Pjs3A/edit#heading=h.ymi089liagec">
          Download a copy from Google Docs
        </a>
        <div class="flex flex-wrap-center">
          <div>
            <h2 className="heading-2">Ankita Bhatnagar</h2>
            <p>Full Stack Web Developer </p>
          </div>
          <div class="resume-contact">
            <ul>
              <li>Helsinki, Finland</li>
              <li>+358 449718916</li>
              <li>
                <a className="link" href="mailto:ankita.bhatnagar@outlook.com">
                  ankita.bhatnagar@outlook.com
                </a>
              </li>
              <li>
                <a className="link" href="https://ankita-projects.github.io/">ankita-projects.github.io</a>
              </li>
            </ul>
          </div>
        </div>
        <h3>Contents</h3>
        <nav aria-label="content">
						<ul class="table-of-contents">
							<li><a href="#education" class="nav-link">Education</a></li>
							<li>
								<a href="#experience" class="nav-link">Experience</a>
							</li>
							<li><a href="#skills" class="nav-link">Skills</a></li>
						</ul>
					</nav>
      </section>
      </main>
    </div>
  );
}

export default Resume;
