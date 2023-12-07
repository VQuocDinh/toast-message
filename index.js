function toast({
    title = '',
    message = '',
    type = '',
    duration = 3000
}) {

    const main = document.getElementById('toast')
    if (main) {
        const toast = document.createElement('div')

        // Auto close toast
        const autoClose = setTimeout(function () {
            main.removeChild(toast)
        }, duration + 1000)

        // Click to close toast
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoClose)
            }
        }
        const icons = {
            success: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-circle-exclamation',
            warning: 'fa-solid fa-circle-info',
        }
        const icon = icons[type]
        toast.classList.add('toast', `toast--${type}`)
        toast.innerHTML = `<div class="toast__icon">
            <i class="${icon}"></i>
            </div>
            <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__mess">${message}</p>
            </div>
            <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
            </div>`
        main.appendChild(toast)
        
    }
}




function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Logged in successfully',
        type: 'success',
        duration: 3000
    })
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Login failed. Please try again',
        type: 'error',
        duration: 3000
    })
}

function showWarningToast() {
    toast({
        title: 'Warring',
        message: 'Warning. Consider when continuing',
        type: 'warning',
        duration: 3000
    })
}