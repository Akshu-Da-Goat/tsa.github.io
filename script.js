// Readmore
document.getElementById('readmoreBtn').onclick = function() {
  document.getElementById('readmoreContent').classList.toggle('show');
}

// Event Filter
function filterEvents(type) {
  document.querySelectorAll('.event-filter button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('filter-' + type).classList.add('active');
  document.querySelectorAll('.events-list li').forEach(li => {
    if(type === 'all' || li.dataset.type === type) {
      li.style.display = '';
    } else {
      li.style.display = 'none';
    }
  });
}

// Gallery carousel (basic version)
function galleryNext() {
  const carousel = document.getElementById('galleryCarousel');
  carousel.scrollLeft += 220;
}
function galleryPrev() {
  const carousel = document.getElementById('galleryCarousel');
  carousel.scrollLeft -= 220;
}

