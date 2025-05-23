import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>

            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-007-nextjs-frontend" target="_blank">frontend<span className="newWindow6"></span></a>
            </li>

          </ul>
        </div>

      </div>


      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-LRN-007-nextjs-frontend</h1>

          <p>
            This project was an exercise to understand next.js better. Made customizations to add QA over pdf files in Amazon S3
          </p>

          <p>
            [add diagram]
          </p>

        </article>


      </div>

    </div>

  );
}
