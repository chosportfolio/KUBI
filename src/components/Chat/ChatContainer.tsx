import { useEffect, useRef, useState } from "react";

import MessageBubble from "./MessageBubble";
import MenuGrid from "./MenuGrid";

import type { Language, Menu, Message } from "../../types/Chat";
import { getMenuPages } from "../../data/menuData";
import { getCurrentTime, getRandomDelay } from "../../utils/chatUtils";

type Props = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  language: Language;
};

export default function ChatContainer({
  messages,
  setMessages,
  language,
}: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const menuPages = getMenuPages();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleMenuClick = (menu: Menu) => {
    const userMessage: Message = {
      type: "text",
      text: menu.userText[language],
      isUser: true,
      time: getCurrentTime(),
    };

    const loadingMessage: Message = {
      type: "text",
      text: "",
      isUser: false,
      time: getCurrentTime(),
      isLoading: true,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      loadingMessage,
    ]);

    setTimeout(() => {
      setMessages((prev) => {
        const messagesWithoutLoading = prev.filter(
          (message) => !message.isLoading
        );

        const botMessage: Message = {
          type: "link",
          text: menu.botText[language],
          description: menu.description?.[language],
          buttons: menu.buttons?.map((button) => ({
            text: button.text[language],
            url: button.url,
          })),
          isUser: false,
          time: getCurrentTime(),
        };

        return [
          ...messagesWithoutLoading,
          botMessage,
        ];
      });
    }, getRandomDelay());
  };

  return (
    <section className="chat-container">
      <div className="chat-inner">
        {messages.map((message, index) => (
          <div key={index}>
            <MessageBubble {...message} />

            {index === 0 && (
              <>
                <MenuGrid
                  menus={menuPages[currentPage] ?? []}
                  language={language}
                  onMenuClick={handleMenuClick}
                />

                <div className="dot-container">
                  {menuPages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={
                        currentPage === index ? "dot active-dot" : "dot"
                      }
                      onClick={() => setCurrentPage(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}

        <div ref={bottomRef} />
      </div>
    </section>
  );
}