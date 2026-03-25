import type { ReactElement } from "react";
import AtomSellerInfo from "../atoms/AtomSellerInfo";
import OrganismSearch from "../organisms/OrganismSearch";
import OrganismAdvertisementContainer from "../organisms/OrganismAdvertisementContainer";
import MoleculeFilter from "../molecules/MoleculeFilter";

function PageAdvertisements(): ReactElement {
    return (
        <div className="absolute inset-0 w-full h-full flex flex-col p-[12px_32px] gap-[16px]">
            <AtomSellerInfo advNum={42} />
            <OrganismSearch />
            <main className="grid grid-rows-1 grid-cols-[256px_1fr] grow gap-[24px]">
                <MoleculeFilter />
                <OrganismAdvertisementContainer />
            </main>
        </div>
    )
}

export default PageAdvertisements;