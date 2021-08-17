window.onload = function() {
    setOnClick();    
};

function setOnClick(){
    document.getElementById("botao-assistir").addEventListener("click", this.showHiddenModal.bind(this))
    document.getElementById("botao-close").addEventListener("click", this.showHiddenModal.bind(this))
    document.getElementById("botao-informacao").addEventListener("click", this.showHiddenModalInfomation.bind(this))
    document.getElementById("botao-close-informacao").addEventListener("click", this.showHiddenModalInfomation.bind(this))


}

function showHiddenModal(){
    let element = document.getElementById("modal-assistir")
    let style = getComputedStyle(element)
    style.display == "none" ? element.style.display = "block" : element.style.display = "none"
}


function showHiddenModalInfomation(){
    let element = document.getElementById("modal-informacao")
    let style = getComputedStyle(element)
    style.display == "none" ? element.style.display = "block" : element.style.display = "none"
}

