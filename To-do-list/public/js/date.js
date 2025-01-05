function printDate(){
      let currentDate = new Date();
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
      let today = currentDate.getDate();
      let month = monthNames[currentDate.getMonth()]
      let year = currentDate.getFullYear();
      let formattedDate = today + " " + month + " " + year;
    
      return formattedDate
     
    }  
  
    export {printDate};