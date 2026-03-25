import type { ReactElement } from "react";

type Props = {
    advNum: number
}

function AtomSellerInfo(props: Props): ReactElement {
    return (
        <div className="flex flex-col px-[8px] gap-[10px]">
            <span className="text-(--main-text-color) text-[22px]">Мои объявления</span>
            <span className="text-(--secondary-text-color) text-[18px]">{props.advNum} объявления</span>
        </div>
    )
}

export default AtomSellerInfo;