document.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      const image = document.createElement('img');
      image.src = event.target.src;
      overlay.appendChild(image);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
      });
    }
  });




  