

class Templator {
    // template - string
    constructor(template) {
        this.template = template;
        this.TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
    }

    complite(ctx) {
        return this._compileTemplate(ctx);
    }

    _compileTemplate(ctx) {

    }

}

module.exports = Templator

