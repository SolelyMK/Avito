import type { ReactElement } from "react";
import AtomRevisionBlock from "./AtomRevisionBlock";

type Props = {
    category: string,
    title: string,
    price: number,
    img?: string,
    needsRevision?: boolean
}

function AtomAdvertisementListItem(props: Props): ReactElement {
    const RevisionBlock = props.needsRevision ? <AtomRevisionBlock /> : <></>

    return (
        <div className="flex bg-[#fff] border-1 border-[#F0F0F0] rounded-[16px] overflow-clip cursor-pointer">
            <div className="bg-[#FAFAFA]">
                <img src={props.img ?? "/src/assets/placeholder-image.png"} alt="" className="aspect-4/3 h-[132px]" />
            </div>
            <div className="grow flex flex-col p-[16px_16px_16px_24px] gap-[4px]">
                <span className="text-[14px] leading-[100%] text-[#848388]">{props.category}</span>
                <span className="text-[16px] text-(--main-text-color)">{props.title}</span>
                <span className="font-semibold text-[#00000073] leading-[140%]">{props.price} ₽</span>
                { RevisionBlock }
            </div>
        </div>
    )
}

export default AtomAdvertisementListItem;