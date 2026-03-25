import { useState, type JSX, type ReactElement } from "react";
import { setAuto, setElectronics, setRealEstate } from "../state/filter/filterSlice";
import { useDispatch } from "react-redux";

function AtomFilterCategories(): ReactElement {
    const dispatch = useDispatch();

    const categoriesList: JSX.Element[] = [
        <p className="flex gap-[8px] text-[14px] leading-[22px]">
            <input type="checkbox" name="auto" id="auto-checkbox" onChange={(e) => dispatch(setAuto(e.target.checked))} />
            <label htmlFor="auto-checkbox">Авто</label>
        </p>,
        <p className="flex gap-[8px] text-[14px] leading-[22px]">
            <input type="checkbox" name="electronics" id="electronics-checkbox" onChange={(e) => dispatch(setElectronics(e.target.checked))} />
            <label htmlFor="electronics-checkbox">Электроника</label>
        </p>,
        <p className="flex gap-[8px] text-[14px] leading-[22px]">
            <input type="checkbox" name="real_estate" id="real_estate-checkbox" onChange={(e) => dispatch(setRealEstate(e.target.checked))} />
            <label htmlFor="real_estate-checkbox">Недвижимость</label>
        </p>
    ]

    const [visibleList, setVisibleList] = useState<JSX.Element | JSX.Element[]>(<></>);

    function ListHeaderClosure(): () => void {
        const [flag, setFlag] = useState(false);
        const checkbox = document.querySelector<HTMLInputElement>("#list-checkbox");
        if (checkbox) checkbox.checked = flag;

        return () => {
            if (flag) {
                setFlag(false);
                if (checkbox) checkbox.checked = false;
                setVisibleList(<></>);
            } else {
                setFlag(true);
                if (checkbox) checkbox.checked = true;
                setVisibleList(categoriesList);
            }
        }
    }

    const HandleListHeaderClick = ListHeaderClosure();

    return (
        <div>
            <div onClick={HandleListHeaderClick} className="flex gap-[12px] cursor-pointer">
                <span className="text-center text-(--main-text-color) text-[14px] leading-[22px] select-none">Категория</span>
                <div className="h-[12px] w-[12px] my-auto ml-auto flex">
                    <input hidden type="checkbox" name="" id="list-checkbox" />
                    <img height="6.86" width="10.18" src="/src/assets/arrow.svg" alt="" className="h-[6.86px] w-[10.18px] m-auto select-none" id="arrow-img" />
                </div>
            </div>
            <div className="py-[8px]">
                { visibleList }
            </div>
        </div>
    )
}

export default AtomFilterCategories;