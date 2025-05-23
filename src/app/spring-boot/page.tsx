import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>

            <li>
              <a href="https://github.com/johnnypatterson2014/JP-SPR-001-survey" target="_blank">source<span className="newWindow6"></span></a>
            </li>

          </ul>
        </div>

      </div>


      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-SPR-001-survey</h1>

          <p>
            This is an example project using Spring Boot REST API with unit tests, integration tests, JPA repo, controller advice, etc.
          </p>

          <p>
            [add diagram]
          </p>

        </article>


      </div>

    </div>

  );
}
