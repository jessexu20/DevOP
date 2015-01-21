var AWS = require('aws-sdk');
AWS.config.apiVersions = {
  ec2: '2014-10-01',
  // other service API versions
};
AWS.config.update({region: 'us-east-1'});

var ec2 = new AWS.EC2();

// ##List Available Zone
// var params = {
//   DryRun:  false,
// };
// ec2.describeAvailabilityZones(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

//###Start the instance
var params = {
  InstanceIds: [ /* required */
    'i-63ef984c',
    /* more items */
  ],
};
ec2.startInstances(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else{// successful response
	  for(var i=0;i<data.StartingInstances.length;i++){
	  	console.log(data.StartingInstances[i]);
	  }
  }
});

//####stop instance
// ec2.stopInstances(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else{// successful response
// 	  for(var i=0;i < data.StoppingInstances.length;i++){
// 		  console.log(data.StoppingInstances[i]);
// 	  }
//   }
// });

//#### describe the instance
// ec2.describeInstances(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else{
// 	  // console.log(data);           // successful response
// 	  for(var i=0;i<data.Reservations.length;i++){
// 	  	console.log("ReservationId="+data.Reservations[i].ReservationId);
// 		console.log("OwnerId="+data.Reservations[i].OwnerId);
// 		console.log("Groups="+data.Reservations[i].Groups);
// 		for(var j=0;j<data.Reservations[i].Instances.length;j++){
// 			console.log(data.Reservations[i].Instances[j]);
// 		}
// 	  }
//
//   }
// });

// #Reboot Instances
//
// ec2.rebootInstances(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else{
// 	  console.log("Rebooting");
// 	  console.log(data);           // successful response
//   }
//
// });


