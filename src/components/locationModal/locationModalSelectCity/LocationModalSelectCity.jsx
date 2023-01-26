import { React } from "react";
import * as S from "./LocationModalSelectCityStyle";
import rightArrow from "../../../assets/images/rightArrow.svg";

import closeRed from "../../../assets/images/closeRed.svg";
import {
  BoxCity,
  ButtonCity,
} from "../locationModalHeader/LocationModalHeaderStyle";

const LocationModalSelectCity = (props) => {
  return (
    <>
      <S.Box>
        <S.Back>
          <button onClick={props.handlershowComponent}>
            <div>همه شهرها</div>
            <img src={rightArrow} />
          </button>
        </S.Back>
        <S.HorizontalLine />
        <S.BoxSelectCity>
          <S.BoxInput>
            <input type="checkbox" />
            همه شهرهای استان مرکزی
          </S.BoxInput>
        </S.BoxSelectCity>

        {props.checkList.map((item) => (
          <S.BoxSelectCity>
            <S.BoxInput key={item.id}>
              <input
                onClick={props.handleCheck}
                type="checkbox"
                id={item.id}
                value={item.name}
              />
              <span>{item.name}</span>
            </S.BoxInput>
          </S.BoxSelectCity>
        ))}
      </S.Box>
    </>
  );
};

export default LocationModalSelectCity;
