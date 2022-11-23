var btn = document.querySelector('#nav a')
btn.addEVentListener('click', show)
function show() {
    document.querySelector('.aside').style.display = 'grid';
}