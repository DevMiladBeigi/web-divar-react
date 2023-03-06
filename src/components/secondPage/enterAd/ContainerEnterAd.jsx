import React, { useState } from "react";
import * as S from "./ContainerEnterAdStyle";
import EnterAdAllMenu from "./enterAdAllMenu/EnterAdAllMenu";
import EnterAdHome from "./enterAdHome/EnterAdHome";
import EnterAdCar from "./enterAdCar/EnterAdCar";
import home from "../../../assets/images/home.svg";
import car from "../../../assets/images/car.svg";
import digital from "../../../assets/images/digital.png";
import kitchen from "../../../assets/images/kitchen.png";
import brush from "../../../assets/images/brush.svg";
import watch from "../../../assets/images/watch.svg";
import game from "../../../assets/images/game.svg";
import users from "../../../assets/images/users.svg";
import shop from "../../../assets/images/shop.svg";
import wallet from "../../../assets/images/wallet.svg";
import leftArrow from "../../../assets/images/leftArrow.svg";
const data = [
  {
    title: "املاک",
    icon: home,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: "اجاره مسکونی",
      },
      {
        title: "فروش مسکونی",
      },
      {
        title: " فروش اداری و تجاری",
      },
      {
        title: "اجاره اداری و تجاری",
      },
      {
        title: "اجاره کوتاه مدت",
      },
      {
        title: " پروژه های ساخت و ساز ",
      },
    ],
  },
  {
    title: "وسایل نقلیه",
    icon: car,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: " خودرو",
      },
      {
        title: "قطعات یدکی و لوازم جانبی ",
      },
      {
        title: "   موتور سیکلت ",
      },
      {
        title: "قایق و سایر وسایل نقلیه   ",
      },
    ],
  },
  {
    title: "کالای دیجیتال",
    icon: digital,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: " موبایل و تبلت",
      },
      {
        title: "رایانه     ",
      },
      {
        title: " کنسول، بازی‌ ویدئویی و آنلاین",
      },
      {
        title: " تلفن رومیزی  ",
      },
      {
        title: "  متفرقه ",
      },
    ],
  },
  {
    title: "خانه و آشپزخانه",
    icon: kitchen,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: "  لوازم خانگی برقی ",
      },
      {
        title: "ظروف و لوازم آشپزخانه     ",
      },
      {
        title: "خوردنی و آشامیدنی",
      },
      {
        title: "  خیاطی و بافتنی  ",
      },
      {
        title: "  مبلمان و صنایع چوب ",
      },
      {
        title: "  نور و روشنایی ",
      },
      {
        title: "  فرش، گلیم و موکت ",
      },
      {
        title: "  تشک، روتختی و رختخواب ",
      },
      {
        title: "  لوازم دکوری و تزئینی ",
      },
      {
        title: "  تهویه، سرمایش و گرمایش ",
      },
      {
        title: "  شست‌وشو و نظافت ",
      },
      {
        title: "  حمام و سرویس بهداشتی ",
      },
    ],
  },
  {
    title: "خدمات",
    icon: brush,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: "  موتور و ماشین ",
      },
      {
        title: "  پذیرایی/مراسم ",
      },
      {
        title: "  خدمات رایانه‌ای و موبایل ",
      },
      {
        title: "  مالی/حسابداری/بیمه ",
      },
      {
        title: "  حمل و نقل ",
      },
      {
        title: "  پیشه و مهارت ",
      },
      {
        title: "  آرایشگری و زیبایی ",
      },
      {
        title: "  سرگرمی ",
      },
      {
        title: "  نظافت ",
      },
      {
        title: "  باغبانی و درختکاری ",
      },
      {
        title: "  آموزشی ",
      },
      {
        title: "  متفرقه ",
      },
    ],
  },
  {
    title: "وسایل شخصی",
    icon: watch,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: "  کیف، کفش و لباس ",
      },
      {
        title: "  زیورآلات و اکسسوری ",
      },
      {
        title: "  آرایشی، بهداشتی و درمانی ",
      },
      {
        title: "  وسایل بچه و اسباب بازی ",
      },
      {
        title: "  لوازم التحریر ",
      },
      {
        title: "  متفرقه ",
      },
    ],
  },
  {
    title: "سرگرمی وفراغت",
    icon: game,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: "  بلیط ",
      },
      {
        title: "  تور و چارتر ",
      },
      {
        title: "  کتاب و مجله ",
      },
      {
        title: "  دوچرخه/اسکیت/اسکوتر ",
      },
      {
        title: "  حیوانات ",
      },
      {
        title: "  کلکسیون و سرگرمی ",
      },
      {
        title: "  آلات موسیقی ",
      },
      {
        title: "  ورزش و تناسب اندام ",
      },
      {
        title: "  اسباب‌ بازی ",
      },
    ],
  },
  {
    title: "اجتماعی",
    icon: users,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: "  رویداد ",
      },
      {
        title: "  داوطلبانه ",
      },
      {
        title: "  گم‌شده‌ها ",
      },
    ],
  },
  {
    title: "تجهیزات و صنعتی",
    icon: shop,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: "  مصالح و تجهیزات ساختمان ",
      },
      {
        title: "  ابزارآلات ",
      },
      {
        title: "  ماشین‌آلات صنعتی ",
      },
      {
        title: "  تجهیزات کسب‌وکار ",
      },
      {
        title: "  عمده فروشی ",
      },
    ],
  },
  {
    title: "استخدام و کاریابی (غیر رایگان)",
    icon: wallet,
    leftArrow: leftArrow,
    subMenu: [
      {
        title: "  اداری و مدیریت    ",
      },
      {
        title: "  سرایداری و نظافت    ",
      },
      {
        title: "  معماری، عمران و ساختمانی    ",
      },
      {
        title: "  خدمات فروشگاه و رستوران    ",
      },
      {
        title: "  رایانه و فناوری اطلاعات    ",
      },
      {
        title: "  مالی و حسابداری و حقوقی    ",
      },
      {
        title: "  بازاریابی و فروش    ",
      },
      {
        title: "  صنعتی و فنی و مهندسی    ",
      },
      {
        title: "  آموزشی    ",
      },
      {
        title: "  حمل و نقل    ",
      },
      {
        title: "  درمانی و زیبایی و بهداشتی    ",
      },
      {
        title: "  هنری و رسانه    ",
      },
      {
        title: "  متفرقه    ",
      },
    ],
  },
];

