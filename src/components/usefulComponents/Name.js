import React, { useState } from 'react';

export function Name({ title, classes = '' }) {
    const [typing, setType] = useState("typing")
    const onAnimationEnd = _ => {
        setType("");
    }
    return (
        <div className={`text-4xl sm:text-7xl font-bold -tracking-normal title ${classes}`}>
            <h1 className={`${typing} dark:after:bg-[#172735] dark:after:md:bg-[#192835] dark:after:lg:bg-[#232938] after:sm:bg-[#e8eff5] after:md:bg-[#e7eef5]`} onAnimationEnd={onAnimationEnd}>{title}</h1>
        </div>
    );
}
