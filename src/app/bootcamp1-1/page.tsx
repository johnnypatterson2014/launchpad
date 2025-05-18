import Image from "next/image";

export default function Home() {
  return (

    <div>

      <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/tree/main" target="_blank">source <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>


      <div className="markdown-body">
        <article className="markdown-body-content">
          <h2>Example python project using LangChain and OpenAI</h2>
          <p>This project only contains python scripts (run on cmd line) which has examples for how to use LangChain (including RAG techniques)</p>

          <h2>Setup</h2>
          <ul>
            <li>pyenv local 3.11.4</li>
            <li>pyenv activate local</li>
            <li>poetry install</li>
            <li>poetry shell</li>
          </ul>
          <h2>Run</h2>
          <p>&amp; &123;path-to-folder&125;/.venv/Scripts/python.exe &123;path-to-folder&125;/&123;filename&125;.py</p>
          <h2>Request &amp; response from OpenAI</h2>
          <p>View the request/response to OpenAI here: <a href="https://smith.langchain.com/"
            rel="nofollow">https://smith.langchain.com/</a></p>
          <h2>Python script: 001-data-loaders.py</h2>
          <p>Demonstrate LangChain built-in data loaders:</p>
          <ul>
            <li>local text file</li>
            <li>local csv file</li>
            <li>local html file</li>
            <li>Wikipedia page content</li>
          </ul>
          <p>Then ask the LLM a question about the loaded data.</p>
          <h2>Python script: 002-simple-rag.py</h2>
          <p>Demonstrate a simple RAG app using LangChain (using LCEL and without).</p>
          <p>RAG process:</p>
          <ul>
            <li>Split document in small chunks of text</li>
            <li>Transform text chunks in numeric chunks (embeddings)</li>
            <li>Load embeddings to a vector database</li>
            <li>Given a question, retrieve the most similar embeddings in the vector db to send to the LLM</li>
            <li>create a prompt with the question and embeddings</li>
            <li>send prompt to LLM</li>
            <li>receive response from LLM</li>
            <li>format the output of the LLM</li>
          </ul>
          <h2>Python script: 003-chatbot-with-chat-history.py</h2>
          <p>Example chatbot that remembers the chat history.</p>
          <ul>
            <li>We will use the ChatMessageHistory package.</li>
            <li>We will save the Chatbot memory in a python dictionary called chatbotMemory.</li>
            <li>We will define the get_session_history function to create a session_id for each conversation.</li>
            <li>We will use the built-in runnable RunnableWithMesageHistory.</li>
          </ul>
          <p>Chatbot with memory</p>
          <ul>
            <li>will remember previous chat history</li>
            <li>chat history is saved to a file</li>
            <li>note that the entire chat history is sent to the LLM context window.</li>
          </ul>
          <p>Example Chatbot that saves chat history by session_id</p>
          <p>Example Chatbot with history but limits the size of the history passed to the context window</p>
          <ul>
            <li>The memory of a chatbot is included in the context window of the LLM so, if left unmanaged, can
              potentially overflow it.</li>
            <li>We are now going to learn how to limit the size of the memory of a chatbot</li>
          </ul>
          <h2>Python script: 004-key-data-extraction.py</h2>
          <p>We will create an app to extract structured information from unstructured text.<br />
            Imagine, for example, that you want to extract the name, the lastname and the country of<br />
            the users that submit comments in the website of your company.</p>
          <h2>Python script: 005-sentiment-analysis.py</h2>
          <ul>
            <li>Sentiment Analysis is a very popular functionality. For example, be able to determine if a product
              review is positive or negative.</li>
            <li>Our app will be able to do more than that. It will be a text classification app, also called a "tagging"
              app.</li>
            <li>In short, we will create an app to classify text into labels. And these labels can be:
              <ul>
                <li>Sentiment: Sentiment Analysis app.</li>
                <li>Language: Language Analysis app.</li>
                <li>Style (formal, informal, etc): Style Analysis app.</li>
                <li>Topics or categories: Topic or category Analysis app.</li>
                <li>Political tendency: Political Analysis app.</li>
                <li>Etc.</li>
              </ul>
            </li>
          </ul>
          <h2>Python script: 006-qa-from-sql.py</h2>
          <p>SQL integration</p>
          <ul>
            <li>We will create a Q&amp;A app over tabular data in databases.</li>
            <li>These app will allow us to ask a question about the data in a database in natural language and get back
              an answer also in natural language.</li>
            <li>Building Q&amp;A systems of SQL databases requires executing model-generated SQL queries. There are
              inherent risks in doing this. In production, make sure that your database connection permissions are
              always scoped as narrowly as possible for your chain's needs.</li>
          </ul>
          <h2>Python script: 007-qa-from-pdf.py</h2>
          <ul>
            <li>We will create a Q&amp;A app that can answer questions about PDF files.</li>
            <li>We will use a Document Loader to load text in a format usable by an LLM, then build a
              retrieval-augmented generation (RAG) pipeline to answer questions, including citations from the source
              material.</li>
            <li><strong>We will use a basic approach for this project. You will see more advanced ways to solve the same
              problem in next projects</strong>.</li>
          </ul>
          <h2>Python script: 008-conversational-rag.py</h2>
          <p>What we need to solve</p>
          <ul>
            <li>Store the chat conversation.</li>
            <li>When the user enters a new input, put that input in context.</li>
            <li>Re-phrase the user input to have a contextualized input.</li>
            <li>Send the contextualized input to the retriever.</li>
            <li>Use the retriever to build a conversational rag chain.</li>
            <li>Add extra features like persising memory (save memory in a file) and session memories.</li>
          </ul>
          <p>The process we will follow</p>
          <ol>
            <li>Create a basic RAG without memory.</li>
            <li>Create a ChatPrompTemplate able to contextualize inputs.</li>
            <li>Create a retriever aware of memory.</li>
            <li>Create a basic conversational RAG.</li>
            <li>Create an advanced conversational RAG with persistence and session memories.</li>
          </ol>
          <h2>Python script: 009-simple-agent.py</h2>
          <p>Example of a LangChain Agent implementation (called LangGraph).<br />
            The agent is given a set of tools to perform a decision or action.<br />
            In this example, we give the agent a tool to query a search engine (called Tavily).<br />
            We then use the agent to answer questions by using this tool (call the search engine for results and use
            this context to answer the question).</p>
          <h2>Python script: 010-langserve-http-server.py</h2>
          <p>LangServe is the python equivalent to springboot or node (for javascript):</p>
          <ul>
            <li>you can quickly launch an http server to test your LangChain app</li>
            <li>it creates a simple UI and rest API which will call your LangChain app</li>
            <li>can be deployed to any server that has python installed</li>
          </ul>
          <h2>Python script: 011-streamlit-evaluate-app.py</h2>
          <p>Streamlit is a python library that allows you to quickly create an html page and test it by starting up an
            http server.<br />
            We will use streamlit to create a web page that calls our LangChain app.</p>
          <p>From your terminal:<br />
            streamlit run 011-streamlit-evaluate-app.py</p>
          <p>You can now view the web app at:<br />
            <a href="http://localhost:8501/" rel="nofollow">http://localhost:8501/</a>
          </p>
          <p>LangChain evaluation Chain: the code in this script does the following:</p>
          <ul>
            <li>upload a text file</li>
            <li>text splitting, embedding and store in a vector db</li>
            <li>create a retriever chain (RetrievalQA) which will ask the LLM questions about the uploaded text file
            </li>
            <li>create an eval chain (QAEvalChain) which will take input:
              <ul>
                <li>a known answer to the question</li>
                <li>the answer from the LLM retriever chain<br />
                  and will use an LLM to evaluate if the two answers are the same or not (semantically the same,
                  doesn't have to be an exact text match)</li>
              </ul>
            </li>
          </ul>
        </article>
      </div>


    </div>
  );
& 125;
