const apikey="811ebeda5ccd44afbae4ba2ebc26c4bc";
async function gettechnews() {
    const resp = await fetch("https://newsapi.org/v2/everything?domains=howtogeek.com&sortBy=publishedAt&language=en&pageSize=3&apiKey="+myapikey);
    const respData = await resp.json();
    let res = (respData);
    let html=``;
    let popularhtml=``;
    let len=(res.articles.length)
    let fres=res.articles;
    let fimg="";
    for (var i=0;i<len;i++){
        if(fres[i].urlToImage==null){
            fimg="upload/blog_05.jpg";
        }
        else{
            fimg=fres[i].urlToImage;
        }
        let pubat=(fres[i].publishedAt).split("T");
        let maindate=pubat[0];
        if(i==0){
            html+=`
            <div class="masonry-box post-media">
            <img src="`+fimg+`" alt="" class="img-fluid">
            <div class="shadoweffect">
               <div class="shadow-desc">
                   <div class="blog-meta">
                       <span class="bg-yellow"><a href="./more.html?q=howto" title="">How To</a></span>
                       <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                       <small><a title="">`+maindate+`</a></small>
                       <small><a  title="">By `+fres[i].author+`</a></small>
                   </div><!-- end meta -->
               </div><!-- end shadow-desc -->
           </div><!-- end shadow -->
       </div><!-- end post-media -->
            `;
        }
        else if(i==1){
            popularhtml+=`
            <div class="section-title">
            <h3 class="color-aqua"><a href="./more.html?q=howto" title="">How To</a></h3>
        </div><!-- end title -->

        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="`+fres[i].url+`" title="">
                            <img src="`+fimg+`" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].description+`</p>
                        <small><a title="">HOW TO</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].author+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->

                <hr class="invis">
            `;
        }
        else{
            popularhtml+=`
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="blog-box">
                    <div class="post-media">
                        <a href="`+fres[i].url+`" title="">
                            <img src="`+fimg+`" alt="" class="img-fluid">
                            <div class="hovereffect">
                                <span></span>
                            </div><!-- end hover -->
                        </a>
                    </div><!-- end media -->
                    <div class="blog-meta big-meta">
                        <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                        <p>`+fres[i].content+`</p>
                        <small><a title="">HOW TO</a></small>
                        <small><a  title="">`+maindate+`</a></small>
                        <small><a  title="">by `+fres[i].author+`</a></small>
                    </div><!-- end meta -->
                </div><!-- end blog-box -->

                <hr class="invis">
            `;
        }
    }
    document.getElementById("right-side").innerHTML=html;
    document.getElementById("howtomain").innerHTML=popularhtml;

}
gettechnews()