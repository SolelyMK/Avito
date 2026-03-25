import type { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import axiosConfig from "../api/axiosConfig";
import { setTitle } from "../state/filter/filterSlice";
import { setItems } from "../state/items/itemsSlice";
import { setLoading } from "../state/loading/loadingSlice";

function MoleculeSearchBar(): ReactElement {
    const filter = useSelector((state: RootState) => state.filter.value);
    const dispatch = useDispatch();

    async function GetItemsByFilters() {
        dispatch(setLoading(true));

        try {
            const categories: Array<string> = [];

            for (const c in filter.category) {
                if (filter.category[c as keyof typeof filter.category]) {
                    categories.push(c);
                }
            }

            const params = {
                sortColumn: filter.sort[0],
                sortDirection: filter.sort[1]
            };

            if (categories.join(",")) {
                params.categories = categories.join(",");
            }

            if (filter.title) {
                params.title = filter.title;
            }

            if (filter.onlyNeedsRevision) {
                params.needsRevision = true;
            }


            const result = await axiosConfig.get('items?' + new URLSearchParams(params));
            dispatch(setLoading(false));

            return result;
        } catch (err) {
            console.warn(err);
            dispatch(setLoading(false));
        }
    }

    function HandleSubmit(e: React.SubmitEvent<HTMLFormElement>): void {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        dispatch(setTitle(data.title));

        GetItemsByFilters()
            .then((res) => {
                dispatch(setItems(res?.data.items));
            });
    }

    return (
        <form className="flex bg-(--input-color) rounded-[8px] grow" onSubmit={(e) => HandleSubmit(e)}>
            <input name="title" type="text" placeholder="Найти объявление..." className="text-[#707176] p-[5px_12px] grow cursor-text" />
            <input type="submit" value="" className="basis-[38px] p-[9px_12px] cursor-pointer bg-[url(/src/assets/search.svg)] bg-no-repeat bg-[center_center]" />
        </form>
    )
}

export default MoleculeSearchBar;