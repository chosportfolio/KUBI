import { useState } from "react";

import Header from "../components/Sidebar/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatContainer from "../components/Chat/ChatContainer";
import ChatInput from "../components/Chat/ChatInput";

import type { Language, Menu, Message } from "../types/Chat";
import { menuData } from "../data/menuData";
import { getCurrentTime, getRandomDelay } from "../utils/chatUtils";

type HomeProps = {
  isLoggedIn: boolean;
  onLogout: () => void;
};

const welcomeText = {
  ko: `안녕하세요! 건국대학교 AI 챗봇 쿠비예요 😊
학사·장학·수업 정보가 궁금하다면
무엇이든 물어보세요!`,

  en: `Hello! I'm KUBI, Konkuk University's AI chatbot 😊
Ask me anything about academics, scholarships, classes, and campus life!`,

  zh: `你好！我是建国大学 AI 聊天机器人 KUBI 😊
如果你想了解学事、奖学金、课程和校园生活，
可以随时问我！`,
};

const fallbackText = {
  ko: "제가 질문을 잘 이해하지 못했어요 😥\n알고 싶은 내용을 조금 더 쉽고 짧게 말해주시면 다시 찾아볼게요 🙂",
  en: "Sorry, I couldn't understand your question 😥\nPlease ask again in a simpler way 🙂",
  zh: "抱歉，我没有理解你的问题 😥\n请用更简单的方式再问一次 🙂",
};

function Home({ isLoggedIn, onLogout }: HomeProps) {
  const [language, setLanguage] = useState<Language>("ko");

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "menu",
      text: welcomeText.ko,
      isUser: false,
      time: getCurrentTime(),
    },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);

    setMessages([
      {
        type: "menu",
        text: welcomeText[nextLanguage],
        isUser: false,
        time: getCurrentTime(),
      },
    ]);
  };

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
      text: menu.botText[language],
      description: menu.description?.[language],
      buttons: menu.buttons?.map((button) => ({
        text: button.text[language],
        url: button.url,
      })),
      isUser: false,
      time: getCurrentTime(),
    };
  };

  const createFallbackMessage = (): Message => {
    return {
      type: "text",
      text: fallbackText[language],
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
    <div className="relative flex flex-col h-screen">
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {sidebarOpen && (
        <Sidebar
          isLoggedIn={isLoggedIn}
          language={language}
          onClose={() => setSidebarOpen(false)}
          onLogout={() => {
            onLogout();
            setSidebarOpen(false);
          }}
        />
      )}

      <ChatContainer
        messages={messages}
        setMessages={setMessages}
        language={language}
      />

      <ChatInput
        sendMessage={sendMessage}
        language={language}
      />
    </div>
  );
}

export default Home;