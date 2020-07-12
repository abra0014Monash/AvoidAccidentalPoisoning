
$(document).ready(function(){
    
    let url = "https://newsapi.org/v2/everything?q=drug-interactions&apiKey=360f21cbb92945eab94e71b116965a56";
     
      $.ajax({
          
          url: url,
          method: "GET",
          dataType: "json",
          success: function(news){
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews){
                
              
              output +=`
                <div class="col l6 m6 s12">
                <h4>${latestNews[i].title}</h4>
                <img src="${latestNews[i].urlToImage}" class="responsive-img">
                <p>${latestNews[i].description}</p>
                <p>${latestNews[i].content}</p>
                <p>Published on: ${latestNews[i].publishedAt}</p>
                <a href="${latestNews[i].url}" class="btn" target="_blank">Read more</a>
                </div>
              `;
                
            }
            
              if(output !== ""){
              $("#newsResults").html(output);
              }
              
            },
          
          error: function(){
             let internetFailure = `
             <div style="font-size:34px; text-align:center; margin-top:40px;">Please check your internet connection and try again.
             <img src="img/internet.png" class="responsive-img">
             </div>`;
             
            $("#newsResults").html(internetFailure);
             M.toast({
                html: "We encountered an error, please try again",
                classes: 'red'
              });
          }
          
          
        });
    

        
   });