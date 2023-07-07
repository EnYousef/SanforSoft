import React from 'react';
import { Glassy } from '../../components/Glassy/Glassy';
import { Nav } from '../../components/Nav/Navbar';
import { Name } from '../../components/usefulComponents/Name';
import { GiStairsGoal, GiProgression } from "react-icons/gi";
import { BiSolidBrain } from "react-icons/bi";

const AboutPage = () => {
    return (
        <Glassy classes=''>
            <Nav />
            <Name title={"من نحن ."} classes="mb-24 mt-20 text-center" />
            <div className='p-4 pb-8 backdrop-blur-lg lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8 w-full'>
                <AboutCard icon={<GiProgression size={'3rem'} />} title={'رؤيتنا :'} text={"رؤيتنا هي أن نصبح شركة رائدة في تقديم برمجيات مبتكرة وفريدة لعملائنا في جميع أنحاء العالم. نحن نسعى لتحويل الأفكار المبتكرة إلى حقيقة ملموسة، وتوفير البرمجيات التي تساعد عملائنا على تحقيق أهدافهم وتحقيق النجاح في مجالاتهم ."} />
                <AboutCard icon={<BiSolidBrain size={'3rem'} />} title={'رسالتنا :'} text={"توفير برمجيات متطورة وفريدة، تساعد عملائنا على تحقيق أهدافهم وتحسين أدائهم وتسهيل حياتهم اليومية. نحن نسعى لتحقيق هذه الرسالة من خلال تقديم خدمات ذات جودة عالية، والتركيز على احتياجات عملائنا وتلبية متطلباتهم بأسلوب احترافي ومبتكر ."} />
                <AboutCard icon={<GiStairsGoal size={'3rem'} />} title={'اهدافنا :'} text={"تزويد عملائنا ببرمجيات تعمل بأحدث التقنيات والحلول المبتكرة، والتحسين المستمر لجودة خدماتنا ومنتجاتنا، وتوسيع نطاق عملنا على مستوى العالم. نحن نسعى لتحقيق هذه الأهداف من خلال العمل بجد وتحقيق النجاح في مشاريعنا الحالية، وتطوير شراكات استراتيجية مع عملائنا والمشاركة في فعاليات تقنية مهمة ."} />
            </div>
        </Glassy>
    );
}

export default AboutPage;

function AboutCard({ icon, title, text }) {
    return (
        <section className='flex justify-start flex-col items-center p-4 bg-blue-700 bg-opacity-20 rounded shadow-xl dark:shadow-black cursor-pointer hover:-translate-y-2 hover:scale-[1.03] duration-200'>
            <div className='bg-blue-400 p-3 rounded-full dark:border-white border-black border-2'>
                {icon}
            </div>
            <span className='block w-full h-[2px] dark:bg-white bg-black mt-2 mb-2'></span>
            <div>
                <p className='text-xl underline underline-offset-8 font-bold mb-2'>{title}</p>
                <p className='font-medium text-justify'>
                    {text}
                </p>
            </div>
        </section>);
}
