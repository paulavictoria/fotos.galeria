function search() {
    let filter = document.getElementById('search-input').value.toUpperCase();
    let item = document.querySelectorAll('.slider_div');
  
    let isAnyVisible = false;
  
    item.forEach(function(itemElement) {
      let a = itemElement.getElementsByTagName('p')[0];
      let value = a.innerHTML || a.textContent;
  
      if (value.toUpperCase().indexOf(filter) > -1) {
        itemElement.style.display = "";
        isAnyVisible = true;
      } else {
        itemElement.style.display = "none";
      }
    });
  
    const notFoundElement = document.querySelector('.not-found');
    notFoundElement.style.display = isAnyVisible ? 'none' : 'block';
  }
