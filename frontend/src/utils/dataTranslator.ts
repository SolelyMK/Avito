function dataTranslator(data: any): string {
    switch (data) {
        case "automatic":
            data = "Автоматическая";
            break;
        case "manual":
            data = "Ручная";
            break;
        case "flat":
            data = "Квартира";
            break;
        case "house":
            data = "Дом";
            break;
        case "room":
            data = "Комната";
            break;
        case "phone":
            data = "Телефон";
            break;
        case "laptop":
            data = "Ноутбук";
            break;
        case "misc":
            data = "Прочее";
            break;
        case "new":
            data = "Новый";
            break;
        case "used":
            data = "Использовался";
            break;
        default:
            data = String(data);
            break;
    }

    return data;
}

export default dataTranslator;