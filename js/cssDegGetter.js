/**
 * 
 * 
 */
function degGetter(ele, debug = false)
{
  const DEBUG = debug;
  DEBUG ? console.log('DEBUG Mode Activated') : '';
  DEBUG ? console.log('DEBUG degGetter') : '';
  DEBUG ? console.log('/******************/') : '';
  let currentDeg = ele.style.transform;
  currentDeg = currentDeg.split('deg')[0];
  DEBUG ? console.log(currentDeg) : '';
  currentDeg = currentDeg.split('(')[1];
  DEBUG ? console.log(currentDeg) : '';
  currentDeg = Number(currentDeg);
  DEBUG ? console.log(currentDeg) : '';
  DEBUG ? console.log('/******************/') : '';
  return currentDeg;
}