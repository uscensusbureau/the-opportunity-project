const GA_NAME = 'gtag_UA_155922885_2'

const signupLinks = document.querySelectorAll("a[href='https://public.govdelivery.com/accounts/USCENSUS/signup/16610']")
const contactUsLinks = document.querySelectorAll("a[href='https://www.census.gov/forms/contact-top.html']")

// track clicks to email list signup
for( link of signupLinks ){
  link.addEventListener('click', e => {
    e.preventDefault()
    ga(`${GA_NAME}.send`, {
      hitType: 'event',
      eventCategory: 'Signup Form',
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
emailLinks.forEach( email => {
  console.log( email.href )
  email.addEventListener('click', e => {
    ga(`${GA_NAME}.send`, {
      hitType: 'event',
      eventCategory: 'Email',
      eventAction: 'click',
      eventLabel: email.href.replace('mailto:', '')
    })
  })
})

const productLinks = document.querySelectorAll("a[product-link]")
productLinks.forEach( link => 
  link.addEventListener('click', e => {
    const newTab = link.target === "_blank" || (e.ctrKey || e.metaKey)
    if( !newTab ){
      e.preventDefault()
    }
    ga(`${GA_NAME}.send`, {
      hitType: 'event',
      eventCategory: 'Product Click',
      eventAction: 'click',
      eventLabel: link.href,
      hitCallback: function(){ 
        if( !newTab ){
          window.location.href = link.href 
        }
      },
    })
  })
)
