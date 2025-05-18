import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-003-create-llama-nextjs" target="_blank">frontend<span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-003-create-llama-fastapi" target="_blank">backend<span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>



      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-LRN-003-create-llama-nextjs</h1>

          <p>
            This project is based on a tutorial from llamaIndex. It is a sample chat-bot project that creates a next.js app that integrates with llamaIndex to answer questions about uploaded pdf files.
          </p>

          <p><a href="https://www.npmjs.com/package/create-llama"
            rel="nofollow">https://www.npmjs.com/package/create-llama</a></p>
          <p>Steps</p>
          <ul>
            <li>
              <code className="notranslate"> npx create-llama@latest // run the example project template builder (choose nextjs instead of fastapi)
              </code>
            </li>
            <li>
              <code className="notranslate"> npm install // install the modules and packages
              </code>
            </li>
            <li>
              <code className="notranslate"> run wsl (windows shell for linux) since the generate script won't work in a regular cmd shell. You only need to do this once.
              </code>
            </li>
            <li>
              <code className="notranslate"> npm run generate // will convert any files in the ./data/ folder into embeddings and load into vector store. You only need to do this once, or anytime you add new files to the /data folder
              </code>
            </li>
            <li>
              <code className="notranslate"> npm run dev  // run the dev server
              </code>
            </li>
            <li>
              <code className="notranslate"> http://localhost:3000/     // dev server should be up and running
              </code>
            </li>
          </ul>
          <p>Deployed to Vercel:</p>
          <ul>
            <li><a href="https://jp-lrn-003-create-llama-nextjs.vercel.app/"
              rel="nofollow">https://jp-lrn-003-create-llama-nextjs.vercel.app/</a></li>
            <li>Note: you have to upload the .env file to create the required env variables needed by the app.</li>
          </ul>
          <p>--------------------------------------------</p>
          <div className="snippet-clipboard-content">
            <code className="notranslate">
              Route (app)                              Size     First Load JS
              ┌ ○ /                                    525 kB          630 kB
              ├ ○ /_not-found                          986 B           107 kB
              ├ ƒ /api/chat                            151 B           106 kB
              ├ ƒ /api/chat/config                     151 B           106 kB
              ├ ƒ /api/chat/config/llamacloud          151 B           106 kB
              ├ ƒ /api/chat/upload                     151 B           106 kB
              ├ ƒ /api/files/[...slug]                 151 B           106 kB
              └ ƒ /api/sandbox                         151 B           106 kB
              + First Load JS shared by all            106 kB
              ├ chunks/4bd1b696-d81b40d3908bb6c3.js  53 kB
              ├ chunks/517-581dde426bb2d8c2.js       50.6 kB
              └ other shared chunks (total)          2.01 kB
            </code>
          </div>
          <h2>code flow</h2>
          <p>load ui:</p>
          <ul>
            <li>/app/page.tsx</li>
            <li>ChatSection &gt; /app/components/chat-section.tsx; post will call api: /api/chat</li>
          </ul>
          <p>send request to api:</p>
          <ul>
            <li>POST <a href="http://localhost:3000/api/chat" rel="nofollow">http://localhost:3000/api/chat</a></li>
          </ul>
          <code className="notranslate">&123;
            "id": "ENcNQJuiW8Ah1yUS",
            "messages": [
            &123;
            "role": "user",
            "content": "what is the letter size?",
            "annotations": []
            &125;
            ]
            &125;
          </code>
          <p>Server side:</p>
          <ul>
            <li>/app/api/chat/route.ts &gt; export async function POST()</li>
            <li>retrieve document ids from the annotations of all messages (if any)</li>
            <li>create chat engine with index using the document ids</li>
            <li>retrieve user message content from Vercel/AI format</li>
            <li>Setup callbacks</li>
            <li>Calling LlamaIndex's ChatEngine to get a streamed response</li>
            <li>chatHistory.push</li>
            <li>return streamed data response</li>
          </ul>
          <p>example response:</p>
          <code className="notranslate">[&123;"type":"events","data":&123;"title":"Using tool: 'query_engine' with inputs: 'query: letter size'"&125;&125;]

            [&123;"type":"sources","data":&123;"nodes":[&123;"metadata":&123;"page_number":1,"total_pages":8,"file_path":"L:\\_github\\_JP_github\\JP-LRN-003-create-llama-nextjs\\data\\101.pdf","file_name":"101.pdf","private":"false"&125;,"id":"7ca1e3c7-1504-45d0-9541-0d4ca5e80440","score":0.5101614071113206,"url":"http://localhost:3000/api/files/data/101.pdf","text":"Domestic Mail Manual • Updated 7-9-23\n101101.1.2\nRetail Mail: Physical Standards for Letters, Cards, Flats, and Parcels\n101 Physical Standards\n1.0 Physical Standards for Letters\n1.1 Dimensional Standards for Letters\nLetter-size mail is the following:\na.Not less than 5 inches long, 3-1/2 inches high, and 0.007-inch thick.For\npieces more than 6 inches long or 4-1/4 inches high, the minimum thickness\nis 0.009.(Pieces not meeting the 0.009 thickness are subject to a\nnonmachinable surcharge under 1.2f.)b.Not more than 11-1/2 inches long, or more than 6-1/8 inches high, or more\nthan 1/4-inch thick.c.Not more than 3.5 ounces.(Charge flat-size prices for First-Class Mail\nletter-size pieces over 3.5 ounces.)d.Rectangular, with four square corners and parallel opposite sides.Letter-size, card-type mailpieces made of cardstock may have finished\ncorners that do not exceed a radius of 0.125 inch (1/8 inch).See\nExhibit 201.1.1.1.1.2 Nonmachinable Criteria\nA letter-size piece is nonmachinable if it has one or more of the following\ncharacteristics (see 601.1.1.2 to determine the length, height, top, and bottom of\na mailpiece):\na.Has an aspect ratio (length divided by height) of less than 1.3 or more than 2.5.b.Is polybagged, polywrapped, enclosed in any plastic material, or has an\nexterior surface made of a material that is not paper.Windows in envelopes\nmade of paper do not make mailpieces nonmachinable.Attachments\nallowable under applicable eligibility standards do not make mailpieces\nnonmachinable.c.Has clasps, strings, buttons, or similar closure devices."&125;,&123;"metadata":&123;"page_number":4,"total_pages":8,"file_path":"L:\\_github\\_JP_github\\JP-LRN-003-create-llama-nextjs\\data\\101.pdf","file_name":"101.pdf","private":"false"&125;,"id":"46b6a4b9-2968-4aec-a699-72898de356b4","score":0.4977104834856645,"url":"http://localhost:3000/api/files/data/101.pdf","text":"Ineligible cards are subject to letter-size pricing.6.2.2 Postcard Dimensions\nEach card and part of a double card claimed at card pricing must be the\nfollowing:\na.Rectangular.b.Not less than 3-1/2 inches high, 5 inches long, and 0.007 inch thick.c.Not more than 4-1/4 inches high, or more than 6 inches long, or greater than\n0.016 inch thick.d.Not more than 3.5 ounces (Charge flat-size prices for First-Class Mail\ncard-type pieces over 3.5 ounces.)"&125;]&125;&125;]

            [&123;"type":"events","data":&123;"title":"Retrieving context for query: 'letter size'"&125;&125;]

            [&123;"type":"events","data":&123;"title":"Retrieved 2 sources to use as context for the query"&125;&125;]

            [&123;"type":"tools","data":&123;"toolCall":&123;"id":"call_1GrNbe5yNJLS2bHWHml3KoAR","name":"query_engine","input":&123;"query":"letter size"&125;&125;,"toolOutput":&123;"output":"Letter-size mail is defined as follows:\n\n1. **Dimensional Standards**:\n   - Minimum dimensions: Not less than 5 inches long, 3-1/2 inches high, and 0.007-inch thick. For pieces more than 6 inches long or 4-1/4 inches high, the minimum thickness is 0.009 inches.\n   - Maximum dimensions: Not more than 11-1/2 inches long, 6-1/8 inches high, or 1/4-inch thick.\n   - Weight: Not more than 3.5 ounces (pieces over 3.5 ounces are charged flat-size prices for First-Class Mail).\n\n2. **Shape**:\n   - Must be rectangular, with four square corners and parallel opposite sides. Card-type mailpieces made of cardstock may have finished corners with a radius not exceeding 0.125 inch (1/8 inch).\n\n3. **Nonmachinable Criteria**:\n   - A letter-size piece is considered nonmachinable if it has one or more of the following characteristics:\n     - An aspect ratio (length divided by height) of less than 1.3 or more than 2.5.\n     - It is polybagged, polywrapped, enclosed in plastic, or has a non-paper exterior surface.\n     - It has clasps, strings, buttons, or similar closure devices. \n\nThese standards ensure that letter-size mail can be processed efficiently through postal systems.","isError":false&125;&125;&125;]

            [&123;"type":"suggested_questions","data":["What are the mailing options for letter-size mail?","How do I determine the postage for a letter-size piece?","Are there any restrictions on the content of letter-size mail?"]&125;]

          </code>

        </article>
      </div>



      <div className="markdown-body">
        <article className="markdown-body-content">
          <h1>JP-LRN-003-create-llama-fastapi</h1>

          <p>
            This project is based on a tutorial from llamaIndex. It is a sample chat-bot project (same as above) but uses FastAPI to create a REST API on an http server.
          </p>

          <p>Steps</p>
          <ul>
            <li>
              <code className="notranslate"> poetry install (only do once)
              </code>
            </li>
            <li>
              <code className="notranslate"> poetry shell
              </code>
            </li>
            <li>
              <code className="notranslate"> poetry run generate (only do once or if you add new files to the /data folder)
              </code>
            </li>
            <li>
              <code className="notranslate"> poetry run dev (run the app)
              </code>
            </li>
            <li>
              <code className="notranslate"> http://localhost:8000 (use swagger to test the api endpoints)
              </code>
            </li>
          </ul>
          <p>--------------------------------------------</p>
          <h2>code flow</h2>
          <p>Endpoints are defined here:</p>
          <ul>
            <li>/app/api/routers/*</li>
            <li>look in each class for: @r.post("/request")</li>
            <li>eg. chat.py &gt; @r.post("") async def chat()</li>
            <li>get history of messages</li>
            <li>get doc ids</li>
            <li>generate filters</li>
            <li>Setup callbacks</li>
            <li>Calling LlamaIndex's ChatEngine to get a streamed response</li>
            <li>return streamed data response</li>
          </ul>
          <h2>Example request/response</h2>
          <p>send request to api:</p>
          <ul>
            <li>POST <a href="http://localhost:8000/api/chat/request"
              rel="nofollow">http://localhost:8000/api/chat/request</a> (non-streaming endpoint)</li>
          </ul>
          <code className="notranslate">&123;
            "messages": [
            &123;
            "content": "What standards for letters exist?",
            "role": "user"
            &125;
            ]
            &125;
          </code>
          <p>Console logs:</p>
          <code className="notranslate">Added user message to memory: What standards for letters exist?
            === Calling Function ===
            Calling function: query_index with args: &123;"input":"standards for letters"&125;
            Got output: Letter-size mail must adhere to specific dimensional standards: it should be at least 5 inches long, 3-1/2 inches high, and 0.007-inch thick, with a minimum thickness of 0.009 inches for larger dimensions. The maximum dimensions are 11-1/2 inches long, 6-1/8 inches high, and 1/4-inch thick, with a weight limit of 3.5 ounces. The mailpieces must be rectangular with square corners and parallel sides. Nonmachinable criteria include having an aspect ratio outside the range of 1.3 to 2.5, being enclosed in plastic, having closure devices like clasps or buttons, or not being made of paper.
          </code>
          <p>Response:</p>
          <code className="notranslate">&123;
            "result": &123;
            "role": "assistant",
            "content": "Standards for letters, particularly in the context of mail, include specific dimensional and weight requirements:\n\n1. **Minimum Dimensions**:\n   - Length: At least 5 inches\n   - Height: At least 3.5 inches\n   - Thickness: At least 0.007 inches (with a minimum thickness of 0.009 inches for larger dimensions)\n\n2. **Maximum Dimensions**:\n   - Length: Up to 11.5 inches\n   - Height: Up to 6.125 inches\n   - Thickness: Up to 0.25 inches\n\n3. **Weight Limit**: The maximum weight for letter-size mail is 3.5 ounces.\n\n4. **Shape Requirements**: Mailpieces must be rectangular with square corners and parallel sides.\n\n5. **Nonmachinable Criteria**: Letters may be considered nonmachinable if they:\n   - Have an aspect ratio outside the range of 1.3 to 2.5\n   - Are enclosed in plastic\n   - Have closure devices like clasps or buttons\n   - Are not made of paper\n\nThese standards ensure that letters can be processed efficiently by postal services.",
            "annotations": null
            &125;,
            "nodes": [
            &123;
            "id": "58bb0fe2-50a2-4bcd-a81c-466b3478863a",
            "metadata": &123;
            "page_label": "1",
            "file_name": "101.pdf",
            "file_path": "L:\\_github\\_JP_github\\JP-LRN-003-create-llama-fastapi\\data\\101.pdf",
            "file_type": "application/pdf",
            "file_size": 47931,
            "creation_date": "2025-02-03",
            "last_modified_date": "2025-01-29",
            "private": "false"
            &125;,
            "score": 0.541831937215857,
            "text": "Domestic Mail Manual • Updated 7-9-23\n101\n101.1.2\nRetail Mail: Physical Standards for Letters, Cards, Flats, and Parcels\n101 Physical Standards\n1.0 Physical Standards for Letters\n1.1 Dimensional Standards for Letters\nLetter-size mail is the following:\na. Not less than 5 inches long, 3-1/2 inches high, and 0.007-inch thick. For \npieces more than 6 inches long or 4-1/4 inches high, the minimum thickness \nis 0.009. (Pieces not meeting the 0.009 thickness are subject to a \nnonmachinable surcharge under 1.2f.) \nb. Not more than 11-1/2 inches long, or more than 6-1/8 inches high, or more \nthan 1/4-inch thick.\nc. Not more than 3.5 ounces. (Charge flat-size prices for First-Class Mail \nletter-size pieces over 3.5 ounces.)\nd. Rectangular, with four square corners and parallel opposite sides. \nLetter-size, card-type mailpieces made of cardstock may have finished \ncorners that do not exceed a radius of 0.125 inch (1/8 inch). See \nExhibit 201.1.1.1.\n1.2 Nonmachinable Criteria\nA letter-size piece is nonmachinable if it has one or more of the following \ncharacteristics (see 601.1.1.2 to determine the length, height, top, and bottom of \na mailpiece):\na. Has an aspect ratio (length divided by height) of less than 1.3 or more than 2.5.\nb. Is polybagged, polywrapped, enclosed in any plastic material, or has an \nexterior surface made of a material that is not paper. Windows in envelopes \nmade of paper do not make mailpieces nonmachinable. Attachments \nallowable under applicable eligibility standards do not make mailpieces \nnonmachinable. \nc. Has clasps, strings, buttons, or similar closure devices.\nOverview 1.0 Physical Standards for Letters\n2.0 Physical Standards for Flats\n3.0 Physical Standards for Parcels\n4.0 Additional Physical Standards for Priority Mail Express\n5.0 Additional Physical Standards for Priority Mail\n6.0 Additional Physical Standards for First-Class Mail and USPS Ground \nAdvantage — Retail\n7.0 Additional Physical Standards for Media Mail and Library Mail",
            "url": "http://localhost:8000/api/files/data/101.pdf"
            &125;,
            &123;
            "id": "55ca2f7c-22d4-4751-844e-6e1bef03d7f9",
            "metadata": &123;
            "page_label": "5",
            "file_name": "101.pdf",
            "file_path": "L:\\_github\\_JP_github\\JP-LRN-003-create-llama-fastapi\\data\\101.pdf",
            "file_type": "application/pdf",
            "file_size": 47931,
            "creation_date": "2025-02-03",
            "last_modified_date": "2025-01-29",
            "private": "false"
            &125;,
            "score": 0.5205086536686815,
            "text": "Domestic Mail Manual • Updated 7-9-23\n101\n101.6.2.9\nRetail Mail: Physical Standards for Letters, Cards, Flats, and Parcels\n6.2.3   Other Cards\nA card that does not meet the applicable standards in 6.2 must not bear the \nwords “Postcard” or “Double Postcard.” \n6.2.4   Paper or Card Stock\nA card must be of uniform thickness and made of unfolded and uncreased paper \nor cardstock of approximately the quality and weight of a stamped card (i.e., a \ncard available from USPS). A card must be formed either of one piece of paper or \ncardstock or of two pieces of paper permanently and uniformly bonded together. \nThe stock used for a card may be of any color or surface that permits the legible \nprinting of the address, postmark, and any required markings. \n6.2.5   Acceptable Attachments \nA card may bear an attachment that is the following:\na. A paper label, such as a wafer seal or decal affixed with permanent adhesive \nto the back side of the card, or within the message area on the address side \n(see Exhibit 202.2.1), or to the left of the address block.\nb. A label affixed with permanent adhesive for showing the delivery or return \naddress.\nc. A small reusable seal or decal prepared with pressure-sensitive and \nnonremovable adhesive that is intended to be removed from the first half of \na double card and applied to the reply half. \n6.2.6   Unacceptable Attachment \nA card may not bear an attachment that is the following:\na. Other than paper.\nb. Not totally adhered to the card surface.\nc. An encumbrance to postal processing. \n6.2.7   Tearing Guides\nA card may have perforations or tearing guides if they do not eliminate or \ninterfere with any address element, postage, marking, or endorsement and do \nnot impair the physical integrity of the card. \n6.2.8   Address Side of Cards\nThe address side of a card is the side bearing the delivery address and postage. \nThe address side may be formatted to contain a message area. Cards that do \nnot contain a message area on the address side are subject to the applicable \nstandards for the price claimed. For the purposes of 6.2, miscellaneous graphics \nor printing, such as symbols, logos, or characters, that appear on the address \nside of cards not containing a message area are generally acceptable provided \nthe items are not intended to convey a message. \n6.2.9   Double Cards\nA double card (a double stamped card or double postcard) consists of two \nattached cards, one of which is designed to be detached by the recipient and \nreturned by mail as a single card. Double cards are subject to these standards:",
            "url": "http://localhost:8000/api/files/data/101.pdf"
            &125;
            ]
            &125;
          </code>

        </article>
      </div>


    </div>

  );
}
