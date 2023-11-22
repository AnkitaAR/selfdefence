import React from 'react'
import './Home.css'
function Home() {
  function age(){
    var ageinput = document.getElementById('ageinput').value
    if(ageinput<=10){
      document.getElementById('tips').innerHTML= 
      'For self-defense under 10, prioritize personal safety awareness by staying close to trusted adults, learning contact information, and identifying safe places. Teach stranger danger, basic safety habits, and emergency procedures. Encourage open communication and age-appropriate physical activities. Consider enrolling in martial arts or self-defense classes designed for children to promote coordination and discipline in a safe environment.'
    }
    if(ageinput>10 && ageinput<=18){
      document.getElementById('tips').innerHTML= 
      'For young people aged 10 to 18, self-defense means staying alert, walking confidently, and trusting your instincts. Stick to well-traveled and well-lit routes, and be careful about sharing too much on social media. Consider taking a self-defense class to learn basic techniques, and always know how to escape in different situations. If you ever feel threatened, dont hesitate to use your voice to attract attention. The main focus is on staying safe, being aware, and preventing potential dangers in your everyday life.'
    }
    if(ageinput>18 && ageinput<=45){
      document.getElementById('tips').innerHTML= 
      'For adults under 45, prioritize personal safety by staying aware of surroundings, walking confidently, and trusting instincts. Use well-traveled routes, especially in well-lit areas, and be cautious with personal information on social media. Consider self-defense classes for basic techniques, know escape routes, and, if feeling threatened, use your voice to attract attention. The key is to stay alert, confident, and proactive in preventing potential risks.'
    }
    if(ageinput>45 && ageinput<=60){
      document.getElementById('tips').innerHTML= 
      'For individuals between 45 and 60 years old, prioritize personal safety by maintaining heightened awareness, projecting confident body language, and trusting your instincts. Choose well-traveled routes, especially in well-lit areas, and exercise caution with personal information online. Consider enrolling in self-defense classes tailored to your needs for essential techniques. Familiarize yourself with escape routes, and if necessary, use a strong, assertive voice to attract attention. Emphasize a proactive and alert approach to minimize potential risks, ensuring your well-being in various situations.'
    }
    if(ageinput>60){
      document.getElementById('tips').innerHTML= 
      'You are quite old so you would not be able to defend yourself as good as you used to. IF you have been a martial arts master or a really fit person across the years, then use your skills to your advantage. If not, then you should be careful who you talk to. You might need to travel with an adult to keep you 100% safe but for normal journeys, you may go alone.'
    }
  }
  return (
    <div id='selfdefensenpm'>
      <h1 style={{textAlign: "center"}}>SELF DEFENSE</h1>
      <div className='container-fluid'>
        <h2 style={{textAlign: "left"}}>What is Self defence?</h2>
        <p style={{fontSize: "23px"}}>
Self-defense is the legal use of reasonable force to protect oneself or others from imminent harm. Rooted in the belief that individuals have the inherent right to
 safeguard their lives, self-defense requires that the response be proportional to the immediate threat, and reasonable efforts to avoid the need for force should be made. 
 Legal criteria typically include the principles of imminence, proportionality, avoidance, and reasonableness. While the concept is universal, the specific laws governing 
 self-defense can vary by jurisdiction,\and understanding the legal framework is crucial for individuals navigating potential situations where self-defense may be invoked as a 
 justifiable response.</p>
      </div>
      <div className='container-fluid'>
      <h2 style={{textAlign: "left"}}>Why is Self defence important?</h2>
        <p style={{fontSize: "23px"}}>
        Self-defense is essential for personal safety, empowerment, and societal well-being. It equips individuals with the tools to protect themselves, 
        fostering confidence and a proactive mindset, while also acting as a deterrent against crime. Its comprehensive nature includes heightened situational awareness and 
        contributes to both physical and mental fitness. In essence, self-defense is a holistic approach to safety, offering empowerment, prevention of victimization, and the 
        cultivation of independence.</p>
      </div>
      <div className='container-fluid'>
      <h2 style={{textAlign: "left"}}>How to use self defence</h2>
        <p style={{fontSize: "23px"}}>
        Self-defense, including martial arts, combines mastering physical techniques, mental preparedness, and situational awareness. Training instills foundational moves, 
        emphasizes alertness, and encourages de-escalation. Using force is a last resort, aiming to neutralize threats. Confidence, mental readiness, and all types of awareness are 
        key, with ongoing learning for current strategies. Effective self-defense prioritizes personal safety, non-violent resolutions, and judicious use of force.</p>
      </div>
      <video controls height={'600px'} style={{textAlign: "center"}}>
        <source src="C:\Users\Neo\selfdefense.mp4"></source>
        </video>
        <form style={{textAlign: "center"}}>
          <h3>Please Put in your Age for tips:</h3>
        <input type='number' id='ageinput'/>
        </form>
        <button onClick={age}>Submit</button>
        <p id='tips'></p><br/><br/><br/>
    </div>
  )
}
export default Home