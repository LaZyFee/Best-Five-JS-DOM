const button = document.getElementsByClassName('btn');
for (const btn of button) {
    btn.addEventListener('click', function (event) {
        const info = event.target.parentNode.querySelector('h5').innerHTML
        btn.classList.add('disabled')
        const ol = document.getElementById('list-item');
        const li = document.createElement('li')
        li.innerText = info
        ol.appendChild(li)
    })
}
