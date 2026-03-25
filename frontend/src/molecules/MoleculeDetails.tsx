import type { ReactElement } from "react";
import AtomRevisionContainer from "../atoms/AtomRevisionContainer";
import type { AutoItemParams, ElectronicsItemParams, RealEstateItemParams } from "../shared/sendTypes";
import { Translations } from "../utils/paramTranslations";
import dataTranslator from "../utils/dataTranslator";

type Props = {
    params: AutoItemParams | RealEstateItemParams | ElectronicsItemParams
    img?: string
    needsRevision: boolean
}

function MoleculeDetails(props: Props): ReactElement {
    type Characteristic = {
        name: string,
        data: string
    }

    const params = props.params;

    const characteristics: Array<Characteristic> = [];
    const revFields: Array<string> = [];

    for (const p in params) {
        const name = String(Translations.get(p)) ?? "";
        let data: null | string | number = params[p as keyof typeof params];

        if (data === null) {
            revFields.push(name);
        } else {
            data = dataTranslator(data);

            characteristics.push({
                name: name,
                data: data
            })
        }
    }

    const CharacteristicsBlock = characteristics.map((i) => 
        <div className="leading-[140%] flex gap-[12px]">
            <span className="text-[#00000073] font-semibold w-[148px]">{ i.name }</span>
            <span>{ i.data }</span>
        </div>
    );

    return (
        <div className="h-min flex gap-[32px]">
            <div className="aspect-4/3 w-[480px] bg-[#FAFAFA] h-min">
                <img src={props.img ?? "/src/assets/placeholder-image.png"} alt="" />
            </div>
            <div className="flex flex-col gap-[36px]">
                { props.needsRevision ? <AtomRevisionContainer names={revFields} /> : <div></div> }
                <div className="flex flex-col gap-[16px] h-min">
                    <span className="text-[22px] leading-[28px] font-[500] text-(--main-text-color)">Характеристики</span>
                    <div className="flex flex-col gap-[6px] w-max">
                        { CharacteristicsBlock }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoleculeDetails