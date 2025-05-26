
document.addEventListener('DOMContentLoaded',() =>{
    const elementosCarrusel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarrusel, {
        duration: 150,
        dist :-80,
        shift: 0,
        padding: 0,
        numVisible: 3,
        indicators: true
    });

    
});



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });