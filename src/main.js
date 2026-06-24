import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <section>
      <nav class="navbar">
        <ul>
          <li><a href="#home">Grand Line</a></li>
          <li>
            <input 
              type="search" 
              placeholder="Search bounties..." 
              class="search-bar"
            />
          </li>
        </ul>
      </nav>
    </section>
    <h1>One Piece Bounty</h1>
    <p>Welcome to the One Piece Bounty dashboard!</p>
  </div>


`

setupCounter(document.querySelector('#counter'))
