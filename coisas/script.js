document.getElementById("btnNao").addEventListener("mouseover", function() {
    var novoTopo = Math.floor(Math.random() * (this.parentNode.offsetHeight - this.offsetHeight));
    var novoEsquerda = Math.floor(Math.random() * (this.parentNode.offsetWidth - this.offsetWidth));
    
    // Verifica se a nova posição ultrapassa os limites da div
    if (novoTopo + this.offsetTop > this.parentNode.offsetTop + this.parentNode.offsetHeight - this.offsetHeight) {
       novoTopo = this.parentNode.offsetTop + this.parentNode.offsetHeight - this.offsetHeight - this.offsetTop;
    }
    
    if (novoEsquerda + this.offsetLeft > this.parentNode.offsetLeft + this.parentNode.offsetWidth - this.offsetWidth) {
       novoEsquerda = this.parentNode.offsetLeft + this.parentNode.offsetWidth - this.offsetWidth - this.offsetLeft;
    }
    
    this.style.top = novoTopo + "px";
    this.style.left = novoEsquerda + "px";
 });
 