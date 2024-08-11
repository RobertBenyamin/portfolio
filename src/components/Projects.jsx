import React from "react";

const projects = [
  {
    name: "Todo App",
    image:
      "https://raw.githubusercontent.com/RobertBenyamin/portfolio/main/src/images/todo-app.png",
    deploy: "https://github.com/RobertBenyamin/todo_app/releases",
    github: "https://github.com/RobertBenyamin/todo_app",
  },
  {
    name: "Notes App",
    image:
      "https://raw.githubusercontent.com/RobertBenyamin/portfolio/main/src/images/notes-app.png",
    deploy: "https://robertbenyamin.github.io/Notes-App/",
    github: "https://github.com/RobertBenyamin/Notes-App",
  },
  {
    name: "Wisdom Repository",
    image:
      "https://raw.githubusercontent.com/RobertBenyamin/portfolio/main/src/images/wisdom-repository.png",
    deploy: "https://wisdom-repository-rose.vercel.app/",
    github: "https://github.com/RobertBenyamin/Wisdom-Repository",
  },
  {
    name: "Marmut - Music App",
    image:
      "https://raw.githubusercontent.com/RobertBenyamin/portfolio/main/src/images/marmut.png",
    deploy: "https://marmut-eight.vercel.app/",
    github: "https://github.com/RobertBenyamin/marmut",
  },
  {
    name: "NaviGo",
    image:
      "https://raw.githubusercontent.com/RobertBenyamin/portfolio/main/src/images/navigo.png",
    deploy: "https://navigo-web-drab.vercel.app/",
    github: "https://github.com/navigo-gemastik/navigo-web",
  },
  {
    name: "Grab Gourmand",
    image:
      "https://raw.githubusercontent.com/RobertBenyamin/portfolio/main/src/images/grab-gourmand.png",
    deploy: "https://angelhacks-fullstack.vercel.app/",
    github: "https://github.com/ekkymulia/angelhacks-fullstack",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="text-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="flex flex-row justify-between items-center p-4">
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors text-xl font-bold hover:text-yellow-500 hover:underline cursor-pointer"
                >
                  {project.name}
                </a>
                <a
                  href={project.github}
                  class="transition-colors duration-300 hover:text-yellow-500 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>github</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
