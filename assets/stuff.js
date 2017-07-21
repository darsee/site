const emoji = ['🙃','🤖','🚶','🐒','🐙','☘','🍕','🍺','🏹','🎧','🏞','💻','🖥','📺','🛠','⚙']

const randomEmoji = document.querySelector(".js-random-emoji")

if (randomEmoji) {
  randomEmoji.textContent = emoji[Math.floor(Math.random() * emoji.length)]
}

_gaq.push(['_trackPageview'])
