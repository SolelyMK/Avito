import { useEffect, useState, type ReactElement } from "react";
import MoleculeAutoCharacteristicsForm from "../molecules/MoleculeAutoCharacteristicsForm";
import MoleculeRealEstateCharacteristicsForm from "../molecules/MoleculeRealEstateCharacteristicsForm";
import MoleculeElectronicsCharacteristicsForm from "../molecules/MoleculeElectronicsCharacteristicsForm";
import AtomAIButton from "../atoms/AtomAIButton";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { Link, useParams } from "react-router";
import GetUserById from "../utils/getUserById";
import { setItem } from "../state/currentItem/currentAdvertisementSlice";
import axiosConfig from "../api/axiosConfig";
import AtomLoading from "../atoms/AtomLoading";
import { GetAIPrice } from "../utils/getAIPrice";

function PageEditItem(): ReactElement {
    const item = useSelector((state: RootState) => state.currentItem.value);
    const loading = useSelector((state: RootState) => state.loading.value);
    const { id } = useParams();
    const dispatch = useDispatch();
    const [categoryBlock, setCategoryBlock] = useState(<MoleculeAutoCharacteristicsForm />);

    function HandleTypeChange(e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>): void {
        const select = e.target as HTMLSelectElement;

        switch (select.value) {
            case "auto":
                setCategoryBlock(<MoleculeAutoCharacteristicsForm />);
                break;
            case "real_estate":
                setCategoryBlock(<MoleculeRealEstateCharacteristicsForm />);
                break;
            case "electronics":
                setCategoryBlock(<MoleculeElectronicsCharacteristicsForm />);
                break;
        }
    }

    async function HandleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const { category, title, description, price, ...params } = data;
        let needsRevision: boolean = false
        for (const p in params) {
            if (!params[p as keyof typeof params]) {
                needsRevision = true
            }
        }
        const body = {
            id: id,
            category: category,
            title: title,
            description: description,
            price: Number(price),
            createdAt: item?.createdAt ?? new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            params: params,
            needsRevision: needsRevision
        }

        try {
            const result = await axiosConfig.put(`/items/${id}`, body);
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        if (id) {
            GetUserById(Number(id))
                .then((res) => {
                    dispatch(setItem(res.data));

                    switch (res.data.category) {
                        case "auto":
                            setCategoryBlock(<MoleculeAutoCharacteristicsForm visible />);
                            break;
                        case "electronics":
                            setCategoryBlock(<MoleculeElectronicsCharacteristicsForm visible />);
                            break;
                        case "real_estate":
                            setCategoryBlock(<MoleculeRealEstateCharacteristicsForm visible />);
                            break;
                    }

                    document.querySelector<HTMLSelectElement>("#category-select")!.value = res.data.category;
                    document.querySelector<HTMLInputElement>("#submit-btn")!.removeAttribute("disabled");
                    document.querySelector<HTMLInputElement>("#submit-btn")!.style.backgroundColor = "#1890FF";
                })
                .catch((err) => console.warn(err));
        }
    }, []);

    function CheckMainFields(): void {
        const titleField = document.querySelector<HTMLInputElement>("#title-input");
        const priceField = document.querySelector<HTMLInputElement>("#price-input");
        const submit = document.querySelector<HTMLInputElement>("#submit-btn")!

        if (titleField!.value && priceField!.value) {
            submit.removeAttribute("disabled");
            submit.style.backgroundColor = "#1890FF";
            
        } else {
            submit.setAttribute("disabled", "");
            submit.style.backgroundColor = "#D9D9D9";
        }
    }

    function HandlePriceClick(): void {
        GetAIPrice()
            .then((res) => {
                console.log(res);
            });
    }

    return (
        <div className="absolute inset-0 bg-[#F1F1F1] w-full h-min">
            <AtomLoading hidden={loading} />
            <div className="bg-[#fff] w-[1103px] h-min p-[32px] pb-[48px] rounded-[16px] flex flex-col gap-[18px]">
                <h2 className="text-[30px] leading-[40px] font-medium text-(--main-text-color) font-['Roboto',sans-serif]">Редактирование объявления</h2>
                <form onSubmit={(e) => HandleSubmit(e)} id="edit-form" className="flex flex-col gap-[18px]">
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="category-select" className="text-[16px] leading-[140%] font-semibold text-(--main-text-color)">Категория</label>
                        <select name="category" id="category-select" className="w-[256px_!important] cursor-pointer" defaultValue={item?.category}  onChange={(e) => HandleTypeChange(e)}>
                            <option value="auto">Авто</option>
                            <option value="real_estate">Недвижимость</option>
                            <option value="electronics">Электроника</option>
                        </select>
                    </div>
                    <div className="form-line"></div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="title-input" className="flex gap-[8px]">
                            <span className="text-[#FF4D4F] text-[14px] leading-[22px]">*</span>
                            <span className="text-[16px] leading-[140%] font-semibold text-(--main-text-color)">Название</span>
                        </label>
                        <input onChange={CheckMainFields} name="title" id="title-input" type="text" className="w-[456px]" required defaultValue={item?.title}/>
                    </div>
                    <div className="form-line"></div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="price-input" className="flex gap-[8px]">
                                <span className="text-[#FF4D4F] text-[14px] leading-[22px]">*</span>
                                <span className="text-[16px] leading-[140%] font-semibold text-(--main-text-color)">Цена</span>
                        </label>
                        <div className="flex gap-[24px]">
                            <input onChange={CheckMainFields} name="price" id="price-input" type="number" className="w-[456px]" required defaultValue={item?.price}/>
                            <AtomAIButton text="Узнать рыночную цену" />
                        </div>
                    </div>
                    <div className="form-line"></div>
                    <div className="flex flex-col gap-[8px]">
                        <span className="text-[16px] leading-[140%] font-semibold text-(--main-text-color)">Характеристики</span>
                        { categoryBlock }
                    </div>
                    <div className="form-line"></div>
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="description-textarea">Описание</label>
                        <textarea name="description" id="description-textarea" className="w-[942px] border border-[#D9D9D9] rounded-[8px] p-[8px_16px]" placeholder="Описание" maxLength={1000} defaultValue={item?.description ?? undefined}></textarea>
                        <AtomAIButton text="Улучшить описание" />
                    </div>
                    <div className="flex gap-[10px] pt-[16px]">
                        <input disabled type="submit" id="submit-btn" className="p-[8px_12px_!important] bg-[#D9D9D9] text-[#F3F3F3_!important] cursor-pointer rounded-[8px] w-[min-content_!important]" value="Сохранить" />
                        <Link to={`/ads/${id}`} className="p-[8px_12px] bg-[#D9D9D9] text-[#5A5A5A] cursor-pointer rounded-[8px]">Отменить</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PageEditItem;