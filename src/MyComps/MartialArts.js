import React from 'react'

function MartialArts() {
  const pstyling={
    fontSize: "21px",
    marginRight: "70px",
    marginLeft: "70px"
  }
  return (
    <div>
      <marquee><h1>Martial Arts</h1></marquee>
      <p style={pstyling}>Martial arts are a crucial step in self defence. Lets learn about a few popular martial arts.</p><br/>
      <p style={pstyling}>Karate: 
Karate is a martial art that started in the Ryukyu Kingdom, influenced by Chinese martial arts. It uses strikes like punching and kicking. Originally called "Tang hand," 
it later became "empty hand" in Japanese. It reached mainland Japan in the early 20th century, gaining global popularity after World War II through movies. Karate schools, 
known as dōjōs, appeared worldwide for both casual learners and serious practitioners. Some experts emphasized the misconception of karate in movies, while 
others saw it as a lifelong pursuit requiring discipline. Karate was included in the 2020 Summer Olympics, and estimates suggest 50 to 100 million practitioners worldwide.</p>
<p style={pstyling}>Taekwando:
Taekwondo is a Korean martial art that focuses on high, fast kicks and dynamic movements. It originated from various traditional Korean martial arts in the 1940s and 1950s. 
The name means "the way of the foot and fist" and highlights its emphasis on kicking and punching techniques. Taekwondo training includes patterns, sparring, and breaking 
techniques to develop physical and mental discipline. Practitioners, known as taekwondoists, wear a uniform with colored belts indicating their rank. Taekwondo became an 
official Olympic sport in 2000, and it emphasizes values like respect and perseverance.</p>
<p style={pstyling}>KUNG FU:

Kung Fu is a Chinese martial art that includes various fighting styles. It involves a range of techniques such as kicks, punches, and strikes, often inspired by animals. 
Kung Fu focuses on both physical skill and mental discipline, promoting strength, flexibility, and balance. Practitioners, called martial artists, often train in forms, which 
are choreographed patterns of movements. Kung Fu has a rich history and philosophy, and it has influenced many other martial arts around the world.</p>
<img src='https://upload.wikimedia.org/wikipedia/commons/5/5d/Milad_Kharchegani_at_the_2016_Summer_Olympics.jpg' height={'500px'} style={{textAlign: "center"}}/>
    </div>
  )
}
export default MartialArts