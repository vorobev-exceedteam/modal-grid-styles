import {Toolbar} from "Toolbar/Toolbar";
import {Grid} from "Grid/Grid";
import s from './App.module.scss';

export const App = () => {
  return (
    <div className={s.mainContainer}>
      <Toolbar />
      <Grid />
    </div>
  );
}
