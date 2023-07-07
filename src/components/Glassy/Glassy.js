import styles from './glassy.module.css';

export function Glassy(props) {
    return <>
        <div className={`${styles.Background}
        before:bg-slate-50 before:opacity-90
        dark:before:bg-black dark:before:opacity-70 z-10
        dark:text-white flex flex-col justify-between
        before:backdrop-blur-lg
        items-center ${props.classes}`} style={props.style} >
            {props.children}
        </div>
    </>
}

