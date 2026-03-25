import type { ReactElement } from "react";

function AtomRevisionBlock(): ReactElement {
    return (
        <div className="bg-[#F9F1E6] p-[2px_8px] rounded-[8px] text-[#FAAD14] flex gap-[8px] items-center w-min text-nowrap">
                    <div className="flex items-center font-bold">&#x2022;</div>
                    <span className="leading-[22px] text-[14px]">Требует доработок</span>
        </div>
    )
}

export default AtomRevisionBlock;