var previewBtn = document.getElementById("PreviewButton");
previewBtn.addEventListener('click', function(e)
{
    var iframe = document.getElementsByClassName('cke_wysiwyg_frame')[0];
    var html = iframe.contentWindow.document.body.innerHTML;

    html = String(html);
    html = html.replaceAll("~", "$");

    var previewContent = document.getElementsByClassName("PreviewContent")[0];
    previewContent.innerHTML = html;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
});