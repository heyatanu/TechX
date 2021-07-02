async function gettechnews() {
    const resp = await fetch("https://newsapi.org/v2/everything?domains=gadgethacks.com&sortBy=publishedAt&language=en&pageSize=6&apiKey="+myapikey);
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
        if (i==0 || i==1 || i==2){
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
                <small><a title="">`+maindate+`</a></small>
                <small><a  title="">By `+fres[i].author+`</a></small>
            </div><!-- end meta -->
        </div><!-- end blog-box -->

        <hr class="invis">
            `;
        }
        else{
            popularhtml+=`
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
                <small><a title="">`+maindate+`</a></small>
                <small><a  title="">By `+fres[i].author+`</a></small>
            </div><!-- end meta -->
        </div><!-- end blog-box -->

        <hr class="invis">
            `;
        }

    }
    document.getElementById("ghfstpart").innerHTML=html;
    document.getElementById("ghsecpart").innerHTML=popularhtml;

}
gettechnews()