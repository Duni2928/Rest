function togglePaddingOfBody() {
  if (!document.body.classList.contains("no-scroll")) {
    let paddingValue = window.innerWidth - document.documentElement.clientWidth + 'px'
    document.body.style.paddingRight = paddingValue
  } else {
    document.body.style.paddingRight = '0px'
  } 
}
