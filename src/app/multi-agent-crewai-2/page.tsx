import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>

            <li>
              <a href="https://github.com/johnnypatterson2014/JP-AGT-003-crewai-level-3-app-frontend" target="_blank">frontend<span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-AGT-003-crewai-level-3-app" target="_blank">backend<span className="newWindow6"></span></a>
            </li>

          </ul>
        </div>

      </div>


      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-AGT-003-crewai-level-3-app</h1>

          <p>
            This project shows how to use crewai to run agents to get 3 recent blog posts and 3 recent youtube links based on a technology and business area of your choice.
          </p>

          <p>
            [add diagram]
          </p>

        </article>


      </div>

    </div>

  );
}
