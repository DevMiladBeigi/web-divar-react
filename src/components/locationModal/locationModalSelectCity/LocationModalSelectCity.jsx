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
            <input
              type="checkbox"
              name="allSelect"
              onChange={props.handleChange}
              checked={
                props.checkboxs.filter((item) => item?.isChecked !== true)
                  .length < 1
              }
            />
            همه شهرهای استان مرکزی
          </S.BoxInput>
        </S.BoxSelectCity>

        {props.checkboxs.map((item) => (
          <S.BoxSelectCity>
            <S.BoxInput key={item.id}>
              <input
                onChange={props.handleChange}
                type="checkbox"
                name={item.name}
                id={item.id}
                checked={item?.isChecked || false}
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
