import type { ReactElement } from "react";
import type { RealEstateItemParams } from "../shared/sendTypes";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { CheckIfEmpty } from "../utils/checkIfEmpty";

type Props = {
    visible?: true;
}

function MoleculeRealEstateCharacteristicsForm(props: Props): ReactElement {
    let params: RealEstateItemParams = {};

    if (props.visible) {
        params = useSelector((state: RootState) => state.currentItem.value)?.params as RealEstateItemParams;
    }

    return (
        <div className="flex flex-col gap-[10px]">
            <label htmlFor="type-select">Тип</label>
            <select name="type" id="type-select" defaultValue={params?.type} onChange={(e) => CheckIfEmpty(e)}>
                <option value="undefined">Тип</option>
                <option value="flat">Квартира</option>
                <option value="house">Дом</option>
                <option value="room">Комната</option>
            </select>
            <label htmlFor="address-input">Адрес</label>
            <input name="address" id="address-input" type="text" placeholder="Адрес" defaultValue={params?.address} onChange={(e) => CheckIfEmpty(e)} />
            <label htmlFor="area-input">Площадь</label>
            <input name="area" id="area-input" type="number" placeholder="Площадь" min={0} defaultValue={params?.area} onChange={(e) => CheckIfEmpty(e)}/>
            <label htmlFor="floor-input">Этаж</label>
            <input name="floor" id="floor-input" type="number" min={0} placeholder="Этаж" defaultValue={params?.floor} onChange={(e) => CheckIfEmpty(e)} />
        </div>
    )
}

export default MoleculeRealEstateCharacteristicsForm;