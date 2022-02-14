var inputEye = document.querySelector('#input .inputPassword')
var img = document.querySelector('#input .iconEye')
var img2 = document.querySelector('#input .iconEyeClose')
var x = document.getElementById('hide1')
var y = document.getElementById('hide2')

img.addEventListener('click', function () {
  inputEye.type = inputEye.type == 'text' ? 'password' : 'text'

  if (inputEye.type === 'password') {
    x.style.display = 'block'
    y.style.display = 'none'
  }
  if (inputEye.type === 'text') {
    x.style.display = 'none'
    y.style.display = 'block'
  }
})

img2.addEventListener('click', function () {
  inputEye.type = inputEye.type == 'password' ? 'text' : 'password'

  if (inputEye.type === 'password') {
    x.style.display = 'block'
    y.style.display = 'none'
  }
  if (inputEye.type === 'text') {
    x.style.display = 'none'
    y.style.display = 'block'
  }
})

