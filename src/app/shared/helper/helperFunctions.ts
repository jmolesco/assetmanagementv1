import * as moment from 'moment';
export function convertStringToDate(date) {
  let momentDate = moment(date).format("YYYY-MM-DD");
  console.log(momentDate);
  return momentDate;
}
export function convertDataIntoDate(objData){
  console.log(objData);
 objData.array.forEach(element => {
   
 });

}