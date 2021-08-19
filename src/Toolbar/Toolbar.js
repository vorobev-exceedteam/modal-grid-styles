import { CustomButton } from "uiKit/CustomButton/CustomButton";
import s from "./Toolbar.module.scss";

export const Toolbar = () => {
  // Такие перечисляемые штуки у верстальщиков принято описывать через ul-li.
  // Это признак хорошего тона и понимания семантичной верстки.
  // Особенно хорошо, если человек не делает фигни по типу:
  //   <li>
  //     <div className="какая-то лишняя обертка, хотя хватило бы только li">
  //       <CustomButton />
  //     </div>
  //   </li>
  return (
    <ul className={s.toolbar}>
      <li>
        {/* Если забывают про title, то это минус */}
        <CustomButton type="text" title="Обновление страницы">Обновить</CustomButton>
      </li>
      <li>
        <CustomButton type="text" title="В Excel">В Excel</CustomButton>
      </li>
    </ul>
  );
};