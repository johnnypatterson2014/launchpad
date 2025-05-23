import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./github-markdown.min.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Launchpad",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>

        <div className="bg-base-100 drawer mx-auto max-w-[100rem] lg:drawer-open">
          <input id="drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">


            {/* <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

              <div className="breadcrumbs text-sm">
                <ul>
                  <li><a>Home</a></li>
                  <li><a>Documents</a></li>
                  <li>Add Document</li>
                </ul>
              </div>

            </div> */}



            <div className="relative max-w-[100vw] p-0">


              {children}

            </div>
          </div>


          <div className="drawer-side z-40">
            <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>

            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-1">

              {/* Sidebar content here */}


              <div className="text-2xl font-semibold">
                launchpad
              </div>

              <ul className="menu bg-base-200 rounded-box w-56 text-md">

                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/links'}>links</Link></li>
                <li><Link href={'/tech-papers'}>technical papers</Link></li>
                <li><Link href={'/glossary'}>glossary</Link></li>
                <li>
                  <details>
                    <summary>GenAI Bootcamp</summary>
                    <ul>
                      <li><Link href={'/bootcamp1-1'}>sample python scripts</Link></li>
                      <li><Link href={'/nextjs'}>next.js tutorial</Link></li>
                      <li><Link href={'/llama'}>llamaIndex tutorial</Link></li>
                      <li><Link href={'/fullstack-1'}>fullstack render vercel</Link></li>
                      <li><Link href={'/fullstack-2'}>fullstack using AWS DB</Link></li>
                      <li><Link href={'/fullstack-3'}>fullstack RAG with PDF in AWS</Link></li>
                      <li><Link href={'/nextjs-2'}>nextjs RAG PDF in AWS (customized UI)</Link></li>
                      <li><Link href={'/multi-agent-langgraph'}>multi-agent langraph</Link></li>
                      <li><Link href={'/multi-agent-crewai'}>multi-agent crewai basic</Link></li>
                      <li><Link href={'/multi-agent-crewai-2'}>multi-agent crewai level 3</Link></li>
                    </ul>
                  </details>
                </li>

                <li>
                  <details>
                    <summary>Agentic AI Bootcamp</summary>
                    <ul>
                      <li><Link href={'/temp'}>temp</Link></li>

                    </ul>
                  </details>
                </li>

                <li>
                  <details open>
                    <summary>Java</summary>
                    <ul>
                      <li><Link href={'/spring-boot'}>sample spring boot app</Link></li>
                    </ul>
                    <ul>
                      <li><Link href={'/spring-ai'}>sample spring-ai app</Link></li>
                    </ul>
                  </details>
                </li>

              </ul>

            </ul>



          </div>


        </div>





      </body>
    </html>
  );
}
