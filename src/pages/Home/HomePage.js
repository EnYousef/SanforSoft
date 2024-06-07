import React from 'react';
import './Home.css';
import { Glassy } from '../../components/Glassy/Glassy';
import { Nav } from '../../components/Nav/Navbar';
import { Link } from 'react-router-dom';
import { Name } from '../../components/usefulComponents/Name';

const HomePage = () => {

    return (
        <Glassy classes=''>
            <Nav />
            <Name title={'نجم سوفت'} classes='mb-24 mt-20 text-center' />
            <div className='grid md:grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-4 p-4 pb-8 w-full'>
                <SectionCard title="خدماتنا" desc="معلومات حول الخدمات التي نقدمها ." link='/service' />
                <SectionCard title="اعمالنا" desc="المشاريع السابقة التي عملنا عليها ." link='/ourwork' />
                <SectionCard title="تواصل معانا" desc="حسابتنا على وسائل التواصل لتواصل معانا ." link='/contact' />
                <SectionCard title="من نحن " desc="تفاصيل حول ستارسوفت وماهي رسالتنا واهدافنا ." link='/about' />
            </div>
        </Glassy>
    );
}
function SectionCard(props) {
    return <Link to={props.link} class="bg-blue-500 md:text-lg text-sm bg-opacity-20 backdrop-blur-lg dark:shadow-slate-950 rounded drop-shadow-lg p-4 shadow-xl hover:-translate-y-2 duration-200 cursor-pointer" >
        <h2 class="text-2xl mb-2 font-bold ">{props.title}</h2>
        <p>{props.desc}</p>
    </Link>
}
export default HomePage;

