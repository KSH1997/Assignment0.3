const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');  // EJS 패키지 import

// 템플릿 엔진 설정
app.set('view engine', 'ejs', {
    encoding: 'UTF-8' // 인코딩을 UTF-8로 설정
});
app.set('views', path.join(__dirname, 'views'));

// 홈페이지 라우팅
app.get('/', (req, res) => {
    res.render('index', { title: 'KSHomepage' });
});

// 홈페이지 정보 라우팅
app.get('/about-here', (req, res) => {
    const Introduce = `
Welcome, intrepid explorer! You've stumbled upon a portal – a gateway to the ever-evolving realm of Information Systems. Here, the symphony of data, hardware, and software comes alive, orchestrating the intricate dance of our digital world.
Imagine a vast network, a web of connections that pulsates with information. Every click, every message, every transaction – a ripple in the ever-expanding pond of data. Understanding how this information flows, how it's captured, processed, and utilized – that's the essence of Information Systems.
This isn't just a dusty textbook subject. We're talking about the invisible engine powering our connected lives. From the social media platforms you frequent to the seamless online transactions you take for granted, Information Systems are the silent architects behind it all.
Here, on this very homepage, you'll embark on a dynamic journey. We'll dissect the anatomy of complex systems, unveil the secrets of optimizing data flow, and delve into the cutting-edge advancements shaping the future of information management.
But this exploration isn't a solitary trek. We encourage lively discussions, ignite debates about best practices, and foster a community of information enthusiasts. Whether you're a seasoned professional navigating the ever-shifting landscape, or a curious student taking your first steps in this fascinating field, you'll find valuable resources and insights here.
So, shed your inhibitions and embrace the unknown! This homepage is your launchpad – a springboard into a world where information empowers, connects, and transforms. Let's unlock the secrets of the digital age, together!
    `;
    res.render('about-here', { Introduce: Introduce });
});

// 게시글 목록 페이지 라우팅
app.get('/posts', (req, res) => {
    // 데이터베이스에서 게시글 목록 조회
    const posts = [
        { id: 1, title: 'SelfIntroduction', content: '' },
        { id: 2, title: 'VentinfOut', content: '' },
    ];
    // 템플릿 렌더링
    res.render('posts', { posts: posts });
});

// 첫 번째 페이지 라우팅
app.get('/posts/first-page', (req, res) => {
    // 사진 추가
    const imagePath = path.join(__dirname, 'public/images/my-photo.jpg');
    const image = fs.readFileSync(imagePath, 'base64');

    // 자기 소개 글 작성
    const selfIntroduction = `
    Hi everyone, I'm KwakSangHeon. At 28, I'm a dedicated student pursuing a major in Information Systems.  I'm excited to be here and learn more about this ever-evolving field.
  `;
    // HTML 페이지 렌더링
    res.render('first-page', {
        image: image,
        selfIntroduction: selfIntroduction
    });
});

// 두 번째 페이지 라우팅
app.get('/posts/second-page', (req, res) => {
    // 사진 추가
    const imagePath = path.join(__dirname, 'public/images/my-photo2.jpg');
    const image = fs.readFileSync(imagePath, 'base64');

    // 푸념
    const ventingout = `
    ya...i know, i wasted so many times. like my other friends, this guys are already beginning work in companies, start his own social life. but me? i didn't have anyting. i don't know when my life start twisted. shiit... 
  `;
    // HTML 페이지 렌더링
    res.render('second-page', {
        image: image,
        ventingout: ventingout
    });
});


// 서버 실행
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
