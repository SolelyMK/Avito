import { useEffect, type ReactElement } from "react";
import AtomAdvertisementGridItem from "../atoms/AtomAdvertisementGridItem";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { setItems } from "../state/items/itemsSlice";
import { GetAllItems } from "../utils/getAllItems";
import { translateCategory } from "../utils/translateCategory";

function MoleculeAdvertismentGrid(): ReactElement {
    const items = useSelector((state: RootState) => state.items.value);
    const dispatch = useDispatch();

    useEffect(() => {
        GetAllItems()
            .then((res) => {
                dispatch(setItems(res.data.items));
            })
            .catch((err) => console.warn(err));
    }, []);

    return (
        <div className="grid justify-between grid-cols-5 gap-[10px]">
            { items.map((i) => <AtomAdvertisementGridItem title={i.title} category={translateCategory(i.category)} needsRevision={i.needsRevision} price={i.price} />) }
        </div>
    )
}

export default MoleculeAdvertismentGrid;