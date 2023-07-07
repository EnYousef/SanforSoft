import React from 'react';
import { Glassy } from '../../components/Glassy/Glassy';
import { Nav } from '../../components/Nav/Navbar';
import { Name } from '../../components/usefulComponents/Name';
import { BiLogoFlutter, BiLogoReact, BiLogoJavascript, BiLogoFirebase, BiLogoFigma, BiLogoPhp, BiLogoCss3, BiLogoTailwindCss, BiLogoHtml5, BiLogoBootstrap } from "react-icons/bi";
import { SiCsharp, SiExpress, SiKotlin } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

const ServicePage = () => {
    return (
        <Glassy >
            <Nav />
            <Name title={'خدماتنا .'} classes='mb-24 mt-20 text-center' />
            <div className='p-4 pb-8'>
                <ServiceTitle title="خدمات الاعمال :" />
                <ServiceGrid >
                    <ServiceCard title={'تطبيقات  الموبايل'} desc={'تطوير تطبيقات الموبايل لجميع اجهزة الموبايل Android و iOS من خلال تقنيات مختلفة وبواجهات مميزه وانيقة .'} />
                    <ServiceCard title={'تطبيقات  الويب'} desc={'تطوير المواقع الالكترونية باحدث التنقيات وجعل هذه المواقع مؤامة لمختلف الانظمة الموبايل والاجهزة الاخرى المختلفة .'} />
                    <ServiceCard title={'تطبيقات  الحاسوب'} desc={'تطوير تطبيقات الحاسوب وانظمة المعاملات اليومية مثل النظم المحاسبية وبواجهات حديثة ومميزه .'} />
                </ServiceGrid>
                <ServiceTitle title="خدمات الافراد او المطورين :" classes='mt-8' />
                <ServiceGrid >
                    <ServiceCard title={"اصلاح الاخطاء"} desc={'حل الاخطاء المتعلقة بجميع التنقيات المذكورة في القسم التالي سوا اخطاء وقت الترجمة او الاخطاء وقت التنفيذ .'} />
                    <ServiceCard title={"اضافة متطلبات"} desc={'اضافة متطلب او مجموعة من المتطلبات للبرمحيات مثل اضافة الدفع الالكتروني لتطبيق او موقع ما .'} />
                </ServiceGrid>
                <ServiceTitle title={'التنقيات التي نعمل بها:'} classes='mt-8' />
                <section className={
                    `text-blue-950 dark:text-white backdrop-blur-lg
                    grid grid-cols-3 justify-items-center bg-blue-500
                    p-5 gap-y-5 dark:shadow-slate-950 bg-opacity-20
                    rounded shadow-xl md:grid-cols-4 lg:grid-cols-5
                    `}>
                    <IconTech icon={<BiLogoFlutter size={'4.5rem'} />} />
                    <IconTech icon={<SiKotlin size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoReact size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoJavascript size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoFirebase size={'4.5rem'} />} />
                    <IconTech icon={<SiCsharp size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoFigma size={'4.5rem'} />} />
                    <IconTech icon={<SiExpress size={'4.5rem'} />} />
                    <IconTech icon={<FaNode size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoPhp size={'4.5rem'} />} />
                    <IconTech icon={<TbSql size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoHtml5 size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoCss3 size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoTailwindCss size={'4.5rem'} />} />
                    <IconTech icon={<BiLogoBootstrap size={'4.5rem'} />} />
                </section>
            </div>
        </Glassy>
    );

    function ServiceTitle({ title, classes = '' }) {
        return <div className={`backdrop-blur-lg sm:text-3xl text-2xl font-bold pb-4 ${classes}`}>
            <p className={`underline`} style={{ textUnderlineOffset: "10px" }}>{title}</p>
        </div>;
    }
}

export default ServicePage;

function ServiceCard({ title, desc }) {
    return (<div className={
        `bg-blue-500 md:text-lg p-4
        text-sm bg-opacity-20 backdrop-blur-lg
        dark:shadow-slate-950 rounded drop-shadow-lg
        pl-4 shadow-xl hover:-translate-y-2 duration-200
        cursor-pointer`}>
        <h1 className='text-2xl font-bold pb-3'>{title}</h1>
        <hr />
        <p className='leading-relaxed pt-3'>{desc}</p>
    </div>);
}


function ServiceGrid(props) {
    return (<div className='grid md:grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-3'>
        {props.children}
    </div>);
}

function IconTech({ icon }) {
    return (<div className='hover:scale-125 duration-100 hover:text-blue-500'>
        {icon}
    </div>);
}
