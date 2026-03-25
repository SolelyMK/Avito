export function CheckIfEmpty(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, HTMLInputElement>): void {
    if (!e.target.value || e.target.value == "undefined") {
        e.target.style.borderColor = "#FFA940";
    } else {
        e.target.style.borderColor = "#D9D9D9";
    }
}