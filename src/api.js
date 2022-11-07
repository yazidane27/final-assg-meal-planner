const foodstring=localStorage.getItem("food")
const food = JSON.parse(foodstring)
fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then (response => response.json())
    .then (data =>{
        console.log(data)
        document.getElementById("dis").append(data.meals[0].strArea)
        document.getElementById("dis2").append(data.meals[0].strCategory)
        document.getElementById("dis3").append(data.meals[0].strMeal)
        if (data.meals[0].strIngredient1!="" &&data.meals[0].strIngredient1!= null){
                var table = document.getElementById("table")
                var row=table.insertRow(1)
                var cell1=row.insertCell(0)
                var cell2=row.insertCell(1)
                cell1.innerHTML=data.meals[0].strIngredient1
            cell2.innerHTML=data.meals[0].strMeasure1
        }
        if (data.meals[0].strIngredient2!=""  && data.meals[0].strIngredient2!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient2
            cell2.innerHTML=data.meals[0].strMeasure2
        }
        if (data.meals[0].strIngredient3!=""  && data.meals[0].strIngredient3!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient3
            cell2.innerHTML=data.meals[0].strMeasure3
        }
        if (data.meals[0].strIngredient4!=""  && data.meals[0].strIngredient4!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient4
            cell2.innerHTML=data.meals[0].strMeasure4
        }
        if (data.meals[0].strIngredient5!=""  && data.meals[0].strIngredient5!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient5
            cell2.innerHTML=data.meals[0].strMeasure5
        }
        if (data.meals[0].strIngredient6!=""  && data.meals[0].strIngredient6!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient6
            cell2.innerHTML=data.meals[0].strMeasure6
        }
        if (data.meals[0].strIngredient7!=""  && data.meals[0].strIngredient7!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient7
            cell2.innerHTML=data.meals[0].strMeasure7
        }
        if (data.meals[0].strIngredient8!=""  && data.meals[0].strIngredient8!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient8
            cell2.innerHTML=data.meals[0].strMeasure8
        }
        if (data.meals[0].strIngredient9!=""  && data.meals[0].strIngredient9!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient9
            cell2.innerHTML=data.meals[0].strMeasure9
        }
        if (data.meals[0].strIngredient10!=""  && data.meals[0].strIngredient10!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient10
            cell2.innerHTML=data.meals[0].strMeasure10
        }
        if (data.meals[0].strIngredient11!=""  && data.meals[0].strIngredient11!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient11
            cell2.innerHTML=data.meals[0].strMeasure11
        }
        if (data.meals[0].strIngredient12!=""  && data.meals[0].strIngredient12!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient12
            cell2.innerHTML=data.meals[0].strMeasure12
        }
        if (data.meals[0].strIngredient13!=""  && data.meals[0].strIngredient13!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient13
            cell2.innerHTML=data.meals[0].strMeasure13
        }
        if (data.meals[0].strIngredient14!=""  && data.meals[0].strIngredient14!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient14
            cell2.innerHTML=data.meals[0].strMeasure14
        }
        if (data.meals[0].strIngredient15!=""  && data.meals[0].strIngredient15!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient15
            cell2.innerHTML=data.meals[0].strMeasure15
        }
        if (data.meals[0].strIngredient16!=""  && data.meals[0].strIngredient16!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient16
            cell2.innerHTML=data.meals[0].strMeasure16
        }
        if (data.meals[0].strIngredient17!=""  && data.meals[0].strIngredient17!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient17
            cell2.innerHTML=data.meals[0].strMeasure17
        }
        if (data.meals[0].strIngredient18!=""  && data.meals[0].strIngredient18!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient18
            cell2.innerHTML=data.meals[0].strMeasure18
        }
        if (data.meals[0].strIngredient19!=""  && data.meals[0].strIngredient19!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient19
            cell2.innerHTML=data.meals[0].strMeasure19
        }
        if (data.meals[0].strIngredient20!=""  && data.meals[0].strIngredient20!= null){
            var table = document.getElementById("table")
            var row=table.insertRow(1)
            var cell1=row.insertCell(0)
            var cell2=row.insertCell(1)
            cell1.innerHTML=data.meals[0].strIngredient20
            cell2.innerHTML=data.meals[0].strMeasure20
        }
        document.getElementById("dis4").append(data.meals[0].strInstructions)
        console.log("video link : ",data.meals[0].strYoutube)

    })


    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');
    const book = document.querySelector('#book');
    
    const paper1 = document.querySelector('#p1')
    const paper2 = document.querySelector('#p2')
    const paper3 = document.querySelector('#p3')
    
    // Event listeners
    prevBtn.addEventListener("click", goPrevious);
    nextBtn.addEventListener("click", goNext);
    
    // Business Logic
    let currentState = 1;
    let numOfPapers = 3;
    let maxState = numOfPapers + 1;
    
    
    function openBook() {
        book.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }
    
    function closeBook(isFirstPage) {
        if(isFirstPage) {
            book.style.transform = "translateX(0%)";
        } else {
            book.style.transform = "translateX(100%)";
        }
        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }
    
    function goNext() {
        if(currentState < maxState) { 
            switch(currentState) {
                case 1:
                    openBook();
                    paper1.classList.add("flipped");
                    paper1.style.zIndex = 1;
                    break;
                case 2:
                    paper2.classList.add("flipped");
                    paper2.style.zIndex = 2;
                    break;
                case 3:
                    closeBook(false);
                    paper3.classList.add("flipped");
                    paper3.style.zIndex = 3;
                    break;
                default: 
                    throw new Error("unkown state");    
            }
    
            currentState++;
        }
    }
    
    function goPrevious() {
        if(currentState > 1) {
            switch(currentState) {
                case 2:
                    closeBook(true);
                    paper1.classList.remove("flipped");
                    paper1.style.zIndex = 3;
                    break;
                case 3:
                    paper2.classList.remove("flipped");
                    paper2.style.zIndex = 2;
                    break;
                case 4: 
                    openBook()
                    paper3.classList.remove("flipped");
                    paper3.style.zIndex = 1;
                    break;
            }
    
            currentState--;
        }
    }