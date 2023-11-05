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

 
  var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  



  