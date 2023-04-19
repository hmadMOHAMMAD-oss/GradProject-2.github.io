document.querySelectorAll('.section')[1].classList.add('spanR' , 'sectionsActive')
document.querySelector('.sections').addEventListener('click' , e => {
  const arr = [...document.querySelectorAll('.section')];
   arr.map(e => {
    console.log(e.classList.remove('sectionsActive' , 'spanR'))//classList.classList.remove('sectionsActive');
  })
e.target.classList.toggle('sectionsActive');
})

document.querySelector(".Empty").addEventListener('click' , () => {
  document.getElementById('ImageURL').value = " "
  document.getElementById('BarCode').value = " "
  document.getElementById('Name').value = " "
  document.getElementById('SideEffect').value = " "
  document.getElementById('DosageA').value = " "
  document.getElementById('DosageC').value = " "
  document.getElementById('DosageUC').value = " "
  document.getElementById('Warnnings').value = " "
  document.getElementById('Pregnancy').value = " "
  document.getElementById('Usage').value = " "
  document.getElementById('Chemical').value = " "
  document.getElementById('Consetration').value = " "
})
