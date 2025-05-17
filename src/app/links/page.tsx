import Image from "next/image";

export default function Home() {
  return (

    <div>
      <div className="h-4"></div>

      <h2 className="mt-5">Links</h2>

      <div className="mt-5 rounded-box border border-base-content/5 bg-base-100 max-w-none">
        <table className="table-md">
          {/* head */}
          <thead>
            <tr>
              <td>Name</td>
              <td>Link</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>View the request/response to OpenAI</td>
              <td>
                <a href="https://smith.langchain.com/">https://smith.langchain.com/ <span className="newWindow6"></span></a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>

  );
}
