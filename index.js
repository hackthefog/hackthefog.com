$('.updates').click(() => submitForm())
$('#waitlist').keydown(e => {
  if (e.which === 13) {
    submitForm()
  }
})
function submitForm() {
  $('.updates').text('Loading…')
  const emailAddress = $('#waitlist').val()
  if (emailAddress !== '' && validateEmail(emailAddress)) {
    fetch('https://usebasin.com/f/c71a8c2b1707', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailAddress })
    })
      .then(() => {
        $('.updates').text('Success!')
      })
      .catch(() => {
        $('.updates').text('Error!')
      })
  } else {
    $('.updates').text('Invalid email!')
  }
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
