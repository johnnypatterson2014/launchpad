import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="markdown-body">
        <article className="markdown-body-content">

          <h2>Links</h2>

          <div className="relative flex flex-col text-slate-300 rounded-lg bg-clip-border">
            <table className="text-left table-auto rounded-lg">
              <thead>
                <tr>
                  <th className="p-4 border-b border-slate-600 bg-slate-700">
                    <p className="text-sm font-normal leading-none text-slate-300">
                      name
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-600 bg-slate-700">
                    <p className="text-sm font-normal leading-none text-slate-300">
                      description
                    </p>
                  </th>
                  <th className="p-4 border-b border-slate-600 bg-slate-700">
                    <p className="text-sm font-normal leading-none text-slate-300">
                      link
                    </p>
                  </th>

                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-700">
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                      LangSmith account
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                      View a trace of the calls to/from the LLM.
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                      <a className="text-sm text-slate-300" href="https://smith.langchain.com/" target="_blank">https://smith.langchain.com/</a>
                    </p>
                  </td>
                </tr>



              </tbody>
            </table>
          </div>




        </article>
      </div>


    </div>

  );
}
