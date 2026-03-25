import type { ReactElement } from "react";

type Props = {
    text: string
}

function AtomAIButton(props: Props): ReactElement {
    return (
        <button className="bg-[#F9F1E6] text-[#FFA940] p-[5px_7px] flex gap-[10px] text-[14px] leading-[22px] items-center rounded-[8px] cursor-pointer w-min text-nowrap font-['Roboto',sans-serif]">
            <div className="aspect-square h-[14px] flex justify-center items-center">
                <img src="/src/assets/bulb.svg" alt="" />
            </div>
            <span>{ props.text }</span>
        </button>
    )
}

export default AtomAIButton;