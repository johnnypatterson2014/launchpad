import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>

            <li>
              <a href="https://github.com/johnnypatterson2014/JP-AGT-002-multi-agent-crewai-basic" target="_blank">source<span className="newWindow6"></span></a>
            </li>

          </ul>
        </div>

      </div>


      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-AGT-002-multi-agent-crewai-basic</h1>

          <p>
            This project uses crewai to create a team of agents to write a blog article and tweet about the topic: "Report on Agentic Behavior"
          </p>

          <p>
            [add diagram]
          </p>

        </article>


      </div>

    </div>

  );
}
