import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>POSTS</h1>
            <p>These are all the exiting posts.</p>
        `;
    }
}