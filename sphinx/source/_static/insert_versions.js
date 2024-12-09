var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('GET', '../latest/_static/versions_list.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("versions-list").innerHTML = xhr.responseText;
    }
}
xhr.send();
