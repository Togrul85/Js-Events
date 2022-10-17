const addBtn=document.querySelector(".button")
const body=document.querySelector(".body")


addBtn.addEventListener('click',()=>{

    
    const bodyRow=`
            <th>${document.querySelector('.namevvalue').value}</th>
            <th>${document.querySelector('.pricevvalue').value}</th>
            <th>${document.querySelector('.categoryvalue').value}</th>

    `
    body.insertAdjacentHTML('beforeend',bodyRow)

})

    
    
    
    
    //    getElementById.eventListener((click))
       


        
    //    var list1=[];
    //     var list2=[];
    //     var list3=[];
    //     var n=1;
    //     var x=0;

    //     function AddRow(){
    //         var AddRown =document.getElementById('information')
    //         var NewRow =AddRown.inserRow(n);


    //         list1[x]=document.getElementById("Name").Value;
    //         list2[x]=document.getElementById("Price").Value;
    //         list3[x]=document.getElementById("Category").Value;

    //         var cel1 =NewRow.insertCell(0);
    //         var cel2 =NewRow.insertCell(1);
    //         var cel3 =NewRow.insertCell(2);


    //         cel1.innerHTML =list1[x];
    //         cel2.innerHTML =list2[x];
    //         cel3.innerHTML =list3[x];

    //         n++;
    //         x++;
        




// var btn = document.getElementById("btn")
// btn.addEventListener("click,displayDetails");

// var row  =1;

// function displayDetails(){
//     var name = document.getElementById("name").value;
//     var price = document.getElementById("price").value;
//     var category = document.getElementById("category").value;
//     if(!name || !price || !category){
//         alert("Please");
//         return;
//     }
//     var information =document.getElementById("information");
//     var newRow =display.insertRow(row);

//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);

//     cell1.innerHTML =name;
//     cell2.innerHTML =price;
//     cell3.innerHTML =category;

//     row++;
// }










// let list1 =[];
// let list2 =[];
// let list3 =[];


// function AddRow(){
//     let AddRown =document.getElementById("information")
// }


// document.getElementById('#search').onkeyup = function(){
//     var query =this.value.toUpperCase();
//     var table =document.getElementsByTagName('table')[0];
//     var table_row =document.getElementsByTagName('tr');

//     for(var i =0; i<table_row.length; i++){
//         var name_row =table_row[i].getElementsByTagName('td')[0];
//         // console.log(name_row);
// if(name_row){
//     var name =name_row.textContent || TextDecoder.innerText;
//     if(name.toUpperCase().indeOf(query)> -1){
//         table_row[i].style.display='';
//     }
//     else{
//         table_row[i].style.display ='none'
//     }
// }
//     }
//     console.log(query);
// }

