export function translateCategory(c: string): string {
    switch (c) {
        case "auto":
            return "Авто";
        case "real_estate":
            return "Недвижимость";
        case "electronics":
            return "Электроника";
        default:
            return "";
    }
}