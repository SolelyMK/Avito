import type { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../state/filter/filterSlice";

function AtomDropdownList(): ReactElement {
    const dispatch = useDispatch();

    function HandleChange(e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>): void {
        dispatch(setSort(e.target.value.split("&")));
    }

    return (
        <select name="" id="sort-select" className="rounded-[8px] bg-[#fff] p-[5px_16px] pt-0 border-4 border-(--input-color) cursor-pointer text-(--main-text-color)" onChange={(e) => HandleChange(e)}>
            <option value="createdAt&asc">По новизне (сначала новые)</option>
            <option value="createdAt&desc">По новизне (сначала старые)</option>
            <option value="title&asc">По названию (А → Я)</option>
            <option value="title&desc">По названию (Я → А)</option>
            <option hidden value="price&asc">По цене (сначала дешевле)</option>
            <option hidden value="price&desc">По цене (сначала дороже)</option>
        </select>
    )
}

export default AtomDropdownList;