"use client"

import { urlFromParams } from "@/utils";
import { useRouter } from "next/navigation";
interface ViewAllButtonProps {
    value: string,
}
const ViewAllButton = ({ value }: ViewAllButtonProps) => {
    const router = useRouter();
    const handleClick = () => {
        let url = urlFromParams("productPlaylist", value);
        router.push(`/viewAll/${url}`, { scroll: false })
    }
    return (
        <button onClick={handleClick}>view all</button>
    )
}

export default ViewAllButton