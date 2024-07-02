// script.js
document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat:not(.occupied)');
  
    seats.forEach(seat => {
      seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
      });
    });
  });
  