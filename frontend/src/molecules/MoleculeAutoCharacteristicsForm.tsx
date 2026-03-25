import { type ReactElement } from "react";
import type { AutoItemParams } from "../shared/sendTypes";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { CheckIfEmpty } from "../utils/checkIfEmpty";

type Props = {
    visible?: true;
}

function MoleculeAutoCharacteristicsForm(props: Props): ReactElement {
    let params: AutoItemParams = {};
    
    if (props.visible) {
        params = useSelector((state: RootState) => state.currentItem.value)!.params as AutoItemParams;
    }
    
    return (
        <div className="flex flex-col gap-[10px]">
            <label htmlFor="brand-input">Бренд</label>
            <input name="brand" id="brand-input" type="text" placeholder="Бренд" defaultValue={params?.brand} onChange={(e) => CheckIfEmpty(e)} />
            <label htmlFor="model-input">Модель</label>
            <input name="model" id="model-input" type="text" placeholder="Модель" defaultValue={params?.model} onChange={(e) => CheckIfEmpty(e)} />
            <label htmlFor="yearOfManufacture-input">Год изготавления</label>
            <input name="yearOfManufacture" id="yearOfManufacture-input" type="number" min={0} placeholder="Год изготавления" defaultValue={params?.yearOfManufacture} onChange={(e) => CheckIfEmpty(e)} />
            <label htmlFor="transmission-select">Коробка передач</label>
            <select name="transmission" id="transmission-select" defaultValue={params?.transmission} onChange={(e) => CheckIfEmpty(e)}>
                <option value="undefined" selected>Коробка передач</option>
                <option value="automatic">Автоматическая</option>
                <option value="manual">Ручная</option>
            </select>
            <label htmlFor="mileage-input">Пробег</label>
            <input name="mileage" id="mileage-input" type="number" min={0} placeholder="Пробег" defaultValue={params?.mileage} onChange={(e) => CheckIfEmpty(e)} />
            <label htmlFor="enginePower-input">Мощность двигателя</label>
            <input name="enginePower" id="enginePower-input" type="number" min={0} placeholder="Мощность двигателя" defaultValue={params?.enginePower} onChange={(e) => CheckIfEmpty(e)} />
        </div>
    )
}

export default MoleculeAutoCharacteristicsForm;