function updateMask() {
  const holes = document.querySelectorAll(".video-hole")
  const w = window.innerWidth
  const h = window.innerHeight
  let svg = `<mask id="video-mask" x="0" y="0" width="${w}" height="${h}">
        <rect x="0" y="0" width="${w}" height="${h}" fill="black"/>`

  holes.forEach((hole) => {
    const rect = hole.getBoundingClientRect()
    svg += `<rect x="${rect.left}" y="${rect.top}" width="${rect.width}" height="${rect.height}" fill="white"/>`
  })

  svg += `</mask>`
  document.getElementById("mask-svg").innerHTML = svg

  const video = document.getElementById("bg-video")
  video.style.mask = video.style.webkitMask = `url(#video-mask)`
}

window.addEventListener("resize", () => {
  requestAnimationFrame(updateMask)
})
window.addEventListener("load", () => {
  requestAnimationFrame(updateMask)
})
