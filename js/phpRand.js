/**
 * 
 */
function rand(min, max, debug)
{
  const DEBUG = debug;
  let num;
  DEBUG ? console.log('DEBUG Mode Activated') : '';
  DEBUG ? console.log('DEBUG phpRand.js') : '';
  DEBUG ? console.log('/******************/') : '';
  num = Math.random();
  DEBUG ? console.log(num) : '';
  num = num*(max-min+1);
  DEBUG ? console.log(num) : '';
  num = num+min;
  DEBUG ? console.log(num) : '';
  num = Math.floor(num);
  DEBUG ? console.log(num) : '';
  DEBUG ? console.log('/******************/') : '';
  return Math.floor(Math.random()*(max-min+1)+min);
}