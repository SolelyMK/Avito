import { type ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { setRevision } from "../state/filter/filterSlice";

function AtomSwitch(): ReactElement {
    const dispatch = useDispatch();

    function SwitchClickClosure(): () => void {
        const [flag, setFlag] = useState<boolean>(false);
        const checkbox = document.querySelector<HTMLInputElement>("#switch-checkbox");
        
        if (checkbox) checkbox.checked = flag;

        return () => {
                if (flag) {
                    setFlag(false);
                    if (checkbox) checkbox.checked = false;
                } else {
                    setFlag(true);
                    if (checkbox) checkbox.checked = true;
                }

                if (checkbox) checkbox.checked = flag;
        }
    }

    const HandleSwitchClick = SwitchClickClosure();

    return (
        <div id="switch" onClick={HandleSwitchClick} className="bg-[#BFBFBF] p-[2px] rounded-[16px] h-[22px] w-[44px] cursor-pointer">
            <input hidden type="checkbox" name="" id="switch-checkbox" onChange={(e) => dispatch(setRevision(e.target.checked))} />
            <div id="switch-point" className="aspect-square h-[18px] z-10 bg-[#fff] rounded-full pointer-events-none"></div>
        </div>
    )
}

export default AtomSwitch;