/**
 * 
 * 
 */
function randRotaThor(ele, values, debug = false)
{
  const DEBUG = debug;
  DEBUG ? console.log('DEBUG Mode Activated') : '';
  DEBUG ? console.log('DEBUG randRotaThor') : '';
  DEBUG ? console.log('/******************/') : '';
  randDeg = values;
  DEBUG ? console.log(randDeg) : '';
  let randNum = rand(0,(randDeg.length)-1);
  DEBUG ? console.log(randNum) : '';
  let newDeg = randDeg[randNum];
  DEBUG ? console.log(newDeg) : '';
  rotaThor(ele, newDeg, debug);
  DEBUG ? console.log(ele.style.transform) : '';
  DEBUG ? console.log('/******************/') : '';
}