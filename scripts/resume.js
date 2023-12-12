const download = document.getElementById("downloadLink");

download.addEventListener('click', function(event){
  event.preventDefault();

  const url = this.getAttribute('href');
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Resume-Deepak-Poly.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
})