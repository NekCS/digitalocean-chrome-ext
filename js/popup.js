
(function() {


	chrome.tabs.executeScript({
        file: "js/printMode.js"
    });

    let printBtn = document.getElementById('print-btn');
    // printBtn.addEventListener('click', function() {
    // 	console.log('hi');
    // 	//print();
    // });
})();
