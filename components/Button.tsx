import { ImSpinner9 } from "react-icons/im";

interface ButtonProps {
    isLoading?: boolean,
    handleClick: () => void;
    type: "primary" | "secondary",
    text: string
}
const Button = ({ handleClick, isLoading, type, text }: ButtonProps) => {
    return (
        <button
            disabled={isLoading}
            onClick={handleClick}
            className={`w-full rounded-sm border font-medium px-4 py-3.5 duration-200 shadow-[5px_5px]  hover:-translate-x-1 hover:-translate-y-1  hover:shadow-[7px_7px] hover:rounded-lg flex items-center justify-center gap-2 shadow-black hover:shadow-black ${type === "primary" ?
                "bg-blue-500 border-blue-500 shadow-blue-200 hover:shadow-blue-300  text-white disabled:border-blue-200 disabled:bg-blue-200" :
                "border-black shadow-black hover:shadow-black disabled:bg-black/90"} `}>
            {text} {
                isLoading && <ImSpinner9 size={25} className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                }
        </button>
    )
}

export default Button