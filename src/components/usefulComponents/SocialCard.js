function CardSocialWithColor({ icon, text }) {
    return (<div className='flex w-full items-center shadow-xl dark:shadow-slate-950'>
        <div className='bg-green-600 flex p-4  rounded-r-sm'>
            {icon}
            {/* Make Sure to set size of icon 2rem  And bg most change to be as App*/}
        </div>
        <p className='bg-blue-500 h-full flex bg-opacity-20  items-center p-4 w-[80%] rounded-l-sm'>ارسل لنا على واتساب .</p>
    </div>);
}
export default CardSocialWithColor;
