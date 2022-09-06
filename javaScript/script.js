
let setting = document.querySelector('.btn-setting')

setting.addEventListener('click', () => {
    document.querySelector('.boxColors').classList.toggle('active')
})

function toogleColor(color) {
    let colorBG = document.querySelectorAll('.btn-setting')

    colorBG.forEach(elem =>{
        elem.style.backgroundColor = color
    })

    let navColor = document.querySelectorAll('.navLink')

    navColor.forEach(elem =>{
        elem.style.backgroundColor = color
    })
    
    
    let h1 = document.querySelectorAll('.colorH1')

    h1.forEach(elem =>{
        elem.style.color = color
    })
}


let navLinksOne = document.querySelector('.iconOne')

navLinksOne.addEventListener('click', () => {
    document.querySelector('.iconHomeActive').classList.toggle('active')
})




let navLinksTwo = document.querySelector('.iconTwo')

navLinksTwo.addEventListener('click', () => {
    document.querySelector('.iconContactActive').classList.toggle('active')
})


let navLinksThree = document.querySelector('.iconThree')

navLinksThree.addEventListener('click', () => {
    document.querySelector('.iconShoppingActive').classList.toggle('active')
})


let navLinksFour = document.querySelector('.iconFour')

navLinksFour.addEventListener('click', () => {
    document.querySelector('.iconChatRegularActive').classList.toggle('active')
})



let navLinksFive = document.querySelector('.iconFive')

navLinksFive.addEventListener('click', () => {
    document.querySelector('.iconMessageRoundedActive').classList.toggle('active')
})


let send = document.querySelector('.send')
send.addEventListener('click', () => {
    document.querySelector('.iconChatRegularActive').classList.add('active')
})

