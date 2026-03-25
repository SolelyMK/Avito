import { type ReactElement } from "react";
import AtomLayoutButton from "../atoms/AtomLayoutButton";

function MoleculeLayoutSwitch(): ReactElement {
    return (
        <div className="rounded-[8px] bg-(--input-color) flex basis-[73px] items-center justify-between">
            <input hidden type="checkbox" name="" id="layout-checkbox" />
            <AtomLayoutButton icon="/src/assets/grid.svg" icon_selected="/src/assets/grid_selected.svg" type="grid" />
            <div className="h-[28px] w-[2px] bg-[#fff]"></div>
            <AtomLayoutButton icon="/src/assets/list.svg" icon_selected="/src/assets/list_selected.svg" type="list" />
        </div>
    )
}

export default MoleculeLayoutSwitch;