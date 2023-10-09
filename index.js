$("#PDF").click(function() {
    // URL del archivo PDF que deseas descargar
    var pdfUrl = './public/CV_Sofia.pdf';

    // Crea un elemento "a" invisible para descargar el archivo
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'cv_Sofia_Rojas.pdf'; // Nombre del archivo que se descargará
    a.style.display = 'none';

    // Agrega el elemento "a" al DOM y dispara un clic para descargar el archivo
    document.body.appendChild(a);
    a.click();

    // Elimina el elemento "a" del DOM después de la descarga
    document.body.removeChild(a);
});