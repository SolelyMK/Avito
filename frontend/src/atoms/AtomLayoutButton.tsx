import { useEffect, type ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGrid, setList } from "../state/layout/layoutSlice";
import type { RootState } from "../state/store";

type Props = {
    icon: string,
    icon_selected: string,
    type: "grid" | "list"
}

function AtomLayoutButton(props: Props): ReactElement {
    const id = props.type + "-btn";
    const layout = useSelector((state: RootState) => state.layout.value);
    const dispatch = useDispatch();

    function HandleButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const type = props.type;
        const btn = e.target as HTMLButtonElement;
        const img = btn.children[0] as HTMLImageElement;
        let otherBtn;

        if (type === "grid") {
            dispatch(setGrid());
            otherBtn = document.querySelector<HTMLButtonElement>('#list-btn');

            otherBtn!.children[0].setAttribute("src", "/src/assets/list.svg");
        } else {
            dispatch(setList());
            otherBtn = document.querySelector<HTMLButtonElement>('#grid-btn');

            otherBtn!.children[0].setAttribute("src", "/src/assets/grid.svg");
        }

        img.setAttribute("src", props.icon_selected);
    }

    function HandleButtonHover(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const btn = e.target as HTMLButtonElement;
        const img = btn.children[0] as HTMLImageElement;

        img.setAttribute("src", props.icon_selected);
    }

    function HandleMouseUnhover(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const btn = e.target as HTMLButtonElement;
        const img = btn.children[0] as HTMLImageElement;

        if (props.type !== layout) {
            img.setAttribute("src", props.icon);
        } else {
            img.setAttribute("src", props.icon_selected);
        }       
    }

    return (
        <button id={id} onClick={(e) => HandleButtonClick(e)} onMouseEnter={(e) => HandleButtonHover(e)} onMouseLeave={(e) => HandleMouseUnhover(e)} className="flex justify-center items-center aspect-square h-[32px] cursor-pointer">
            <img src={props.type === "grid" ? props.icon_selected : props.icon} alt="" className="aspect-square h-[18px] pointer-events-none" />
        </button>
    )
}

export default AtomLayoutButton;