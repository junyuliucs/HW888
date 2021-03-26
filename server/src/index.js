const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  var response = await axios.get(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=d99a715f878cffa59290b2fe9f4ef43d&language=en-US&page=1'
  )
  const currentMovies = [];
  for (var i = 0; i <  response.data.results.length; i++){
    var tm = response.data.results[i];
    currentMovies.push({
      id: tm.id,
      name: tm.title,
      backdrop_path: 'https://image.tmdb.org/t/p/w780' + tm.backdrop_path,
      poster_path: 'https://image.tmdb.org/t/p/w185' + tm.poster_path,
    })
    if (i == 4) break;
  }

  response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=d99a715f878cffa59290b2fe9f4ef43d`
  )
  const trendgingMovies = [];
  const trendgingMovies_all = [];
  var group = [];
  for (var i = 0; i <  response.data.results.length; i++){
    var tm = response.data.results[i];
    var item = {
      id: tm.id,
      name: tm.title,
      backdrop_path: 'https://image.tmdb.org/t/p/w780' + tm.backdrop_path,
      poster_path: 'https://image.tmdb.org/t/p/w185' + tm.poster_path,
    }
    trendgingMovies_all.push(item)
    group.push(item)
    if (group.length == 6) {
      trendgingMovies.push(group);
      group = [];
    }
  }
  if (group.length > 0) trendgingMovies.push(group);

  response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=d99a715f878cffa59290b2fe9f4ef43d&language=en-US&page=1`
  )
  const popularMovies = [];
  const popularMovies_all = [];
  group = [];
  for (var i = 0; i <  response.data.results.length; i++){
    var tm = response.data.results[i];
    var item = {
      id: tm.id,
      name: tm.title,
      backdrop_path: 'https://image.tmdb.org/t/p/w780' + tm.backdrop_path,
      poster_path: 'https://image.tmdb.org/t/p/w185' + tm.poster_path,
    }
    popularMovies_all.push(item)
    group.push(item)
    if (group.length == 6) {
      popularMovies.push(group);
      group = [];
    }
  }
  if (group.length > 0) popularMovies.push(group);

  response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=d99a715f878cffa59290b2fe9f4ef43d&language=en-US&page=1`
  )
  const topMovies = [];
  const topMovies_all = [];
  group = [];
  for (var i = 0; i <  response.data.results.length; i++){
    var tm = response.data.results[i];
    var item = {
      id: tm.id,
      name: tm.title,
      backdrop_path: 'https://image.tmdb.org/t/p/w780' + tm.backdrop_path,
      poster_path: 'https://image.tmdb.org/t/p/w185' + tm.poster_path,
    }
    topMovies_all.push(item)
    group.push(item)
    if (group.length == 6) {
      topMovies.push(group);
      group = [];
    }
  }
  if (group.length > 0) topMovies.push(group);

  /*response = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=d99a715f878cffa59290b2fe9f4ef43d`
  )
  const trendgingTv = [];
  const trendgingTv_all = [];
  group = [];
  for (var i = 0; i <  response.data.results.length; i++){
    var tm = response.data.results[i];
    var item = {
      id: tm.id,
      name: tm.title,
      backdrop_path: 'https://image.tmdb.org/t/p/w780' + tm.backdrop_path,
      poster_path: 'https://image.tmdb.org/t/p/w185' + tm.poster_path,
    }
    trendgingTv_all.push(item)
    group.push(item)
    if (group.length == 6) {
      trendgingTv.push(group);
      group = [];
    }
  }
  if (group.length > 0) trendgingTv.push(group);*/

  response = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=d99a715f878cffa59290b2fe9f4ef43d&language=en-US&page=1`
  )
  const popularTv = [];
  const popularTv_all = [];
  group = [];
  for (var i = 0; i <  response.data.results.length; i++){
    var tm = response.data.results[i];
    var item = {
      id: tm.id,
      name: tm.name,
      backdrop_path: 'https://image.tmdb.org/t/p/w780' + tm.backdrop_path,
      poster_path: 'https://image.tmdb.org/t/p/w185' + tm.poster_path,
    }
    popularTv_all.push(item)
    group.push(item)
    if (group.length == 6) {
      popularTv.push(group);
      group = [];
    }
  }
  if (group.length > 0) popularTv.push(group);

  response = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=d99a715f878cffa59290b2fe9f4ef43d&language=en-US&page=1`
  )
  const topTv = [];
  const topTv_all = [];
  group = [];
  for (var i = 0; i <  response.data.results.length; i++){
    var tm = response.data.results[i];
    var item = {
      id: tm.id,
      name: tm.name,
      backdrop_path: 'https://image.tmdb.org/t/p/w780' + tm.backdrop_path,
      poster_path: 'https://image.tmdb.org/t/p/w185' + tm.poster_path,
    }
    topTv_all.push(item)
    group.push(item)
    if (group.length == 6) {
      topTv.push(group);
      group = [];
    }
  }
  if (group.length > 0) topTv.push(group);

  response = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=d99a715f878cffa59290b2fe9f4ef43d`
  )
  const trendingTv = [];
  const trendingTv_all = [];
  group = [];
  for (var i = 0; i <  response.data.results.length; i++){
    var tm = response.data.results[i];
    var item = {
      id: tm.id,
      name: tm.name,
      backdrop_path: 'https://image.tmdb.org/t/p/w780' + tm.backdrop_path,
      poster_path: 'https://image.tmdb.org/t/p/w185' + tm.poster_path,
    }
    trendingTv_all.push(item)
    group.push(item)
    if (group.length == 6) {
      trendingTv.push(group);
      group = [];
    }
  }
  if (group.length > 0) trendingTv.push(group);
  res.send([currentMovies/*0*/, trendgingMovies/*1*/, popularMovies/*2*/, topMovies/*3*/, []/*4*/, 
    popularTv/*5*/, topTv/*6*/, 
  trendgingMovies_all/*7*/, popularMovies_all/*8*/, topMovies_all/*9*/, 
  []/*10*/, popularTv_all/*11*/, topTv_all/*12*/, trendingTv/*13*/, trendingTv_all/*14*/])
})

app.get('/multis', async (req, res) => {
  const term = req.query.term;
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=d99a715f878cffa59290b2fe9f4ef43d&language=en-US&query=${term}`
  )
  const multis = [];
  for (var i = 0; i < response.data.results.length; i++){
    var multi = response.data.results[i];
    if (multi.backdrop_path == null) continue;
    
    if (multi.media_type == 'tv') {
      multis.push({
        id: multi.id,
        name: multi.name,
        backdrop_path: 'https://image.tmdb.org/t/p/w780' + multi.backdrop_path,
        media_type: multi.media_type
      })
    }
    else if (multi.media_type == 'movie'){
      multis.push({
        id: multi.id,
        name: multi.title,
        backdrop_path: 'https://image.tmdb.org/t/p/w780' + multi.backdrop_path,
        media_type: multi.media_type
      })
    }
    if (i == 6) break;
  }
  // 这里表示把数据返回给客户端
  res.send(multis)
})

app.get('/movieDetail', async (req, res) => {
  const id = req.query.id;
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d99a715f878cffa59290b2fe9f4ef43d&language=en-US&page=1`
  )

  var data = response.data;
  var name = data.title; 
  var genres = '';
  for (var i = 0; i < data.genres.length; i++) {
    genres += data.genres[i].name + ",";
  }
  genres = genres.slice(0, -1);

  var languages = '';
  for (var i = 0; i < data.spoken_languages.length; i++) {
    languages += data.spoken_languages[i].english_name + ",";
  }
  languages = languages.slice(0, -1);

  var date = data.release_date.slice(0, 4);
  var run_time = data.run_time;
  var overview = data.overview;
  var vote_avg = data.vote_average;
  var tagline = data.tagline;
  res.send({
    name: name,
    genres: genres,
    spoken_languages: languages,
    release_date: date,
    runtime: run_time,
    overview: overview,
    vote_average: vote_avg,
    tagline: tagline
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})