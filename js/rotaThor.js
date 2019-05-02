/**
 * 
 * 
 */
function rotaThor(ele, newVal, debug = false)
{
  const DEBUG = debug;
  DEBUG ? console.log('DEBUG Mode Activated') : '';
  DEBUG ? console.log('DEBUG rotaThor') : '';
  DEBUG ? console.log('/******************/') : '';
  currDeg = degGetter(ele, debug);
  DEBUG ? console.log(currDeg) : '';
  DEBUG ? console.log(newVal) : '';
  newDeg = currDeg + newVal
  newDeg = 'rotate('+newDeg+'deg)';
  DEBUG ? console.log(newDeg) : '';
  DEBUG ? console.log(ele.style.transform) : '';
  ele.style.transform = newDeg;
  DEBUG ? console.log(ele.style.transform) : '';
  DEBUG ? console.log('/******************/') : '';
  return newDeg;
}