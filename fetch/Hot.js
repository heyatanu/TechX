async function gettechnews() {
    const resp = await fetch("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com,apkmirror.com,beebom.com,mashable.com,engadget.com&sortBy=publishedAt&language=en&pageSize=9&apiKey="+myapikey);
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
        if(i>3){
            popularhtml+=`
            <a href="`+fres[i].url+`" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="w-100 justify-content-between">
                <img src="`+fimg+`" alt="" class="img-fluid float-left">
                <h5 class="mb-1">`+fres[i].title+`</h5>
                <small>`+maindate+`</small>
            </div>
        </a>
            `;

           
        }
        else if(i==0){
            html+=`
            <div class="section-title">
            <h3 class="color-red"><a href="blog-category-01.html" title="">Hot</a></h3>
        </div><!-- end title -->

        <div class="blog-box">
            <div class="post-media">
                <a href="`+fres[i].url+`" title="">
                    <img src="`+fimg+`" alt="" class="img-fluid">
                    <div class="hovereffect">
                        <span></span>
                    </div><!-- end hover -->
                </a>
            </div><!-- end media -->
            <div class="blog-meta">
                <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                <small><a  title="">`+maindate+`</a></small>
                <small><a  title="">by `+fres[i].author+`</a></small>
            </div><!-- end meta -->
        </div><!-- end blog-box -->
            `;
        }
        else{
            html+=`
        <div class="blog-box">
            <div class="post-media">
                <a href="`+fres[i].url+`" title="">
                    <img src="`+fimg+`" alt="" class="img-fluid">
                    <div class="hovereffect">
                        <span></span>
                    </div><!-- end hover -->
                </a>
            </div><!-- end media -->
            <div class="blog-meta">
                <h4><a href="`+fres[i].url+`" title="">`+fres[i].title+`</a></h4>
                <small><a  title="">`+maindate+`</a></small>
                <small><a  title="">by `+fres[i].author+`</a></small>
            </div><!-- end meta -->
        </div><!-- end blog-box -->
            `;
        }
    }
    document.getElementById("hotnews").innerHTML=html;
    document.getElementById("recentpost").innerHTML=popularhtml;

}
gettechnews()

