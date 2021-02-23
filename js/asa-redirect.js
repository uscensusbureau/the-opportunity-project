console.log('asa redirect')

const loc = window.location.pathname.replace(/\/$/, '').replace('.html', '') // get rid of trailing '/'
const sprint = loc.substring( loc.lastIndexOf('/') + 1 )
const hash = window.location.hash
console.log(sprint, hash)
if( sprint === 'sprints' && hash === '#asa'){
  window.location.replace('/get-involved/#asa')
}