import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>SETTINGS</h1>
            <p>Here you can see or modify your settings.</p>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}