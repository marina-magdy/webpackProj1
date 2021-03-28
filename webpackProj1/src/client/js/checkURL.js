function checkURL(link){
  
  let exp = /[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)?/;
  let regex = new RegExp(exp);
  if (regex.test(link)) {
      return true;
    } else {
      return false;
    }
}
export {checkURL}