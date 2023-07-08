$('.countfect').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-num');
    delayTo = $this.attr('delay');
    if (!delayTo) {
        delayTo = 8000
    }
    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo
    }, {
        duration: delayTo,
        easing: 'linear',
        step: function () {
            $this.text(Math.floor(this.countNum));
        },
        complete: function () {
            $this.text(this.countNum);
        }
    });
});

const btnOpen = document.querySelector("#open")
const btnClose = document.querySelector("#close")
const modalContainer = document.querySelector("#modal-container")

btnOpen.addEventListener('click', () => {
    modalContainer.classList.add('show')
})

btnClose.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})


