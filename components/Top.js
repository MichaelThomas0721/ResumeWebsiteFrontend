import * as Typing from "./Typing";
import styles from "../styles/top.module.css";

export const TopMain = () => {
  return(
  <div className="ml-36 mt-36 grid-cols-2 grid-rows-3">
      <h1 className="text-ti-align-left mt-40 text-offWhite text-base mb-0">My Name is</h1>
      <h1 className="text-ti-align-left text-lightTeal text-5xl mt-0 mb-0 pt-3 pb-3 font-bold">Michael Thomas</h1>
      <div className="font-semibold">
            <Typing.Typing/>
      </div>

  </div>
  )
};
