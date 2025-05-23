import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>

            <li>
              <a href="https://github.com/johnnypatterson2014/JP-JSAI-002-spring-ai-examples" target="_blank">source<span className="newWindow6"></span></a>
            </li>

          </ul>
        </div>

      </div>


      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-JSAI-002-spring-ai-examples</h1>

          <p>
            This is an example project using Spring Boot with Spring-AI. Uses docker compose to start up an instance of grafana, prometheus, loki and Tempo servers. Examples include RAG over PDF, chat with memory, structured output, image to text, and metrics.
          </p>

          <p>
            [add diagram]
          </p>

          <p>
            UI to test: <Link href={'/spring-ai/ui'}>/spring-ai/ui</Link>
          </p>


          <p>Spring Boot Application:</p>
          <ul>
            <li>
              <code><a href="http://localhost:8080" target="_blank">http://localhost:8080</a></code>
            </li>
            <li>
              <code><a href="http://localhost:8080/actuator" target="_blank">http://localhost:8080/actuator</a></code>
            </li>

          </ul>

          <p>Grafana:</p>
          <ul>
            <li>
              <code><a href="http://localhost:3000" target="_blank">http://localhost:3000</a></code>
            </li>
          </ul>

          <p>Prometheus:</p>
          <ul>
            <li>
              <code><a href="http://localhost:9090/metrics" target="_blank">http://localhost:9090/metrics</a></code>
            </li>
          </ul>

          <p>Loki:</p>
          <ul>
            <li>
              <code><a href="http://localhost:3100/ready" target="_blank">http://localhost:3100/ready</a></code>
            </li>
          </ul>

          <p>Tempo:</p>
          <ul>
            <li>
              <code><a href="http://localhost:3200" target="_blank">http://localhost:3200</a></code>
            </li>
          </ul>


        </article>


      </div>

    </div>

  );
}
