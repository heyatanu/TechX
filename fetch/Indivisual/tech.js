var url_string = window.location.href
var url = new URL(url_string);
var query = url.searchParams.get("q");
function random_item(items){return items[Math.floor(Math.random()*items.length)];}
var apikeyarr = ["1084a30af0d34ba48ae2de64afb5618c","3721d73ea499493eb332beb03752af65","4f5d8467562d4a37875bbf1d80296046","e3e4cb5b0e5a4e10bd1638673a652d3c","cefebd50365c464cb8676225e0ad1e4e","0ba580e587c94ac790027958cdf7b426"];
let apik=random_item(apikeyarr);;
// console.log(query)
let v=document.getElementById("searchv").value;
if(query==null){
    location.replace(v+"/page-404.html");
}
else if(query=="tech"){
    var x = document.querySelectorAll(".nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    }
    document.getElementById("techh").classList.add("active");
    async function gettechnews(a) {
        const resp = await fetch("https://newsapi.org/v2/top-headlines?category=technology&sortBy=publishedAt&language=en&pageSize="+a+"&apiKey="+apik);
        const respData = await resp.json();
        let res = (respData);
        let html=``;
        let popularhtml=``;
        let len=(res.articles.length)
        let fres=res.articles;
        let fimg="";
        for (var i=0;i<len;i++){
            if(fres[i].urlToImage==null){
                fimg="upload/banner_02.jpg";
            }
            else{
                fimg=fres[i].urlToImage;
            }
            let pubat=(fres[i].publishedAt).split("T");
            let maindate=pubat[0];
            if(i==len-1){
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                <button class="btn btn-success" id="more" style="cursor:pointer">More</button>
                `;
            }else{
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                `;
            }
            
        }
        document.getElementById("popular-tech-news").innerHTML=popularhtml;
        document.getElementById("more").addEventListener("click",function(){
            gettechnews(a+5)
        })
    }
    gettechnews(5)   
}
else if(query=="phone"){
    var x = document.querySelectorAll(".nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    }
    document.getElementById("phoneh").classList.add("active");
    async function gettechnews(a) {
        const resp = await fetch("https://newsapi.org/v2/everything?domains=91mobiles.com&sortBy=publishedAt&language=en&pageSize="+a+"&apiKey="+apik);
        const respData = await resp.json();
        let res = (respData);
        let html=``;
        let popularhtml=``;
        let len=(res.articles.length)
        let fres=res.articles;
        let fimg="";
        let prev="";
        for (var i=0;i<len;i++){
            if(fres[i].urlToImage==null){
                fimg="upload/blog_09.jpg";
            }
            else{
                fimg=fres[i].urlToImage;
            }
            if (i!=0){
                console.log("k",i,fres[i-1].title==fres[i].title,fres[i-1].title,fres[i].title)
            }
            prev=fres[i].title
            let pubat=(fres[i].publishedAt).split("T");
            let maindate=pubat[0];
            if(i==len-1){
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                <button class="btn btn-success" id="more" style="cursor:pointer">More</button>
                `;
            }else{
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                `;
            }

            
        }
        document.getElementById("popular-tech-news").innerHTML=popularhtml;
        document.getElementById("more").addEventListener("click",function(){
            gettechnews(a+5)
        })
    }
    gettechnews(5)   
}
else if(query=="game"){
    var x = document.querySelectorAll(".nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    }
    document.getElementById("gameh").classList.add("active");
    async function gettechnews(a) {
        const resp = await fetch("https://newsapi.org/v2/everything?q=gaming&sortBy=publishedAt&language=en&pageSize="+a+"&apiKey="+apik);
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
               
            if(i==len-1){
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                <button class="btn btn-success" id="more" style="cursor:pointer">More</button>
                `;
            }else{
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                `;
            }
            
        }
        document.getElementById("popular-tech-news").innerHTML=popularhtml;
        document.getElementById("more").addEventListener("click",function(){
            gettechnews(a+5)
        })
    }
    gettechnews(5)   
}
else if(query=="internet"){
    var x = document.querySelectorAll(".nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    }
    document.getElementById("interneth").classList.add("active");
    async function gettechnews(a) {
        const resp = await fetch("https://newsapi.org/v2/everything?q=internet&sortBy=publishedAt&language=en&pageSize="+a+"&apiKey="+apik);
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
               
            if(i==len-1){
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                <button class="btn btn-success" id="more" style="cursor:pointer">More</button>
                `;
            }else{
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                `;
            }
            
        }
        document.getElementById("popular-tech-news").innerHTML=popularhtml;
        document.getElementById("more").addEventListener("click",function(){
            gettechnews(a+5)
        })
    }
    gettechnews(5)   
}
else if(query=="howto"){
    var x = document.querySelectorAll(".nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    }
    document.getElementById("howtoh").classList.add("active");
    async function gettechnews(a) {
        const resp = await fetch("https://newsapi.org/v2/everything?domains=howtogeek.com&sortBy=publishedAt&language=en&pageSize="+a+"&apiKey="+apik);
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

            if(i==len-1){
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                <button class="btn btn-success" id="more" style="cursor:pointer">More</button>
                `;
            }else{
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                `;
            }
            
        }
        document.getElementById("popular-tech-news").innerHTML=popularhtml;
        document.getElementById("more").addEventListener("click",function(){
            gettechnews(a+5)
        })
    }
    gettechnews(5)   
}
else if(query=="hacks"){
    var x = document.querySelectorAll(".nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    }
    document.getElementById("hacksh").classList.add("active");
    async function gettechnews(a) {
        const resp = await fetch("https://newsapi.org/v2/everything?domains=gadgethacks.com&sortBy=publishedAt&language=en&pageSize="+a+"&apiKey="+apik);
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
            if(i==len-1){
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                <button class="btn btn-success" id="more" style="cursor:pointer">More</button>
                `;
            }else{
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                `;
            }
            
        }
        document.getElementById("popular-tech-news").innerHTML=popularhtml;
        document.getElementById("more").addEventListener("click",function(){
            gettechnews(a+5)
        })
    }
    gettechnews(5)   
}
else{
    var x = document.querySelectorAll(".nav-link");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    }
    async function gettechnews(a) {
        const resp = await fetch("https://newsapi.org/v2/everything?q="+query+"&sortBy=publishedAt&language=en&pageSize="+a+"&apiKey="+apik);
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
               
            if(i==len-1){
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                <button class="btn btn-success" id="more" style="cursor:pointer">More</button>
                `;
            }else{
                popularhtml+=`
                <div class="blog-box row">
                    <div class="col-md-4">
                        <div class="post-media">
                            <a href="`+fres[i].url+`" title="">
                                <img src="`+fimg+`" alt="" class="img-fluid">
                                <div class="hovereffect"></div>
                            </a>
                        </div><!-- end media -->
                    </div><!-- end col -->
    
                    <div class="blog-meta big-meta col-md-8">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a  title="">TECH</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].source.name+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->
                `;
            }
            
        }
        document.getElementById("popular-tech-news").innerHTML=popularhtml;
        document.getElementById("more").addEventListener("click",function(){
            gettechnews(a+5)
        })
    }
    gettechnews(5)   
}
let ti="TechX-"+query.toUpperCase();
document.title=ti;
function submited(){
let vv=document.getElementById("searchv").value;
    let s =document.getElementById("searchurl").href;
    let ur=s+"more.html?q="+vv;
    location.replace(ur);
    return false
}