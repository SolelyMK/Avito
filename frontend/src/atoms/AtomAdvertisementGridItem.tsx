import type { ReactElement } from "react";
import AtomRevisionBlock from "./AtomRevisionBlock";

type Props = {
    category: string,
    title: string,
    price: number,
    img?: string,
    needsRevision?: boolean
}

function AtomAdvertismentGridItem(props: Props): ReactElement {
    let revisionBlock = props.needsRevision ? <AtomRevisionBlock /> : <></>

    return (
        <div className="border-1 border-[#F0F0F0] rounded-[16px] overflow-clip select-none cursor-pointer">
            <img src={props.img ?? '/src/assets/placeholder-image.png'} alt="" className="bg-[#FAFAFA] aspect-4/3 width-[200px] select-none pointer-events-none"/>
            <div className="relative w-0 h-0">
                <div className="absolute top-[-10px] clear-end mx-[12px] z-10 bg-[#fff] border-1 border-[#D9D9D9] rounded-[6px] px-[12px] text-(--main-text-color) text-[14px] w-min">{props.category}</div>
            </div>
            <div className="flex flex-col p-[16px] pt-[22px] bg-[#fff] gap-[4px] h-[117.99px] leading-[24px]">
                <span className="text-(--main-text-color) text-[16px] text-nowrap text-ellipsis overflow-hidden">{props.title}</span>
                <span className="text-[#00000073] font-semibold">{props.price} ₽</span>
                {revisionBlock}
            </div>
        </div>
    )
}

export default AtomAdvertismentGridItem;