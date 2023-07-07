import React from 'react';
import { Name } from '../../components/usefulComponents/Name';
import { Nav } from '../../components/Nav/Navbar';
import { Glassy } from '../../components/Glassy/Glassy';
import { BsInstagram, BsWhatsapp, BsFacebook, BsTwitter } from "react-icons/bs";

const ContactPage = () => {
    return (
        <Glassy classes="h-screen">
            <Nav />
            <Name title={"تواصل معانا ."} classes="text-center" />
            <div className='p-4 pb-8 backdrop-blur-lg lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid gap-8 w-full'>
                <a href="https://instagram.com/sanforsoft"><CardSocial icon={<BsInstagram size={'1.5rem'} />} text={'تابعنا على انستجرام .'} /></a>
                <a href="https://wa.me/+967775657428" ><CardSocial icon={<BsWhatsapp size={'1.5rem'} />} text={'ارسل لنا على واتساب .'} /></a>
                <a href="https://www.facebook.com/profile.php?id=100094153014497&mibextid=ZbWKwL"><CardSocial icon={<BsFacebook size={'1.5rem'} />} text={'تابعنا على فيسبوك .'} /></a>
                <a href="https://twitter.com/SanforSoft?t=L9Asb-VCk-Lsrxt06YWKgA&s=09"><CardSocial icon={<BsTwitter size={'1.5rem'} />} text={'تابعنا على توتير .'} /></a>
            </div>
        </Glassy>
    );
}

export default ContactPage;




function CardSocial({ icon, text }) {
    return (
        <div className={`
                bg-blue-500 text-lg font-semibold
                flex justify-evenly items-center
                bg-opacity-20 dark:shadow-slate-950
                rounded p-4 shadow-xl hover:-translate-y-2
                duration-200 cursor-pointer`}>
            {icon}
            <p>{text}</p>

        </div>);
}
