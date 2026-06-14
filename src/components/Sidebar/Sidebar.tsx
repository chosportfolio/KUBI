import { useNavigate } from "react-router-dom";
import type { Language } from "../../types/Chat";

type SidebarProps = {
  isLoggedIn: boolean;
  language: Language;
  onClose: () => void;
  onLogout: () => void;
};

export default function Sidebar({
  isLoggedIn,
  language,
  onClose,
  onLogout,
}: SidebarProps) {
  const navigate = useNavigate();

  const sidebarText = {
    title: {
      ko: "메뉴",
      en: "Menu",
      zh: "菜单",
    },
    login: {
      ko: "로그인",
      en: "Login",
      zh: "登录",
    },
    logout: {
      ko: "로그아웃",
      en: "Logout",
      zh: "退出登录",
    },
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      onLogout();
      onClose();
    } else {
      navigate("/login");
      onClose();
    }
  };

  return (
    <div className="sidebar-overlay">
      <button
        type="button"
        className="sidebar-backdrop"
        onClick={onClose}
        aria-label="close sidebar"
      />

      <aside className="sidebar-panel">
        <div className="sidebar-header">
          <span className="sidebar-title">
            {sidebarText.title[language]}
          </span>

          <button
            type="button"
            className="sidebar-close"
            onClick={onClose}
            aria-label="close sidebar"
          >
            ✕
          </button>
        </div>

        <button
          type="button"
          className="sidebar-action-button"
          onClick={handleButtonClick}
        >
          {isLoggedIn
            ? sidebarText.logout[language]
            : sidebarText.login[language]}
        </button>
      </aside>
    </div>
  );
}