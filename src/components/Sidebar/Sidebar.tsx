import { useNavigate } from "react-router-dom";

type SidebarProps = {
  isLoggedIn: boolean;
  onClose: () => void;
  onLogout: () => void;
};

export default function Sidebar({ isLoggedIn, onClose, onLogout }: SidebarProps) {
  const navigate = useNavigate();

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
    <div className='sidebar-overlay'>
      <button
        type='button'
        className='sidebar-backdrop'
        onClick={onClose}
        aria-label='close sidebar'
      />
      <aside className='sidebar-panel'>
        <div className='sidebar-header'>
          <span className='sidebar-title'>메뉴</span>
          <button
            type='button'
            className='sidebar-close'
            onClick={onClose}
            aria-label='close sidebar'
          >
            ✕
          </button>
        </div>

        <button
          type='button'
          className='sidebar-action-button'
          onClick={handleButtonClick}
        >
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </aside>
    </div>
  );
}
