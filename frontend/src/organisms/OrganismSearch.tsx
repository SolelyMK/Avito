import type { ReactElement } from "react";
import MoleculeSearchBar from "../molecules/MoleculeSearchBar";
import MoleculeLayoutSwitch from "../molecules/MoleculeLayoutSwitch";
import AtomDropdownList from "../atoms/AtomDropdownList";

function OrganismSearch(): ReactElement {
    return (
        <div className="bg-[#fff] gap-[24px] p-[12px] rounded-[8px] h-[56px] flex">
            <MoleculeSearchBar />
            <MoleculeLayoutSwitch />
            <AtomDropdownList />
        </div>
    )
}

export default OrganismSearch;