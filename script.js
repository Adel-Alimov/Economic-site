const tooltip = document.querySelector('.tooltip');
const countries = document.querySelectorAll('.country');
const popupBg = document.querySelector('.info_bg');
const popup = document.querySelector('.info')


countries.forEach(country =>{
    country.addEventListener('click', function(){
        popup.querySelector('.info_photos').setAttribute('src', this.dataset.photo);
        popup.querySelector('.info_title').innerText = this.dataset.title;
        popup.querySelector('.info_text').innerText = this.dataset.description;
        popupBg.classList.add('active');


    });

    country.addEventListener('mousemove', function(e){
        tooltip.innerText = this.dataset.title;
        tooltip.style.top = (e.y + -5) + 'px';
        tooltip.style.left = (e.x + 20) + 'px';
    });

    country.addEventListener('mouseenter', function(){
        tooltip.style.display = 'block'
    });
    country.addEventListener('mouseleave', function(){
        tooltip.style.display = 'none'
    })
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg){
        popupBg.classList.remove('active');
    }
});