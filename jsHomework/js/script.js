// 1) numberOfFilms o'zgaruvchisini yarating va undagi (— Qancha film ko'rgansiz?) savoliga foydalanuvchining javobini saqlang
// 2) personalMovieDB ob'ektini yarating va unga quyidagi keylarni qo'ying:
//     - count - birinchi savolga javob shu erda saqlanadi
//     - movies - bu keyda bo'sh ob'ektni saqlang
//     - actors - bu keyda bo'sh ob'ektni saqlang
//     - genres - bu erda bo'sh massiv saqlanadi
//     - privat - bu key o'zida boolean qiymatini false saqlaydi
// 3) Foydalanuvchiga ikkita savol bering:
//     - "Oxirgi ko'rgan filmlaringizdan biri?"
//     - "Uni qancha baholagan bo'lardingiz?"
// Javoblar alohida o'zgaruvchilarga joylashtirilishi kerak
// personalMovieDB.movies ga javoblarni quyidagi formatda yozing:
//     movies: {
//         'logan': '8.1'
//     }
// Konsolda hamma narsa xatosiz ishlashini tekshiring */


//consolniy kino teatr

// let numberOfFilms = +prompt('Qancha film ko`rgansiz?');
// let actorName = prompt('Bosh rolda qaysi aktyor qatnashgan ');
// let filmGenre = prompt('Qanaqa janrda suratga olingan ');
// let filmPrice = prompt('Filmga qancha pul sarflangan ');
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: actorName,
//     genres: filmGenre,
//     price: filmPrice,
//     privat: false
// };
// console.log(personalMovieDB); 
//  for (let i = 0; i < 1; i++){
//     let a = prompt('Oxirgi ko`rgan filmlaringizdan biri?'),
//           b = prompt('Uni qancha baholagan bo`lardingiz?');

//     if (a == null || b == null || a == '' || b == '') {
//         --i;
//     } else {
//         personalMovieDB.movies[a] = b;
//     }

//  }
//  console.log(personalMovieDB.movies);