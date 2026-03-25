import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import ollama from "ollama";

export async function GetAIPrice() {
    const item = useSelector((state: RootState) => state.currentItem.value);

    try {
        const result = await ollama.chat({
            model: "llama3.2",
            messages: [{role: "user", content: `Generate the most appropreate price for this item: ${item}`}]
        });

        return result;
    } catch (err) {
        console.warn(err);
    }
}