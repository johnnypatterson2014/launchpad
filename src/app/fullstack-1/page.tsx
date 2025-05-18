import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-004-fullstack-next-fastapi-postgres" target="_blank">readme<span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-004-vercel" target="_blank">frontend<span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-004-render" target="_blank">backend<span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>


      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-LRN-004-fullstack-next-fastapi-postgres</h1>

          <p>
            This is an example full-stack app. Simple CRUD app for a todo list. Backend uses fastAPI and postgres deployed on render.com. Frontend uses nextjs deployed on vercel.
          </p>

          <h2>backend</h2>

          <code className="preformatted">

            // create virtual env
            python -m venv .venv

            // activate virtual env 
            .venv\Scripts\activate

            // install dependencies 
            pip install -r requirements.txt

            // run the backend server (for local dev)
            uvicorn main:app --reload

            // in the cloud, use this instead:
            uvicorn main:app --host 0.0.0.0 --port 8000

            // view on localhost
            http://127.0.0.1:8000/docs

          </code>

          <h2>database</h2>
          <code className="notranslate">install postgresSQL

            // setup alembic
            alembic init alembic
            alembic revision -m "create todos table"

            // connect to db in terminal
            psql -d tutorial
            CREATE USER myuser WITH PASSWORD 'pass082724';
            GRANT ALL PRIVILEGES ON DATABASE tutorial TO myuser;
            GRANT ALL PRIVILEGES ON SCHEMA public TO myuser;
            \q    // to quit

            // run the db migration
            alembic upgrade head

            // verify in terminal:
            psql tutorial
            \dt
            select * from todos
            \q
          </code>
          <p>Render.com postgres settings: see .env file</p>
          <p>deployed to render.com:<br />
            <a href="https://jp-lrn-004-render.onrender.com/docs"
              rel="nofollow">https://jp-lrn-004-render.onrender.com/docs</a>
          </p>

          <h2>frontend</h2>
          <code className="notranslate">// install
            npm ci

            // run server
            npm run dev

            // view on localhost
            http://localhost:3000

            // deployed to vercel
            https://jp-lrn-004-vercel.vercel.app/

          </code>
        </article>
      </div>



    </div>

  );
}
