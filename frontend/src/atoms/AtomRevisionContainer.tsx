import type { ReactElement } from "react";

type Props = {
    names: Array<string>
}

function AtomRevisionContainer(props: Props): ReactElement {
    const listItemsArray = props.names.map((i) => <li className="list-item">{ i }</li>);

    return (
        <div className="bg-[#F9F1E6] p-[12px_16px] rounded-[8px] w-[512px] h-min flex gap-[16px] drop-shadow-[0_9px_28px_#0000000D,0_6px_16px_#00000014]">
            <div>
                <img src="/src/assets/exclamation.svg" alt="" />
            </div>
            <div className="flex flex-col gap-[4px]">
                <div>
                    <span className="font-semibold text-[16px] leading-[24px] text-[#1E1E1E]">Требуются доработки</span>
                </div>
                <div className="text-(--main-text-color) text-[14px] leading-[22px]">
                    <p>У объявления не заполнены поля:</p>
                    <ul className="list-disc list-inside">
                        { listItemsArray }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AtomRevisionContainer;