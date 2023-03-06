import React, { useState } from "react";
// import home from '../../../../assets/images/home.svg'
import home from "../../../../assets/images/home.svg";
import car from "../../../../assets/images/car.svg";
import digital from "../../../../assets/images/digital.png";
import kitchen from "../../../../assets/images/kitchen.png";
import brush from "../../../../assets/images/brush.svg";
import watch from "../../../../assets/images/watch.svg";
import game from "../../../../assets/images/game.svg";
import users from "../../../../assets/images/users.svg";
import shop from "../../../../assets/images/shop.svg";
import wallet from "../../../../assets/images/wallet.svg";
import leftArrow from "../../../../assets/images/leftArrow.svg";
import * as S from "./EnterAdAllMenuStyle";
const data = [
  {
    title: "املاک",
    icon: home,
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
        title: " مسکوپروژه های ساخت و ساز ",
      },
    ],
  },
  {
    title: "وسایل نقلیه",
    icon: car,
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
const EnterAdAllMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  console.log(activeMenu);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <S.BoxSingleMenu onClick={() => setActiveMenu(index)}>
            <S.BoxIcon>
              <img src={leftArrow} alt="" />
            </S.BoxIcon>
            <S.BoxTitleMenu>
              {item.title}
              <img src={item.icon} alt="" />
            </S.BoxTitleMenu>
          </S.BoxSingleMenu>
          <S.HorizontalLine />
          {activeMenu !== null && activeMenu === index ? <p>okkkk</p> : null}
        </div>
      ))}
    </div>
  );
};

export default EnterAdAllMenu;
