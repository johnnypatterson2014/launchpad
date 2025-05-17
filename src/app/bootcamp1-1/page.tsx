import Image from "next/image";

export default function Home() {
  return (

    <div>

      {/* <div className="bg-base-200 sticky top-0 z-30 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/001-data-loaders.py" target="_blank">source <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div> */}

      <h2 className="mt-5">001-data-loaders.py</h2>
      <div className="tw-prose-body mt-2">
        Ask the LLM a question about data which was loaded from:

        <ul className="ml-5 space-y-1 list-disc list-inside dark:text-gray-400">
          <li>a local text file</li>
          <li>a local csv file</li>
          <li>a local html file</li>
          <li>a local pdf file</li>
          <li>a Wikipedia page</li>
        </ul>

        <p className="mt-4">
          Note that the entire text in loaded_data is passed to the LLM in the context window.
        </p>

      </div>

      <div className="mt-2 bg-base-200 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/001-data-loaders.py" target="_blank">source <span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/001-data-loaders.output.txt" target="_blank">sample output <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>


      {/*
          --------------------------------------------------------------------------- next script
      */}

      <div className="h-10"></div>

      <h2>002-simple-rag.py</h2>
      <div className="tw-prose-body mt-2">
        <p>
          Demonstrate a simple RAG app using LangChain (using LCEL and without).
        </p>
        <p>
          RAG process:
        </p>

        <ul className="ml-5 space-y-1 list-disc list-inside dark:text-gray-400">
          <li>Split document in small chunks of text</li>
          <li>Transform text chunks in numeric chunks (embeddings)</li>
          <li>Load embeddings to a vector database</li>
          <li>Given a question, retrieve the most similar embeddings in the vector db to send to the LLM</li>
          <li>create a prompt with the question and embeddings</li>
          <li>send prompt to LLM</li>
          <li>receive response from LLM</li>
          <li>format the output of the LLM</li>
        </ul>

      </div>

      <div className="mt-2 bg-base-200 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/002-simple-rag.py" target="_blank">source <span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/002-simple-rag.output.txt" target="_blank">sample output <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>

      {/*
          --------------------------------------------------------------------------- next script
      */}

      <div className="h-10"></div>

      <h2>003-chatbot-with-chat-history.py</h2>
      <div className="tw-prose-body mt-2">
        <p>
          Example chatbot that remembers the chat history:
        </p>

        <ul className="ml-5 space-y-1 list-disc list-inside dark:text-gray-400">
          <li>We will use the ChatMessageHistory package</li>
          <li>We will save the Chatbot memory in a python dictionary called chatbotMemory</li>
          <li>We will define the get_session_history function to create a session_id for each conversation</li>
          <li>We will use the built-in runnable RunnableWithMesageHistory</li>

        </ul>

        <p className="mt-4">
          Chatbot with memory:
        </p>

        <ul className="ml-5 space-y-1 list-disc list-inside dark:text-gray-400">
          <li>will remember previous chat history</li>
          <li>chat history is saved to a file</li>
          <li>note that the entire chat history is sent to the LLM context window</li>
        </ul>

        <p className="mt-4">
          Example Chatbot that saves chat history by session_id
        </p>

        <p className="mt-4">
          Example Chatbot with history but limits the size of the history passed to the context window:
        </p>

        <ul className="ml-5 space-y-1 list-disc list-inside dark:text-gray-400">
          <li>The memory of a chatbot is included in the context window of the LLM so, if left unmanaged, can potentially overflow it.</li>
          <li>We are now going to learn how to limit the size of the memory of a chatbot</li>
        </ul>

      </div>

      <div className="mt-2 bg-base-200 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/003-chatbot-with-chat-history.py" target="_blank">source <span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/003-chatbot-with-chat-history.output.txt" target="_blank">sample output <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>


      {/*
          --------------------------------------------------------------------------- next script
      */}

      <div className="h-10"></div>

      <h2>004-key-data-extraction.py</h2>
      <div className="tw-prose-body mt-2">

        <p className="mt-4">
          We will create an app to extract structured information from unstructured text. Imagine, for example, that you want to extract the name, the lastname and the country of the users that submit comments in the website of your company.
        </p>

      </div>

      <div className="mt-2 bg-base-200 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/004-key-data-extraction.py" target="_blank">source <span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/004-key-data-extraction.output.txt" target="_blank">sample output <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>

      {/*
          --------------------------------------------------------------------------- next script
      */}

      <div className="h-10"></div>

      <h2>005-sentiment-analysis.py</h2>
      <div className="tw-prose-body mt-2">

        <p className="mt-4">
          Sentiment Analysis is a very popular functionality. For example, be able to determine if a product review is positive or negative.
        </p>

        <p className="mt-4">
          Our app will be able to do more than that. It will be a text classification app, also called a "tagging" app.
        </p>

        <p className="mt-4">
          In short, we will create an app to classify text into labels. And these labels can be:
        </p>

        <ul className="ml-5 space-y-1 list-disc list-inside dark:text-gray-400">
          <li>Sentiment: Sentiment Analysis app</li>
          <li>Language: Language Analysis app</li>
          <li>Style (formal, informal, etc): Style Analysis app</li>
          <li>Topics or categories: Topic or category Analysis app</li>
          <li>Political tendency: Political Analysis app</li>
          <li>etc.</li>
        </ul>

      </div>

      <div className="mt-2 bg-base-200 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/005-sentiment-analysis.py" target="_blank">source <span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/005-sentiment-analysis.output.txt" target="_blank">sample output <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>

      {/*
          --------------------------------------------------------------------------- next script
      */}

      <div className="h-10"></div>

      <h2>006-qa-from-sql.py</h2>
      <div className="tw-prose-body mt-2">

        <p className="mt-4">
          SQL integration:
        </p>

        <ul className="ml-5 space-y-1 list-disc list-inside dark:text-gray-400">
          <li>We will create a Q&A app over tabular data in databases</li>
          <li>These app will allow us to ask a question about the data in a database in natural language and get back an answer also in natural language.</li>
          <li>Building Q&A systems of SQL databases requires executing model-generated SQL queries. There are inherent risks in doing this. In production, make sure that your database connection permissions are always scoped as narrowly as possible for your chain's needs</li>
        </ul>

      </div>

      <div className="mt-2 bg-base-200 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/006-qa-from-sql.py" target="_blank">source <span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="https://github.com/johnnypatterson2014/JP-LRN-001-python-langchain/blob/main/006-qa-from-sql.output.txt" target="_blank">sample output <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>

      {/*
          --------------------------------------------------------------------------- next script
      */}

      <div className="h-10"></div>

      <h2>xxxxx</h2>
      <div className="tw-prose-body mt-2">

        <p className="mt-4">
          xxxxxxxxxxxxx:
        </p>

        <ul className="ml-5 space-y-1 list-disc list-inside dark:text-gray-400">
          <li>xxxxxxxxxxxxx</li>
          <li>xxxxxxxxxxxxx</li>
          <li>xxxxxxxxxxxxx</li>
          <li>xxxxxxxxxxxxx</li>
          <li>xxxxxxxxxxxxx</li>
        </ul>

      </div>

      <div className="mt-2 bg-base-200 flex h-10 w-full">

        <div className="breadcrumbs text-sm w-full">
          <ul>
            <li>github</li>
            <li>
              <a href="xxxxxxxx" target="_blank">source <span className="newWindow6"></span></a>
            </li>
            <li>
              <a href="xxxxxxxxxx" target="_blank">sample output <span className="newWindow6"></span></a>
            </li>
          </ul>
        </div>

      </div>


      {/*
          ------ end of list
      */}

    </div>

  );
}
