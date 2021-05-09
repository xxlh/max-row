
class maxRow{
    constructor(options){
        options.dialog = options.dialog || alert;
        this.selector = options.selector;
        this.row = options.row || 3;
        this.textStorage = [];
        this.editArea = this.createDom();
        this.addEvents();
    }

    setText (text) {
        this.editArea.innerText = text
    }
    createDom(){
        let editArea=document.createElement("div");
        editArea.style.outline="none";
        editArea.setAttribute("contenteditable",true);
        document.querySelector(this.selector).appendChild(editArea)
        this.editAreaLineHeight = parseInt(getComputedStyle(editArea).lineHeight);
        return editArea;
    }
    addEvents () {
        let Self = this;
        this.editArea.onkeyup = function(e){
            let v = this.innerText;
            if (this.offsetHeight > Self.editAreaLineHeight*Self.row) {
                this.innerText = Self.textStorage.pop()
                this.blur();
                swal(`超出了,最多${Self.row}行哦～～`);
            } else {
                Self.textStorage.push(v);
            }
            
        };
        this.editArea.onkeydown = function(e){
            let keycode = (e.keyCode ? e.keyCode : e.which);
            if (this.offsetHeight > Self.editAreaLineHeight*Self.row) {
                if (keycode >= 48 || keycode == 13) return false;
            }
        };
        this.editArea.onblur = function(e){
            let v = this.innerText;
            if (this.offsetHeight > Self.editAreaLineHeight*Self.row) {
                this.innerText = Self.textStorage.pop()
                this.blur();
                options.dialog(`超出了,最多${Self.row}行哦～～`);
            }
        };
    }
}

export default maxRow;