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

        {props.checkList.map((item, index) => (
          <S.BoxSelectCity key={index}>
            <S.BoxInput>
              <input
                value={item}
                type="checkbox"
                onChange={props.handleCheck}
              />
              <span>{item}</span>
            </S.BoxInput>
          </S.BoxSelectCity>
        ))}
      </S.Box>
    </>
  );
};

export default LocationModalSelectCity;
