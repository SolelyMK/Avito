import type { ReactElement } from "react";
import { Link } from "react-router";

function AtomEditButton(): ReactElement {
    return (
        <Link to={`/ads/${1}/edit`} className="p-[8px_12px] bg-(--blue-color) rounded-[8px] gap-[8px] h-min w-min flex items-center cursor-pointer">
            <span className="text-[#F3F3F3] leading-[140%] text-[16px]">Редактировать</span>
            <div className="aspect-square h-[18px] flex justify-center items-center">
                <img src="/src/assets/edit.svg" alt="" className="aspect-square h-[16.7px] pointer-events-none" />
            </div>
        </Link>
    )
}

export default AtomEditButton;