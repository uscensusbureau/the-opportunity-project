const GA_NAME = 'gtag_UA_155922885_2'

const signupLinks = document.querySelectorAll("a[href='https://public.govdelivery.com/accounts/USCENSUS/signup/16610']")
const contactUsLinks = document.querySelectorAll("a[href='https://www.census.gov/forms/contact-top.html']")
const coilContactLinks = document.querySelectorAll("a[href='https://jmn7vkn4eg2.typeform.com/to/UM8tQQdB']")

function createFunctionWithTimeout( callback, opt_timeout ){
  let called = false;
  function fn() {
    if (!called) {
      called = true;
      callback();
    }
  }
  setTimeout( fn, opt_timeout || 2000 );
  return fn;
}

// track clicks to email list signup
for( link of signupLinks ){
  link.addEventListener('click', e => {
    if( window.ga && ga.create ){
      e.preventDefault()
      ga(`${GA_NAME}.send`, {
        hitType: 'event',
        eventCategory: 'Signup Form',
        eventAction: 'click',
        hitCallback: createFunctionWithTimeout( 
          function(){ window.location.href = link.href }),
        eventLabel: 'email list signup'
      });
    }
  })
}

// track clicks to contact us form
for( contactLink of contactUsLinks ){
  contactLink.addEventListener('click', e => {
    if( window.ga && ga.create ){
      e.preventDefault()
      ga(`${GA_NAME}.send`, {
        hitType: 'event',
        eventCategory: 'Email',
        eventAction: 'click',
        hitCallback:  
          createFunctionWithTimeout( function(){ window.location.href = contactLink.href }),
        eventLabel: 'contact us form'
      });
    }
  })
}


// track direct email link clicks
const emailLinks = document.querySelectorAll("a[href^='mailto']")
emailLinks.forEach( email => {
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
    if( window.ga && ga.create ){
      if( !newTab ){
        e.preventDefault()
      }
      ga(`${GA_NAME}.send`, {
        hitType: 'event',
        eventCategory: 'Product Click',
        eventAction: 'click',
        eventLabel: link.href,
        hitCallback: createFunctionWithTimeout( 
          function(){ 
            if( !newTab ){
              window.location.href = link.href 
            }
          }),
      })
    }
  })
)

// track clicks to COIL contact us form
for( link of coilContactLinks ){
  link.addEventListener('click', e => {
    const newTab = link.target === "_blank" || (e.ctrKey || e.metaKey)
    if( window.ga && ga.create ){
      if( !newTab ){
        e.preventDefault()
      }
      ga(`${GA_NAME}.send`, {
        hitType: 'event',
        eventCategory: 'External Link',
        eventAction: 'click',
        hitCallback:  
          createFunctionWithTimeout( function(){ 
            if( !newTab ){
              window.location.href = contactLink.href 
            }
          }),
        eventLabel: 'COIL Contact Us'
      });
    }
  })
}

const annualReportLinks = document.querySelectorAll('a[href*=".pdf"]')
annualReportLinks.forEach( link =>
  link.addEventListener('click', e => {
    ga(`${GA_NAME}.send`, {
      hitType: 'event',
      eventCategory: 'PDF',
      eventAction: 'click',
      eventLabel: link.href.split("/").pop(),
    })
  })
)