const widgetControls = document.getElementById('challenge-widget__form')
const widgetDetails = document.getElementsByClassName('challenge-widget__details')
if (widgetControls) {
  widgetControls.addEventListener('change', evt => {
    for (const section of widgetDetails) {
      if (section.id === evt.target.value) {
        section.classList.remove('display-none')
      } else {
        section.classList.add('display-none')
      }
    }
  })
}
