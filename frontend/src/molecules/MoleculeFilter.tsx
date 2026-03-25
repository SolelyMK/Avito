import type { ReactElement } from "react";
import AtomFilterCategories from "../atoms/AtomFilterCategories";
import AtomSwitch from "../atoms/AtomSwitch";

function MoleculeFilter(): ReactElement {
    return (
        <div className="flex flex-col gap-[10px]">
            <div className="bg-[#fff] p-[16px] flex flex-col gap-[10px] rounded-[8px]">
                <span className="text-(--main-text-color) text-[16px] leading-[24px] font-[500]">Фильтры</span>
                <AtomFilterCategories />
                <div className="bg-[#F0F0F0] h-[1px]"></div>
                <div className="flex items-center">
                    <div className="grow font-semibold leading-[140%] text-(--main-text-color)">Только требующие доработок</div>
                    <AtomSwitch />
                </div>
            </div>
            <button className="p-[12px] gap-[10px] bg-[#fff] rounded-[8px] flex justify-center h-[41px] select-none cursor-pointer">
                <span className="leading-[100%] text-[#848388] text-[14px]">Сбросить фильтры</span>
            </button>
        </div>
    )
}

export default MoleculeFilter;