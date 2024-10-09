function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector('#profile img')

  //subistituir a img
  if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src','./assets/MinhaFoto.png')
  }else{
    //se tiver sem light mode, manter a imagem
    img.setAttribute('src','./assets/KesperFoto.png')

  }

}