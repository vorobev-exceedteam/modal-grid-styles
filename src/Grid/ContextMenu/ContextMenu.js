import { Dropdown, Menu } from "antd";

import s from "./ContextMenu.module.scss";

const MenuItem = Menu.Item;

const MenuContent = () => {
  return (
    <Menu className={s.contextMenu}>
      <MenuItem className={s.contextMenuItem}>Открыть</MenuItem>
      <MenuItem className={s.contextMenuItem}>В Excel</MenuItem>
    </Menu>
  )
}

// Реализация контекстного меню взята из интернета, скорее всего будет что-то подобное.
export const ContextMenu = ({children, value}) => {
  return (
    <Dropdown overlay={MenuContent} trigger={["contextMenu"]} overlayClassName={s.contextMenuDropdown}>
      {children}
    </Dropdown>
  );
};