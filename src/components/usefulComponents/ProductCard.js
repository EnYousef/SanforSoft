export default function ProductCard({ img }) {
    return <div className="rounded-xl bg-slate-700 ">
        <img src={img} alt="" className="w-full rounded-t-xl" />
        <p className="text-xl font-bold p-2 underline underline-offset-8">تطبيق شات .</p>
        <p className="p-[10px_10px] text-base font-light">تطبيق مراسلات  ومنشورات حيث يمكن للافراد التفاعل مع المنشورات بالتعليق او الاعجاب كما يتميز بواجهاته الجميلة .</p>
    </div>
}
