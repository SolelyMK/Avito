import { type ReactElement } from "react";
import MoleculeAdvertisementGrid from "../molecules/MoleculeAdvertisementGrid";
import MoleculeAdvertisementList from "../molecules/MoleculeAdvertisementList";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";

function OrganismAdvertismentContainer(): ReactElement {
    const layout = useSelector((state: RootState) => state.layout.value);

    return (
        <div className="h-[650px] overflow-y-scroll">
            {
                layout === "grid" ? <MoleculeAdvertisementGrid /> : <MoleculeAdvertisementList />
            }
        </div>
    )
}

export default OrganismAdvertismentContainer;