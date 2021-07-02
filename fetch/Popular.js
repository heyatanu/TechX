async function gettechnews() {
    const resp = await fetch("https://newsapi.org/v2/everything?q=technology&sortBy=popularity&language=en&pageSize=5&apiKey="+myapikey);
    const respData = await resp.json();
    let res = (respData);
    let html=``;
    let popularhtml=``;
    let len=(res.articles.length)
    let fres=res.articles;
    let fimg="";
    for (var i=0;i<len;i++){
        if(fres[i].urlToImage==null){
            fimg="upload/blog_09.jpg";
        }
        else{
            fimg=fres[i].urlToImage;
        }
        let pubat=(fres[i].publishedAt).split("T");
        let maindate=pubat[0];
        html+=`
        <a href="`+fres[i].url+`" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="w-100 justify-content-between">
            <img src="`+fimg+`" alt="" class="img-fluid float-left">
            <h5 class="mb-1">`+fres[i].title+`</h5>
        </div>
    </a>
        `;
    }
    document.getElementById("popular").innerHTML=html;

}
gettechnews()