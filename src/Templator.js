
export class Templator {
    // template - string
    constructor(template, regexp = /\{\{(.*?)\}\}/gi) {
        this.template = template;
        this.TEMPLATE_REGEXP = regexp;
    }

    complite(ctx) {
        return this._compileTemplate(ctx);
    }

    // _compileTemplate(ctx) {

    // }

}



