/* add id to the form  */

const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // which refreshes the page.
    //next... take the value of input check if vadli to do that we need more id's
    //add id on inputcalled email or something
    const emailValue = email.value;

    if(!ValidateEmail(emailValue)) {
        form.classList.add('error'); 
    } else {
        form.classList.remove('error');
    }
});

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(mail).toLowerCase()))
  {
    return (true)
  }
    
    return (false)
}