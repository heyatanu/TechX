
async function gettechnews() {
    const resp = await fetch("https://newsapi.org/v2/everything?q=gaming&sortBy=publishedAt&language=en&pageSize=1&apiKey="+myapikey);
    const respData = await resp.json();
    let res = (respData.articles)[0];
let pubat=(res.publishedAt).split("T");
let maindate=pubat[0];
let fimg="";
if(res.urlToImage==null){
fimg="upload/blog_masonry_04.jpg";
}
else{
    fimg=res.urlToImage;
}
    let html=`
    <img src="`+fimg+`" alt="" class="img-fluid">
    <div class="shadoweffect">
       <div class="shadow-desc">
           <div class="blog-meta">
               <span class="bg-green"><a href="./more.html?q=game" title="">Gaming</a></span>
               <h4><a href="`+res.url+`" title="">`+res.title+`</a></h4>
               <small><a href="single.html" title="">`+maindate+`</a>  <a href="blog-author.html" title="">by `+res.source.name+`</a> </small>
            
           </div><!-- end meta -->
       </div><!-- end shadow-desc -->
   </div><!-- end shadow -->
    `; 
document.getElementById("laptopnews").innerHTML=html;

}
gettechnews()

