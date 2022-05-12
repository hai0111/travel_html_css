//Show Bar Right
const btnShowBarRight = document.querySelector('#showBarRight')
const rightBar = document.querySelector('.bar__category--right')
const closeBtnRightBar = document.querySelector('.bar__category--right-close')


// Function
function showBarRight(){
    rightBar.style.display = 'block'
}

function closeBarRight(){
    console.log(rightBar.classList.add('slideOutLeft'))
    const endClose = setTimeout(function(){
        rightBar.style.display = 'none'
        rightBar.classList.remove('slideOutLeft')
    },450)
}

// Active function
btnShowBarRight.onclick = showBarRight
closeBtnRightBar.onclick = closeBarRight