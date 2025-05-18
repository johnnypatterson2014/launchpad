import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>

            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-005-AWS-vercel-frontend" target="_blank">frontend<span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-005-AWS-fastapi-backend" target="_blank">backend<span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>


      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-LRN-005-AWS</h1>

          <p>
            This is an example full-stack app with integration to an AWS S3 bucket to store pdf files.
          </p>

        </article>


      </div>

    </div>

  );
}
