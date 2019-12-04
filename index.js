var DeliforbellyRoster = []

// Current Customer Queue
function currentLine(DeliforbellyRoster) {
  
  
  
    
  if (DeliforbellyRoster.length > 0) 
   {return "The line is currently: " +DeliforbellyRoster+ "."} 
  else {return "The line is currently empty." }
}

//New Customer
function takeANumber(DeliforbellyRoster, name) {
  
  var newCustomerPosition = DeliforbellyRoster.push(name);
  
  var takenumberwelcomemessage = "Welcome, " + name + ". You are number " + newCustomerPosition + " in line.";
  
  return(takenumberwelcomemessage)
  
}
// New take number 
function takeANumber(DeliforbellyRoster) {
  var i = i + 1
  
  var customerNumber = DeliforbellyRoster.push(i++)
  
}
// Current Customer
function nowServing(DeliforbellyRoster) {
  
  
  var Currentcustomer = (DeliforbellyRoster[0]);
  
  if (DeliforbellyRoster.length>0) 
   {return "Currently serving " +DeliforbellyRoster.shift()+ "."} 
  else {return "There is nobody waiting to be served!"}
}

