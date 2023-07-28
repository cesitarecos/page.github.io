const bntswitch = document.querySelector('#switch')

bntswitch.addEventListener('click', () => {
    document.body.classList.toggle('black');
    bntswitch.classList.toggle('active');
});