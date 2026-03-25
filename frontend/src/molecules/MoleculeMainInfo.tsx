import type { ReactElement } from "react";
import AtomEditButton from "../atoms/AtomEditButton";

type Props = {
    title: string,
    price: number,
    createdAt: string,
    updatedAt: string
}

function MoleculeMainInfo(props: Props): ReactElement {
    return (
        <div className="h-min flex flex-col gap-[12px]">
            <div className="text-[30px] leading-[40px] text-(--main-text-color) font-[500] justify-between h-min">
                <span className="float-left">{props.title}</span>
                <span className="float-right">{props.price} ₽</span>
            </div>
            <div className="flex justify-between h-min">
                <AtomEditButton />
                <div className="flex flex-col text-[#848388] text-[16px] leading-[100%] ml-auto text-right gap-[4px]">
                    <span>{props.createdAt}</span>
                    <span>{props.updatedAt}</span>
                </div>
            </div>
        </div>
    )
}

export default MoleculeMainInfo;