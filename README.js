# updates

# BELTAH-MD PROJECT 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vcf  project</title>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        body{
            width: 100%;
            height: 100vh;
            background: rgb(98, 0, 255);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        form{
            width: 300px;
            height: auto;
            padding: 40px;
            border-radius: 30px;
            background: #ddd;
        }
        /*.input-box input{
            color: black;
            width: 100px;
            background: transparent;
        }
        .dabaa{
            color: black;
            width: auto;
            border: none;
            outline: none;
            border: 5px solid rgba(red, green, blue, alpha);
            border-radius: 60px;
            align-items: center;
            justify-content: center;

        }
        */
        .sub{
            
  /* Add some padding to make the button larger */
  padding: 10px 20px;
  
  /* Change the background color and text color */
  background-color: #4CAF50;
  color: #ffffff;
  
  /* Add some border radius to make the button rounded */
  border-radius: 5px;
  
  /* Add some hover effect */
  cursor: pointer;
  transition: background-color 0.3s;
}
sub:hover {
  background-color: #3e8e41;

            border-radius: 1px;
            border: #ddd;
            height: 30px;
            
        }
        .dabaa{
            
  /* Add some padding to make the input field larger */
  padding: 10px;
  
  /* Change the border style and color */
  border: 1px solid #ccc;
  border-radius: 5px;
  
  /* Change the font style and size */
  font-size: 16px;
  font-family: Arial, sans-serif;
  
  /* Add some hover effect */
  transition: border-color 0.3s;
}
input[type="text"][name="name"]:hover {
  border-color: #aaa;
}
input[type="text"][name="name"]:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .mail{
            
            
            /* Add some padding to make the input field larger */
            padding: 10px;
            
            /* Change the border style and color */
            border: 1px solid #ccc;
            border-radius: 5px;
            
            /* Change the font style and size */
            font-size: 16px;
            font-family: Arial, sans-serif;
            
            /* Add some hover effect */
            transition: border-color 0.3s;
          }
          input[type="text"][name="name"]:hover {
            border-color: #aaa;
          }
          input[type="text"][name="name"]:focus {
            border-color: #4CAF50;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  
        }
        .messag{
            /* Add some padding to make the message box larger */
  padding: 20px;
  
  /* Change the background color and text color */
  background-color: #f0f0f0;
  color: #333;
  
  /* Add some border style and radius */
  border: 1px solid #ccc;
  border-radius: 10px;
  
  /* Add some box shadow to give it a 3D effect */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        }
        .num{
           /* Add some padding to make the input field larger */
           padding: 10px;
            
            /* Change the border style and color */
            border: 1px solid #ccc;
            border-radius: 5px;
            
            /* Change the font style and size */
            font-size: 16px;
            font-family: Arial, sans-serif;
            
            /* Add some hover effect */
            transition: border-color 0.3s;
          }
          input[type="text"][name="name"]:hover {
            border-color: #aaa;
          }
          input[type="text"][name="name"]:focus {
            border-color: #4CAF50;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
           

        }
        
    </style>
</head>
<body>
    <form name="submit-to-google-sheet">
        <h1>GIVE AWAY BY WASI</h1> <br>
     <!---   <a href="#">join vcf dropping gc</a> <br> -->
        <label>Name:</label><br>
        <input type="text" name="name" required class="dabaa" placeholder="type your name here" >  <br><br>
        <label>HEROKU EMAIL</label><br><br>
        <input type="text" name="email" required  class="mail"  placeholder="heroku mail"><br><br>
        <label>Whatsapp-number</label><br><br>
        <input type="number" name="number" required  class="num"  placeholder="whatsapp number"><br><br>
        

        <label>gender</label><br><br>
        <input type="radio" name="gender" value="Male"><label>Male</label><br><br>
        <input type="radio" name="gender" value="Female"><label>Female</label><br><br>
        <label>message</label><br><br>
        <textarea name="message" cols="20" required  class="messag"    placeholder=" entr any message for us ?...."

        ></textarea><br><br>
        <input type="submit" name="submit" id="submit-btn" class="sub">,<br>
        <a href="https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j">FOLLOW CHANNLE</a> <br><br>
        <span id="wasi"></span>





    </form>
    
      
      <script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwf7HSx4QcVFeugt3S2RAN_wnD7l2OSGdGFfekjSbmdLodOVRkAaivZgSFQWygByJ94PQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const wasi = document.getElementById('wasi');
        //------------------------------------------------------
       // const submitBtn = document.getElementById('submit-btn');
        //--------------------------------------------------------
      /*  submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  this.disabled = true;
  this.value = 'Submitting...';
  // You can also add a timeout to re-enable the button after a certain period
  setTimeout(function() {
    submitBtn.disabled = false;
   // submitBtn.value = 'Submit';
  }, 5000); // 5 seconds
});
*/
      //-------------------------------------------
       /* form.addEventListener('submit', e => {
          e.preventDefault()
          this.disabled=true;
          this.value='submitting';
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                wasi.innerHTML="YOUR NUMBER HAS BEEN SUBMETTIED JOIN GROUP AND WAIT FOR VCF";
                setTimeout(function(){
                    wasi.innerHTML="";



                },5000)
                form.reset();


            })
            .catch(error => console.error('Error!', error.message))
        })
            */
            form.addEventListener('submit', e => {
  e.preventDefault();
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
  submitBtn.value = 'Submitting...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      wasi.innerHTML = "your data has been catched by wasi ser server";
      setTimeout(function() {
        wasi.innerHTML = "";
      }, 5000);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.value = 'Submit';
    })
    .catch(error => console.error('Error!', error.message));
});
      </script>
      
</body>
</html>
