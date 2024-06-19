window.addEventListener('wheel', function(event) {
      if (event.ctrlKey === true) {
          event.preventDefault();
      }
  }, { passive: false });