import { useState } from "react";

import Header from "../components/Sidebar/Header";
import ChatContainer from "../components/Chat/ChatContainer";
import ChatInput from "../components/Chat/ChatInput";

import type { Menu, Message } from "../types/Chat";
import { menuData } from "../data/menuData";
import { getCurrentTime, getRandomDelay } from "../utils/chatUtils";

function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "menu",
      text: `안녕하세요! 건국대학교 AI 챗봇 쿠비예요 😊
학사·장학·수업 정보가 궁금하다면
무엇이든 물어보세요!`,
      isUser: false,
      time: getCurrentTime(),
    },
  ]);

  const findMenuByInput = (input: string): Menu | undefined => {
    const normalizedInput = input
      .toLowerCase()
      .replace(/\s/g, "");

    return menuData.find((menu) =>
      menu.keywords.some((keyword) => {
        const normalizedKeyword = keyword
          .toLowerCase()
          .replace(/\s/g, "");

        return normalizedInput.includes(normalizedKeyword);
      })
    );
  };

  const createBotMessageByMenu = (menu: Menu): Message => {
    return {
      type: "link",
      text: menu.botText,
      description: menu.description,
      buttonText: menu.buttonText,
      url: menu.url,
      isUser: false,
      time: getCurrentTime(),
    };
  };

  const createFallbackMessage = (): Message => {
    return {
      type: "text",
      text: "제가 질문을 잘 이해하지 못했어요 😥\n알고 싶은 내용을 조금 더 쉽고 짧게 말해주시면 다시 찾아볼게요 🙂",
      isUser: false,
      time: getCurrentTime(),
    };
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const matchedMenu = findMenuByInput(text);

    const userMessage: Message = {
      type: "text",
      text,
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

        const botMessage = matchedMenu
          ? createBotMessageByMenu(matchedMenu)
          : createFallbackMessage();

        return [
          ...messagesWithoutLoading,
          botMessage,
        ];
      });
    }, getRandomDelay());
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <ChatContainer
        messages={messages}
        setMessages={setMessages}
      />

      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default Home;