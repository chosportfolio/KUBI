import type { Menu } from "../../types/Chat";

type Props = {
  menus: Menu[];
  onMenuClick: (menu: Menu) => void;
};

export default function MenuGrid({
  menus,
  onMenuClick,
}: Props) {
  return (
    <div className="menu-grid">
      {menus.map((menu) => (
        <button
          key={menu.title}
          type="button"
          className="menu-button"
          onClick={() => onMenuClick(menu)}
        >
          <img
            src={menu.icon}
            alt={menu.title}
            className="menu-icon"
          />

          <span>{menu.title}</span>
        </button>
      ))}
    </div>
  );
}