let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let numArr = [];
    lowerCaseArr = arr.map(item => {
      return item.toLowerCase();
    })

      for(let i = 0; i < arr.length; i++){
        let eachEl = lowerCaseArr[i].split("");
        let els = eachEl.sort()
        joinedels = els.join("");
        numArr.push(joinedels)
      }
      let unique = [ ...new Set(numArr)]
      return unique
}
alert(aclean(arr));