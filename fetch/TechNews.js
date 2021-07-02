async function gettechnews() {
    const resp = await fetch("https://newsapi.org/v2/top-headlines?category=technology&sortBy=publishedAt&language=en&pageSize=6&apiKey="+myapikey);
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
        if(i==0){
            html+=`
            <div class="masonry-box post-media">
            <img src="`+fimg+`" alt="" class="img-fluid">
            <div class="shadoweffect">
               <div class="shadow-desc">
                   <div class="blog-meta">
                       <span class="bg-aqua"><a href="./more.html?q=tech" title="">Tech</a></span>
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
            <div class="blog-list clearfix" id="popular-tech-news">
            <div class="section-title">
                <h3 class="color-green"><a  title="">Popular Tech news</a></h3>
            </div><!-- end title -->

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
                    <small><a  title="">by `+fres[i].author+`</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            `;
        }
        else{
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
                    <small><a  title="">by `+fres[i].author+`</a></small>
                </div><!-- end meta -->
            </div><!-- end blog-box -->
            `;
        }
    }
    document.getElementById("left-side").innerHTML=html;
    document.getElementById("popular-tech-news").innerHTML=popularhtml;

}
gettechnews()