module.exports = class Page{
    constructor(drivers){
        this.title = 'My Page'
    }

    open (path){
        browser.url(path)
    }
}
