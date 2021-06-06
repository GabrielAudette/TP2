<template>
  <div class="maincontainer">
    <div class="imgcontainer">
      <img :src="this.url" alt="" class="grosseimage">
        <div class="objettexte">
          <p class="url"></p>
          <p class="auteur">Auteur :{{auteur}}</p>
          <p class="titre">Titre :{{title}}</p>
          <p class="titre">lien :{{lien}}</p>
        </div>
    </div> 
    <div class="allimages">
    <Post class="image" v-on:monEvent="changerimage" v-for="post in data" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import Post from './components/Post';

export default {
  name: "App",
  components: {
    Post
  },
    data() {
      return {
          title: "",
          auteur: "",
          url: "",
          test: "",
          permalink: "",
          data: []
      }
    },
    methods: {
      changerimage(titre, auteur, url, permalink) {
        
        this.title = titre
        this.auteur = auteur
        this.url = url
        this.permalink = permalink
        console.log("ceci :" + titre + ", auteur:" + auteur + ", url:" + url)
        console.log(this.url)
        console.log(this.title)
        console.log(this.auteur)
        console.log(this.permalink)

    },
      getRedditData(sub) {
        const url = `https://www.reddit.com/r/${sub}.json?limit=30`;
        return fetch(url)
        .then((res) => res.json())
        .then((json) => {
          return json.data.children.map((data) =>{
            return data.data;
          });
        });
      },
    },
  mounted() {
    this.getRedditData("wallpaper").then(data => {
    this.data = data;
    });
    
    this.getRedditData("pictures").then(data => {
    this.data = this.data.concat(data);
    });
    
    this.getRedditData("cats").then(data => {
    this.data = this.data.concat(data);
    });  
    // D'autres étapes ici, probablement
    
},
};

// var view = $("#tslshow");
// var move = "100px";
// var sliderLimit = -750;

// $("#rightArrow").click(function(){

//     var currentPosition = parseInt(view.css("left"));
//     if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 400})

// });

// $("#leftArrow").click(function(){

//     var currentPosition = parseInt(view.css("left"));
//     if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400});

// });

</script>

<style>

.maincontainer {
    height: 100%;
    width: 100%;
    background-color: #222
}
.imgcontainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 10px;
  background-color: #222

}
.grosseimage {
  width: 500px;
  height: 500px;
}
.images {
    width: 75px;
    height: 75px;
}
.allimages {
  display: flex;
  flex-wrap: nowrap;
}
body {
  overflow-x:hidden
}
.image {
  cursor: pointer
}
.objettexte {
  color: white;
  margin-left: 25px;
}

</style>