const ContainerEnterAd = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [show, setShow] = useState(false);
  const handler = async (index) => {
    setActiveMenu(index);
    if (activeMenu === index) {
      setShow(!show);
      setActiveMenu(null);
    } else {
      setShow(true);
    }
  };
  return (
    <S.Box>
      {/* <S.BoxTitle>
        {activeMenu === index ? " ثبت آگهی  " : null}
        {activeMenu === 0 ? "زیردسته‌های املاک" : null}
        {activeMenu === 1 ? "زیردسته‌های وسایل نقلیه " : null}
      </S.BoxTitle> */}
      <S.BoxSelect>انتخاب دسته بندی</S.BoxSelect>

      {data.map((item, index) => (
        <div key={index}>
          <S.BoxSingleMenu onClick={() => handler(index)}>
            <S.BoxIcon index={index} activeMenu={activeMenu}>
              <img src={item.leftArrow} alt="" />
            </S.BoxIcon>
            <S.BoxTitleMenu>
              {item.title}
              <img src={item.icon} alt="" />
            </S.BoxTitleMenu>
          </S.BoxSingleMenu>
          <S.HorizontalLine />

          {show
            ? activeMenu !== null && activeMenu === index
              ? item.subMenu.map((item2) => (
                  <div>
                    <div key={index}>
                      <S.BoxSubMenu>
                        {/* <S.BoxSubMenuIcon>
                          <img src={leftArrow} alt="" />
                        </S.BoxSubMenuIcon> */}
                        <S.BoxTitleSubMenu> {item2.title}</S.BoxTitleSubMenu>
                      </S.BoxSubMenu>
                      <S.HorizontalLineSubMenu />
                    </div>
                  </div>
                ))
              : null
            : null}
        </div>
      ))}

      {/* 
      {activeMenu !== null && activeMenu === 0 ? (
        <EnterAdHome setShow={setShow} setActiveMenu={setActiveMenu} />
      ) : null}
      {activeMenu !== null && activeMenu === 1 ? (
        <EnterAdCar setShow={setShow} setActiveMenu={setActiveMenu} />
      ) : null} */}
    </S.Box>
  );
};

export default ContainerEnterAd;

// {show
//   ? null
//   :
//    data.map((item, index) => (
//       <div key={index}>
//         <S.BoxSingleMenu onClick={() => handler(index)}>
//           <S.BoxIcon>
//             <img src={leftArrow} alt="" />
//           </S.BoxIcon>
//           <S.BoxTitleMenu>
//             {item.title}
//             <img src={item.icon} alt="" />
//           </S.BoxTitleMenu>
//         </S.BoxSingleMenu>
//         <S.HorizontalLine />

//         {activeMenu !== null && activeMenu === index
//           ? item.subMenu.map((item2) => (
//               <div>
//                 <div key={index}>
//                   {console.log(item)}
//                   <S.BoxSingleMenu>
//                     <S.BoxIcon>
//                       <img src={leftArrow} alt="" />
//                     </S.BoxIcon>
//                     <S.BoxTitleMenu> {item2.title}</S.BoxTitleMenu>
//                   </S.BoxSingleMenu>
//                   <S.HorizontalLine />
//                 </div>
//               </div>
//             ))
//           : null}

//       </div>
//     ))}
