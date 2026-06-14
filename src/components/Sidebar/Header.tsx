import logo from "../../assets/ku_logo.png";
import type { Language } from "../../types/Chat";

type HeaderProps = {
  onMenuClick: () => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function Header({
  onMenuClick,
  language,
  onLanguageChange,
}: HeaderProps) {
  const titleText = {
    ko: "쿠비(KUBI)",
    en: "KUBI",
    zh: "库比(KUBI)",
  };

  return (
    <header>
      <ul className="header relative h-full flex items-center">
        <li>
          <form>
            <select
              value={language}
              onChange={(event) =>
                onLanguageChange(event.target.value as Language)
              }
            >
              <option value="ko">KR</option>
              <option value="en">EN</option>
              <option value="zh">CH</option>
            </select>
          </form>
        </li>

        <li className="flex-1 flex items-center gap-2">
          <img className="logo" src={logo} alt="건국대학교" />
          {titleText[language]}
        </li>

        <li>
          <button
            type="button"
            onClick={onMenuClick}
            className="p-2 text-white hover:text-gray-200"
            aria-label="open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </li>
      </ul>
    </header>
  );
}