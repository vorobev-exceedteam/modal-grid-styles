import {Button} from "antd";
import cn from "classnames";

import s from "./CustomButton.module.scss";

export const CustomButton = ({children, className, type = 'default', ...buttonProps}) => {
	// В CSS-модулях использование библиотеки classnames это де-факто стандарт,
	// подозрительно, если человек начинает собирать дикие шаблоны руками.
	const btnClassName = cn(
		s.customButton,
		s[`type__${type}`],
		className // подумали о внешней кастомизации кнопки. Для задачи не обязательно, но показательно
	);

  return <Button className={btnClassName} {...buttonProps}>{children}</Button>;
};