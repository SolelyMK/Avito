import type { ReactElement } from "react";

type Props = {
    hidden: boolean
}

function AtomLoading(props: Props): ReactElement {
    return (
        <div hidden={props.hidden} className="absolute inset-0 w-full h-full p-[70px] flex justify-center text-[#5A5A5A] text-[30px] z-100 bg-[#fff]">
            <span>Loading...</span>
        </div>
    )
}

export default AtomLoading;