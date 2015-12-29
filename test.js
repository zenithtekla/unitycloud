var a = 'Trout';

var dnm_data = {
  assembly_id:'Im assembly_id',
  assembly_number:'Im assembly_number',
  format_id:'',

  list_count: '0'
};
dnm_data[a] = 'b';
dnm_data.a = '!assign to property a not trout';
console.log(dnm_data.hasOwnProperty('suggest'));  // false
dnm_data.format = '[0-9]';
console.log(dnm_data);
