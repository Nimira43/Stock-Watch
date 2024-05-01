const toggleNav = document.querySelector('.toggle-nav')
const toggleItems = document.querySelectorAll('.toggle-item')

const mapsChart = document.querySelector('.maps-chart')
const detailedChart = document.querySelector('.detailed-chart')
const navItems = document.querySelector('.nav-items')

toggleNav.onclick = () => {
    navItems.classList.toggle('show')
    toggleNav.innerHTML = navItems.classList.contains('show') ? '<i class="fas fa-less-than"></i>' : '<i class="fas fa-greater-than"></i>'
}

toggleItems.forEach((item) => {
    item.onclick = (e) => {
        if (e.target.classList.contains('maps')) {
            e.target.classList.add('active')
            e.target.nextElementSibling.classList.remove('active')
            show(mapsChart, detailedChart)
        }
        if (e.target.classList.contains('analytics')) {
            e.target.classList.add('active')
            e.target.previousElementSibling.classList.remove('active')
            show(detailedChart, mapsChart)
        }
    }
})

function show(show, hide) {
    show.classList.add('show')
    hide.classList.remove('show')
}