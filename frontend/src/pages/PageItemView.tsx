import { useEffect, type ReactElement } from "react";
import MoleculeMainInfo from "../molecules/MoleculeMainInfo";
import MoleculeDetails from "../molecules/MoleculeDetails";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { useParams } from "react-router";
import { setItem } from "../state/currentItem/currentAdvertisementSlice";
import GetUserById from "../utils/getUserById";

function PageItemView(): ReactElement {
    const item = useSelector((state: RootState) => state.currentItem.value);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            GetUserById(Number(id))
                .then((res) => {
                    dispatch(setItem(res.data));
                })
                .catch((err) => console.warn(err));
        }
    }, [])

    return (
        <div id="page-edit-item" className="absolute inset-0 w-full h-full flex flex-col p-[32px] pb-[48px] gap-[32px] bg-[#fff]">
            <MoleculeMainInfo title={item?.title ?? ""} price={item?.price ?? 0} createdAt={item?.createdAt ?? ""} updatedAt={item?.updatedAt ?? ""} />
            <div className="bg-[#F0F0F0] h-[1px]"></div>
            <MoleculeDetails params={item?.params ?? {}} needsRevision={item?.needsRevision ?? false}/>
            <div>
                <div className="w-[480px] flex flex-col gap-[16px]">
                    <span className="font-medium text-(--main-text-color) text-[22px] leading-[28px]">Описание</span>
                    <p className="leading-[140%] text-[#1E1E1E] text-[16px]">{ item?.description ? item.description : "Отсутствует" }</p>
                </div>
            </div>
        </div>
    )
}

export default PageItemView;