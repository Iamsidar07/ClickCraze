import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Sanity Studio",
    description: "Sanity Studio of this project"
}

const StudioLayout = ({ children }: { children: ReactNode }) => {
    return <>{ children }</>
}

export default StudioLayout