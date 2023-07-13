import { Message } from "@/common.types";
import { useEffect, useState } from "react";

interface Props {
  messages: Message[];
}

export default function Chat({ messages }: Props) {
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message !== "") {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ready) {
      console.log(message);
    }
    // TODO: Send message to server
  };

  return (
    <div className="bg-secondary h-[600px] p-3 flex flex-col items-center relative rounded-md">
      <div className="bg-tertiary/30 w-full h-[90%] rounded-sm relative">
        {messages?.map((message) => (
          <div key={message.id}>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full h-[10%] rounded-sm flex justify-between items-center relative p-2 gap-2"
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full h-full p-3 text-white outline-none rounded-md bg-tertiary/30"
          defaultValue={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className={
            "hover:bg-tertiary/30 h-full p-3 text-white rounded-md flex items-center juctify-center outline-none transition-all duration-200" +
            (ready ? " bg-primary" : " bg-transparent")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
