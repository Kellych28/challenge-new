class utilities {
    static getByCssSelector(selector, ...args) {
        return cy.get(`[data-qa="${selector}"]`, ...args);
    }
    static getByType(selector, ...args) {
        return cy.get(`[type="${selector}"]`, ...args);
    }
    static getById(selector, ...args) {
        return cy.get(`#${selector}`, ...args);
    }
    static getByButtonClass(selector, ...args) {
        return cy.get(`button[class="${selector}"]`, ...args);
    }
    static getButtonByText(text, ...args) {
        return cy.contains('button', text, ...args);
    }
    static getByHref(selector, ...args) {
        return cy.get(`a[href="${selector}"]`, ...args);
    }
    static getByClass(selector, ...args) {
        return cy.get(`[class="${selector}"]`, ...args);
    }
    static getByName(selector, ...args) {
        return cy.get(`[name="${selector}"]`, ...args);
    }
    static getButtonByDataAt(value) {
        return cy.get(`button[data-at="${value}"]`);
    }
    static getRandomData(json) {
        const data = {};
        for (let key in json) {
            const values = json[key];
            const randomIndex = Math.floor(Math.random() * values.length);
            data[key] = values[randomIndex];
        }
        return data;
    }
}
export default utilities;
