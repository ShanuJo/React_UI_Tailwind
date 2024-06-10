
export default function Button({ children, ...props }) {
    return (
        <button
        className="px-4 py-2 text-l font-semibold rounded text-stone-800 bg-amber-600 hover:bg-amber-500"
            {...props}
        >
            {children}
        </button>
    )
}
