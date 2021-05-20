function sendMail()
{
    const name=document.getElementById("Naam").value;
    const subject=document.getElementById("Subject").value;
    const email=document.getElementById("Email").value;
    const message=document.getElementById("Message").value;

    const body=`Naam: ${name}
                E-mail: ${email} 
                Bericht: ${message}`;
    
    window.open(`mailto:florwalravens@hotmail.com?subject=${subject}&body=${body}`);

}