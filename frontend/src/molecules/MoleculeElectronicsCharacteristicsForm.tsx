import type { ReactElement } from "react";
import type { ElectronicsItemParams } from "../shared/sendTypes";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { CheckIfEmpty } from "../utils/checkIfEmpty";

type Props = {
    visible?: true
}

function MoleculeElectronicsCharacteristicsForm(props: Props): ReactElement {
    let params: ElectronicsItemParams = {};

    if (props.visible) {
        params = useSelector((state: RootState) => state.currentItem.value)?.params as ElectronicsItemParams;
    }

    return (
        <div className="flex flex-col gap-[10px]">
            <label htmlFor="type-select">Тип</label>
            <select name="type" id="type-select" defaultValue={params?.type} onChange={(e) => CheckIfEmpty(e)}>
                <option value="undefined">Тип</option>
                <option value="phone">Телефон</option>
                <option value="laptop">Ноутбук</option>
                <option value="misc">Другое</option>
            </select>
            <label htmlFor="brand-input">Бренд</label>
            <input name="brand" id="brand-input" type="text" placeholder="Бренд" defaultValue={params?.brand} onChange={(e) => CheckIfEmpty(e)} />
            <label htmlFor="model-input">Модель</label>
            <input name="model" id="model-input" type="text" placeholder="Модель" defaultValue={params?.model} onChange={(e) => CheckIfEmpty(e)} />
            <label htmlFor="condition-select">Состояние</label>
            <select name="condition" id="condition-select" defaultValue={params?.condition} onChange={(e) => CheckIfEmpty(e)}>
                <option value="undefined">Состояние</option>
                <option value="new">Новый</option>
                <option value="used">Использовался</option>
            </select>
            <label htmlFor="color-input">Цвет</label>
            <input name="color" id="color-input" type="text" placeholder="Цвет" defaultValue={params.color} onChange={(e) => CheckIfEmpty(e)} />
        </div>
    )
}

export default MoleculeElectronicsCharacteristicsForm;