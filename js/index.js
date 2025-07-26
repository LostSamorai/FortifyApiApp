 var cartona = document.querySelector('.cartona');
 var extendeddata = []; 
 




var btn = document.querySelectorAll('.Btn');
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseenter",function(){
        btn[i].style.backgroundColor = "tomato";
    });
    btn[i].addEventListener("mouseout",function(){
        btn[i].style.backgroundColor = "teal";
    });
}
showMeals("pizza");

function filldata(arr) {
    console.log(arr[0].title);
 var alldata = '';
            for (let i = 0; i < arr.length; i++) {
                var current = `      
                <div class="card">
                  <img  src="${arr[i].image_url}" alt="Food img style='width:20%' position absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto;"> 
                    <h4>${arr[i].publisher}</h4>
                    <p>${arr[i].title || 'No description available'}</p>
                </div>`;
              alldata += current;

            }
            cartona.innerHTML = alldata;
}

function showMeals(mealsType){
    var request = new XMLHttpRequest();
    request.open('GET', `https://forkify-api.herokuapp.com/api/v2/recipes?search=${mealsType}`, true);
    request.send();
    request.onload = function() {
        if (request.status == 200 && request.readyState == 4) {
            extendeddata = JSON.parse(request.responseText);    
            var arra=extendeddata.data.recipes;
            var loader = document.querySelector('.loader');
            loader.style.display = 'none'; 
            // Hide the loader after data is fetched
           
          filldata(arra);
           
        } else {
            console.error('Error fetching data');
        }
    };
}
