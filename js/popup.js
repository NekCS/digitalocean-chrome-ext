
(function() {

	alert('hi');
	chrome.tabs.executeScript({
        code: "tableOfContent = document.querySelectorAll('.table-of-contents');tableOfContent[0].style.display = 'none';"
    });

    // let printBtn = document.getElementById('print-btn');
    // printBtn.addEventListener('click', function() {
    // 	console.log('hi');
    // 	window.print();
    // });
})();
