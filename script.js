'use strict'



function filterFunction1() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown1");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  function filterFunction2() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown2");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

// <<<<<<< main
  function readCSVFile(){

    //this part
    var files = 'cosmetic_p.csv';
    
    if(files.length > 0 ){
      
      // Selected file
      var file = files[0];

         // FileReader Object
         var reader = new FileReader();
         
         // Read file as string 
         reader.readAsText(file);
         //console.log(FileSystemDirectoryHandle)
         
         // Load event
         reader.onload = function(event) {
           
           // Read file data
           var csvdata = event.target.result;
           
           // Split by line break to gets rows Array
           var rowData = csvdata.split('\n');
           console.log(rowData)
           
           // <table > <tbody>
           var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
           tbodyEl.innerHTML = "";
           
           // Loop on the row Array (change row=0 if you also want to read 1st row)
           for (var row = 1; row < rowData.length; row++) {
             
             // Insert a row at the end of table
             var newRow = tbodyEl.insertRow();
             
             // Split by comma (,) to get column Array
             rowData = rowData[row].split(',');
             
             // Loop on the row column Array
             for (var col = 0; col < rowData.length; col++) {

                         // Insert a cell at the end of the row
                         var newCell = newRow.insertCell();
                         newCell.innerHTML = rowData[col];
                         
                        }
                        
                      }
              
         };

    }
    else{
         alert("Please select a file.");
    }

}




=======

  let skb = document.querySelector('#skintypebutton')

  skb.addEventListener('click', () => {
    window.location.href='skintype.html'
  })
// >>>>>>> main
