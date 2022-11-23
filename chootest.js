var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer %place token here%");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://public-api.medlemssystem.com/v1/members?filters={\"$and\":[{\"field\":\"custom_fields.param_attr_id\",\"value\":\"1273\"},{\"field\":\"custom_fields.param_attr_value\",\"value\":\"1011560\"}]}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
