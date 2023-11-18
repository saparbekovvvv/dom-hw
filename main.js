  document.querySelectorAll(".accordion").forEach((el) => {
    el.addEventListener("click", () => {
      let content2 = el.nextElementSibling;
      console.log(content2);
      if(content2.style.maxHeight) {
        document.querySelectorAll('.content2').forEach((el)=> el.style.maxHeight = null)
      }
      else{
        document.querySelectorAll('.content2').forEach((el)=> el.style.maxHeight = null)
        content2.style.maxHeight = content2.scrollHeight + 'px'
      }
    });
  });

