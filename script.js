const data = [
      {
        "name"  : "Alex",
        "day" : "14",
        "month" : "7"
      },
      {
        "name"  : "Nataly",
        "day" : "27",
        "month" : "3"
      }
  ];
function daysUntilNext(month, day){
        var tday= new Date(), y= tday.getFullYear(), next= new Date(y, month-1, day);
        tday.setHours(0, 0, 0, 0);
        if(tday>next) next.setFullYear(y+1);
        return Math.round((next-tday)/8.64e7);
    }
function declension(forms, val) {
      const cases = [ 2, 0, 1, 1, 1, 2 ];
      return forms[(val % 100 > 4 && val % 100 < 20) ? 2 : cases[(val % 10 < 5) ? val % 10 : 5]];
  }
var bdayDiv = document.getElementById('bdayDiv');
for (let elem of data) {
  var d= daysUntilNext(elem.month, elem.day);
  if(d === 0 ) bdayDiv.insertAdjacentHTML('beforeend', '<div>Сегодня день рождения у '+elem.name+'</div>');
}
