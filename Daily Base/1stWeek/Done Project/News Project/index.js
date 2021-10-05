console.log('This is Index.js');



let Content = document.getElementById('Content');

const xhr = new XMLHttpRequest();

xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8c7998bc8a7849e3baf03d31ecfc7bde',true)

xhr.onload = function () {
    if(this.status === 200){
       let json = JSON.parse(this.responseText)
       let articles = json.articles;
       console.log(articles)
       let newshtml = '';
       articles.forEach(function(element, index){
        let news = ` <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ${element["title"]}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
          </div>
          </div>
        </div>
      </div>`
            newshtml = news;
       });
       Content.innerHTML += newshtml;
    }
    else{
        console.log("Error Occurred"); 
    }
}

xhr.send()
