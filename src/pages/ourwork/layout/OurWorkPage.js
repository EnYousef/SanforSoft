import React from "react";
import { Glassy } from "../../../components/Glassy/Glassy";
import { Nav } from "../../../components/Nav/Navbar";
import { Name } from "../../../components/usefulComponents/Name";
import Ecommerce from '../../../assets/ecommerce.svg';
import Chat from '../../../assets/5911276_2992775.svg';
import Todo from '../../../assets/todo3.svg';
import Expenses from '../../../assets/expenses.svg';
const projects = [
  {
    id: 1,
    title: 'متجر الكتروني',
    desc: 'تطبيق لمتجر الكتروني يعرض المنتجات مع امكانية اضافة المنتجات الى المفضلة او السله وعرض المنتجات المضافة بالسلة حيث ان هذا التطبيق مبني على API .',
    img: Ecommerce
  },
  {
    id: 2,
    title: 'تطبيق شات .',
    desc: 'تطبيق مراسلات  ومنشورات حيث يمكن للافراد التفاعل مع المنشورات بالتعليق او الاعجاب كما يتميز بواجهاته الجميلة هذا التطبيق مبني على قواعد بيانات Firebase.',
    img: Chat
  },
  {
    id: 3,
    title: 'ادارة المهام',
    desc: 'تطبيق ادارة المهام اليومية يساعدك على ادارة المهام اليومية مع خلال اضافة المهمه وتحديد الوقت ثم يقوم التطبيق بتذكيرك بالمهمه في وقتها التطبيق يعمل على قواعد بيانات محلية .',
    img: Todo,
  },
  {
    id: 4,
    title: 'مصاريف',
    desc: 'تطبيق يساعدك على ادارة المصروفات من خلال اضافة مصروفاتك وعرضها حسب اليوم او الشهر كما يوفر روسومات بيانية توضح مصروفاتك حسب الصنف والمدة, يعمل التطبيق على قواعد بيانات محلية .',
    img: Expenses
  },
]
const OurWorkPage = () => {
  return (
    <Glassy>
      <Nav />
      <Name title={"اعمالنا ."} classes="mb-24 mt-20 text-center" />
      <div className="p-4 pb-8 backdrop-blur-lg lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8 w-full">
        {projects.map(e => <BusinessCard img={e.img} title={e.title} desc={e.desc} />)}
      </div>
    </Glassy>

  );
};

function BusinessCard({ img, title, desc }) {
  return (<div className="relative hover:scale-[1.03] hover:-translate-y-3 duration-200 cursor-pointer">
    <img src={img} alt="" className="w-full rounded-xl h-full object-fill min-h-[300px]" />
    <div className="absolute inset-0">
      <div className="p-4 h-full w-full bg-gradient-to-t dark:from-[#000000a9] from-[#c1d4efa9]  from-35% to-[#00000004] to-65% rounded-xl border-2 shadow-neon ">
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <p className="sm:text-xl text-base font-bold p-2 underline underline-offset-8">{title}</p>
        <p className="pt-2 pr-2 sm:text-base text-sm font-light">{desc}</p>
      </div>
    </div>
  </div>);
}
export default OurWorkPage;


