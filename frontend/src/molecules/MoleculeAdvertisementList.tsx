import { useEffect, type ReactElement } from "react";
import AtomAdvertisementListItem from "../atoms/AtomAdvertisementListItem";
import { GetAllItems } from "../utils/getAllItems";
import { setItems } from "../state/items/itemsSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { translateCategory } from "../utils/translateCategory";

function MoleculeAdvertismentList(): ReactElement {
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
        <div className="grid grid-cols-1 justify-between gap-[10px]">
            { items.map((i) => <AtomAdvertisementListItem title={i.title} category={translateCategory(i.category)} needsRevision={i.needsRevision} price={i.price} />) }
        </div>
    )
}

export default MoleculeAdvertismentList;