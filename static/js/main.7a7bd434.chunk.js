(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),l=a.n(i),o=(a(14),a(3)),s=a(4),c=a(6),u=a(5),m=a(7),d=(a(15),a(16),function(e){var t=e.title,a=e.movieTitleHandler,n=e.releaseDate,i=e.episodeNumber;return r.a.createElement("button",{className:"title",onClick:function(){a(t)}},r.a.createElement("div",{className:"title-inner"},r.a.createElement("span",null,"EPISODE: ",i),r.a.createElement("span",{className:"movie-name"},t),r.a.createElement("span",null,n)))}),f=(a(17),function(e){var t=e.movieTitleHandler,a=e.filteredTitle;return r.a.createElement("div",{className:"title-list"},a.map(function(e){var a=e.fields,n=a.episode_id,i=a.title,l=a.release_date;return r.a.createElement(d,{key:n,episodeNumber:n,releaseDate:l,title:i,movieTitleHandler:t})}))}),v=(a(18),function(e){var t=e.details;return e.noDetails?r.a.createElement("div",{className:"summary-wrapper-default"},r.a.createElement("p",{className:"summary-default"},"No Movies Selected")):r.a.createElement("div",null,t.map(function(e){var t=e.fields,a=t.title,n=t.opening_crawl,i=t.director;return r.a.createElement("div",{className:"summary-wrapper",key:e.id},r.a.createElement("p",{className:"summary-title"},a),r.a.createElement("p",{className:"summary-opening_crawl"},n),r.a.createElement("p",{className:"summary-director"},"Directed by: ",i))}))}),p=(a(19),function(e){var t=e.movieSearchHandler;return r.a.createElement("input",{className:"search",type:"text",placeholder:"Search for movies",onChange:function(e){return t(e.target.value)}})}),E=(a(20),function(e){var t=e.movieSortingHandler;return r.a.createElement("select",{className:"sorting",id:"sort-by",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Sort By"),r.a.createElement("option",{value:"episode"},"Episode"),r.a.createElement("option",{value:"year"},"Year"))}),h=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).movieTitleHandler=function(t){e.setState({movieTitle:t})},e.movieSearchHandler=function(t){e.setState({movieSearch:t})},e.movieSortingHandler=function(t){e.setState({sortMoviesBy:t})},e.sortMoviesByYear=function(e,t){return e.fields.release_date.split("-")[0]-t.fields.release_date.split("-")[0]},e.sortMoviesByEpisode=function(e,t){return e.fields.episode_id-t.fields.episode_id},e.state={starWars:[],movieTitle:"",movieSearch:"",sortMoviesBy:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://star-wars-api.herokuapp.com/films").then(function(e){return e.json()}).then(function(t){return e.setState({starWars:t})}).catch(function(e){return console.log("Error")})}},{key:"render",value:function(){var e=this.state,t=e.starWars,a=e.movieTitle,n=e.movieSearch,i=e.sortMoviesBy,l=t.filter(function(e){return e.fields.title.includes(a)}),o=t.filter(function(e){return e.fields.title.toLowerCase().includes(n.toLowerCase())});return"year"===i?o=t.filter(function(e){return e.fields.title.toLowerCase().includes(n.toLowerCase())}).sort(this.sortMoviesByYear):"episode"===i&&(o=t.filter(function(e){return e.fields.title.toLowerCase().includes(n.toLowerCase())}).sort(this.sortMoviesByEpisode)),r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(E,{movieSortingHandler:this.movieSortingHandler}),r.a.createElement(p,{movieSearchHandler:this.movieSearchHandler})),r.a.createElement("div",{className:"main-app"},r.a.createElement(f,{movieTitleHandler:this.movieTitleHandler,filteredTitle:o}),a?r.a.createElement(v,{details:l}):r.a.createElement(v,{noDetails:!0})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7a7bd434.chunk.js.map