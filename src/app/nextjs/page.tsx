import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-002-nextjs" target="_blank">source <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>

      <div className="markdown-body">
        <article className="markdown-body-content">
          <h2>Example Next.js App</h2>

          <p>This project is based on a tutorial from next.js. This app shows how to create a dashboard with SQL integration (postgres), routing, and components that read data asynchronously.

            Link to tutorial: <a href="https://nextjs.org/learn/dashboard-app">https://nextjs.org/learn/dashboard-app</a>
          </p>

          <p>Typescript</p>
          <ul>
            <li>TypeScript is a way of writing JavaScript a bit more structured than pure JavaScript. This variant is
              used in many modern web applications and has been adopted by LangChain and LlamaIndex for their
              JavaScript versions.</li>
          </ul>
          <p>NextJS</p>
          <ul>
            <li>is a React framework that makes it easier to create a web based UI</li>
            <li>it is simplified and optimized to create web applications (frontend UI)</li>
            <li>Next.js handles the tooling and configuration needed for React, and provides additional structure,
              features, and optimizations for your application.</li>
          </ul>
          <p>Vercel</p>
          <ul>
            <li>Vercel is a hosting service created by the creators of Next.js and specially designed to host
              applications of this framework</li>
            <li>vercel is designed to automatically deploy your nextjs app whenever you push changes to your git repo
            </li>
          </ul>
          <p>install npm first time:<br />
            npm install -g pnpm</p>
          <p>create example nextjs project from a template:<br />
            npx create-next-app@latest nextjs-dashboard --example "<a
              href="https://github.com/vercel/next-learn/tree/main/dashboard/starter-example">https://github.com/vercel/next-learn/tree/main/dashboard/starter-example</a>"
            --use-pnpm</p>
          <p>install the project's packages:<br />
            npm install</p>
          <p>run the dev server:<br />
            npm run dev</p>
          <p>Create a github repo and push code there.</p>
          <p>Create a Vercel account and deploy the git repo project there.<br />
            Vercel project: <a href="https://vercel.com/johnnys-projects-a3be4325/jp-lrn-002-nextjs"
              rel="nofollow">https://vercel.com/johnnys-projects-a3be4325/jp-lrn-002-nextjs</a></p>
          <p>Running app is here:<br />
            <a href="https://jp-lrn-002-nextjs.vercel.app/" rel="nofollow">https://jp-lrn-002-nextjs.vercel.app/</a>
          </p>
          <p>View postgres db tables here:<br />
            <a href="https://console.neon.tech/app/projects/floral-truth-39027350/branches/br-polished-lab-a66o8rdi/tables?database=neondb"
              rel="nofollow">https://console.neon.tech/app/projects/floral-truth-39027350/branches/br-polished-lab-a66o8rdi/tables?database=neondb</a>
          </p>
          <h2>Next.js tutorial</h2>
          <p><a href="https://nextjs.org/learn/dashboard-app/" rel="nofollow">https://nextjs.org/learn/dashboard-app/</a>
          </p>
          <h3>Chapter 1: getting started</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/getting-started"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/getting-started</a></p>
          <ul>
            <li>
              <p>create sample next.js app</p>
            </li>
            <li>
              <p>/app - contains all routes, components, logic, etc.</p>
            </li>
            <li>
              <pre className="notranslate"><code className="notranslate">/lib					- contains reusable utility functions
              </code></pre>
            </li>
            <li>
              <pre className="notranslate"><code className="notranslate">/ui					- contains all ui components
              </code></pre>
            </li>
            <li>
              <p>/public - static assets (images, etc)</p>
            </li>
            <li>
              <p>.config - config files in root folder</p>
            </li>
          </ul>
          <p>Example class to represent object data returned from the db:</p>
          <ul>
            <li>/app/lib/definitions.ts</li>
          </ul>
          <h3>Chapter 2: CSS</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/css-styling"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/css-styling</a></p>
          <ul>
            <li>global css styles: /app/ui/global.css</li>
            <li>import into your root layout: /app/layout.tsx (applied to all pages by default)</li>
            <li>project uses tailwind css framework. <a href="https://tailwindcss.com/"
              rel="nofollow">https://tailwindcss.com/</a></li>
            <li>css modules can also be used: <a href="https://nextjs.org/docs/app/getting-started/css"
              rel="nofollow">https://nextjs.org/docs/app/getting-started/css</a></li>
            <li>clsx - another css tool (makes it easy to toggle class names). <a
              href="https://www.npmjs.com/package/clsx" rel="nofollow">https://www.npmjs.com/package/clsx</a></li>
          </ul>
          <h3>Chapter 3: Optimizing fonts and images</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/optimizing-fonts-images"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/optimizing-fonts-images</a></p>
          <h3>Chapter 4: Creating layouts and pages</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages</a></p>
          <ul>
            <li>nested routing: Next.js uses file-system routing where folders are used to create nested routes.</li>
            <li>eg. /app/page.tsx</li>
            <li>
              <pre className="notranslate"><code className="notranslate">    /layout.tsx
              </code></pre>
            </li>
            <li>
              <pre className="notranslate"><code className="notranslate">    /dashboard/page.tsx
              </code></pre>
            </li>
            <li>
              <pre className="notranslate"><code className="notranslate">              /layout.tsx (optional)
              </code></pre>
            </li>
            <li>
              <pre className="notranslate"><code className="notranslate">              /customers/page.tsx
              </code></pre>
            </li>
            <li>
              <pre className="notranslate"><code className="notranslate">              /invoices/page.tsx
              </code></pre>
            </li>
          </ul>
          <h3>Chapter 5: Navigating Between Pages</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/navigating-between-pages"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/navigating-between-pages</a></p>
          <h3>Chapter 6: Setting Up Your Database</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/setting-up-your-database"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/setting-up-your-database</a></p>
          <ul>
            <li>deploy next.js app to vercel (just need to link to github repo)</li>
            <li>use vercel to create a db integration (eg. postgres)</li>
            <li>seed db using a script</li>
            <li>example to manually execute an sql query: /app/query/route.ts</li>
          </ul>
          <h3>Chapter 7: Fetching Data</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/fetching-data"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/fetching-data</a></p>
          <ul>
            <li>use react server components to fetch data</li>
            <li>for our example, we wil use the postgres.js library: <a
              href="https://github.com/porsager/postgres">https://github.com/porsager/postgres</a></li>
            <li>see example:</li>
            <li>
              <pre className="notranslate"><code className="notranslate"> /app/lib/data.ts - functions to make sql queries
              </code></pre>
            </li>
            <li>
              <pre className="notranslate"><code className="notranslate"> /app/dashboard/page.tsx - calls the sql functions and uses UI components to display the data
              </code></pre>
            </li>
            <li>
              <pre className="notranslate"><code className="notranslate"> /app/ui/dashboard/*.tsx - ui components to display the data
              </code></pre>
            </li>
          </ul>
          <p>Note: sql calls are not async. We will fix this.</p>
          <ul>
            <li>
              <pre className="notranslate"><code className="notranslate"> /app/dashboard/page.tsx: see line 13; fetchLatestInvoices() must wait for fetchRevenue() to finish first
              </code></pre>
            </li>
          </ul>
          <p>Parallel data fetching</p>
          <ul>
            <li>For example, in data.ts, we're using Promise.all() in the fetchCardData() function.</li>
            <li>problem: what if one data call takes a lot longer than the others?</li>
          </ul>
          <p>Note: The dashboard is static, so any data updates will not be reflected on your application. We will fix
            this.</p>
          <h3>Chapter 8: Static and Dynamic Rendering</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering</a></p>
          <h3>Chapter 9: Streaming</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/streaming"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/streaming</a></p>
          <p>Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and
            progressively stream them from the server to the client as they become ready.</p>
          <p>By streaming, you can prevent slow data requests from blocking your whole page. This allows the user to see
            and interact with parts of the page without waiting for all the data to load before any UI can be shown to
            the user.</p>
          <p>Streaming works well with React's component model, as each component can be considered a chunk.</p>
          <p>There are two ways you implement streaming in Next.js:</p>
          <ul>
            <li>
              <p>At the page level, with the loading.tsx file (which creates for you).</p>
            </li>
            <li>
              <p>At the component level, with for more granular control.</p>
            </li>
            <li>
              <p>loading.tsx is a special Next.js file built on top of React Suspense. It allows you to create
                fallback UI to show as a replacement while page content loads.</p>
            </li>
            <li>
              <p>Since is static, it's shown immediately. The user can interact with while the dynamic content is
                loading.</p>
            </li>
            <li>
              <p>The user doesn't have to wait for the page to finish loading before navigating away (this is called
                interruptable navigation).</p>
            </li>
          </ul>
          <p>Adding loading skeletons</p>
          <ul>
            <li>A loading skeleton is a simplified version of the UI. Many websites use them as a placeholder (or
              fallback) to indicate to users that the content is loading. Any UI you add in loading.tsx will be
              embedded as part of the static file, and sent first. Then, the rest of the dynamic content will be
              streamed from the server to the client.</li>
          </ul>
          <p>Create a new folder called /(overview) inside the dashboard folder. Then, move your loading.tsx and page.tsx
            files inside the folder: Now, the loading.tsx file will only apply to your dashboard overview page (and not
            the child pages invoices and customers).</p>
          <p>Route groups allow you to organize files into logical groups without affecting the URL path structure. When
            you create a new folder using parentheses (), the name won't be included in the URL path. So
            /dashboard/(overview)/page.tsx becomes /dashboard.</p>
          <p>Streaming a component</p>
          <ul>
            <li>So far, you're streaming a whole page. But you can also be more granular and stream specific components
              using React Suspense.</li>
            <li>Suspense allows you to defer rendering parts of your application until some condition is met (e.g. data
              is loaded). You can wrap your dynamic components in Suspense. Then, pass it a fallback component to show
              while the dynamic component loads.</li>
          </ul>
          <p>Grouping components</p>
          <h3>Chapter 10: Partial Prerendering</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/partial-prerendering"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/partial-prerendering</a></p>
          <h3>Chapter 11: Adding Search and Pagination</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/adding-search-and-pagination"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/adding-search-and-pagination</a></p>
          <p>Here's a quick overview of the implementation steps:</p>
          <ul>
            <li>Capture the user's input.</li>
            <li>Update the URL with the search params.</li>
            <li>Keep the URL in sync with the input field.</li>
            <li>Update the table to reflect the search query.</li>
          </ul>
          <p>see files:</p>
          <ul>
            <li>/app/dashboard/invoices/page.tsx</li>
            <li>/app/ui/search.tsx</li>
            <li>/app/ui/invoices/pagination.tsx</li>
          </ul>
          <h3>Chapter 12: Mutating Data</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/mutating-data"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/mutating-data</a></p>
          <p>React Server Actions allow you to run asynchronous code directly on the server. They eliminate the need to
            create API endpoints to mutate your data. Instead, you write asynchronous functions that execute on the
            server and can be invoked from your Client or Server Components.</p>
          <p>Here are the steps you'll take to create a new invoice:</p>
          <ul>
            <li>Create a form to capture the user's input.</li>
            <li>Create a Server Action and invoke it from the form.</li>
            <li>Inside your Server Action, extract the data from the formData object.</li>
            <li>Validate and prepare the data to be inserted into your database.</li>
            <li>Insert the data and handle any errors.</li>
            <li>Revalidate the cache and redirect the user back to invoices page.</li>
          </ul>
          <p>These are the steps you'll take to update an invoice:</p>
          <ul>
            <li>Create a new dynamic route segment with the invoice id.</li>
            <li>Read the invoice id from the page params.</li>
            <li>Fetch the specific invoice from your database.</li>
            <li>Pre-populate the form with the invoice data.</li>
            <li>Update the invoice data in your database.</li>
          </ul>
          <h3>Chapter 13: Handling Errors</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/error-handling"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/error-handling</a></p>
          <h3>Chapter 14: Improving Accessibility</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/improving-accessibility"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/improving-accessibility</a></p>
          <h3>Chapter 15: Adding Authentication</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/adding-authentication"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/adding-authentication</a></p>
          <p>We will use NextAuth.js for authentication: <a href="https://authjs.dev/reference/nextjs"
            rel="nofollow">https://authjs.dev/reference/nextjs</a></p>
          <h3>Chapter 16: Adding Metadata</h3>
          <p><a href="https://nextjs.org/learn/dashboard-app/adding-metadata"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/adding-metadata</a></p>
          <p>Learn more: <a href="https://nextjs.org/learn/dashboard-app/next-steps"
            rel="nofollow">https://nextjs.org/learn/dashboard-app/next-steps</a></p>
        </article>
      </div>

    </div>

  );
}
