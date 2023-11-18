
export default function AppInput({placeholder= "", name, type="text" }) {
    return (
        <div>
            <input className="rounded-lg placeholder:text-slate-400 block bg-white w-full border border-slate-300 p-1.5 shadow-sm focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1 sm:text-sm custom-placeholder" placeholder={placeholder} name={name} type={type} />
        </div>
    );
}
