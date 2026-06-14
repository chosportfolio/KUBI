import { useState } from "react";
import type { Language } from "../../types/Chat";

type Props = {
  sendMessage: (text: string) => void;
  language: Language;
};

const placeholderText = {
  ko: "질문을 입력하세요.",
  en: "Type your question.",
  zh: "请输入问题。",
};

export default function ChatInput({ sendMessage, language }: Props) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    sendMessage(trimmedInput);
    setInput("");
  };

  return (
    <ul className="input">
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#007014"
        >
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>
      </li>

      <li>
        <input
          type="text"
          placeholder={placeholderText[language]}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSend();
            }
          }}
        />
      </li>

      <li>
        <button type="button" onClick={handleSend}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#007014"
          >
            <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
        </button>
      </li>
    </ul>
  );
}