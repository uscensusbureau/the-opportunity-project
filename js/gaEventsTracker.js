const GA_NAME = 'gtag_UA_155922885_2'

const signupLinks = document.querySelectorAll("a[href='https://public.govdelivery.com/accounts/USCENSUS/signup/16610']")
const contactUsLinks = document.querySelectorAll("a[href='https://www.census.gov/forms/contact-top.html']")
const outboundOptions = {
  hitType: 'event',
  eventCategory: 'Outbound Link',
  eventAction: 'click',
}

// track clicks to email list signup
for( link of signupLinks ){
  link.addEventListener('click', e => {
    e.preventDefault()
    ga(`${GA_NAME}.send`, {
      hitType: 'event',
      eventCategory: 'Outbound Link',
      eventAction: 'click',
      hitCallback: function(){ window.location.href = link.href },
      eventLabel: 'email list signup'
    });
  })
}

// track clicks to contact us form
for( contactLink of contactUsLinks ){
  contactLink.addEventListener('click', e => {
    e.preventDefault()
    ga(`${GA_NAME}.send`, {
      hitType: 'event',
      eventCategory: 'Email',
      eventAction: 'click',
      hitCallback: function(){ window.location.href = contactLink.href },
      eventLabel: 'contact us form'
    });
  })
}

// track direct email link clicks
const emailLinks = document.querySelectorAll("a[href^='mailto']")
for( email of emailLinks ){
  email.addEventListener('click', e => {
    ga(`${GA_NAME}.send`, {
      hitType: 'event',
      eventCategory: 'Email',
      eventAction: 'click',
      eventLabel: email.href.replace('mailto:', '')
    })
  })
}