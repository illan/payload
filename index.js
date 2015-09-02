/**
 * navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
});
*/

function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
    alert(JSON.stringify(contacts));
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts with 'Bob' in any name field
var options      = new ContactFindOptions();
options.filter   = "Patri";
options.multiple = true;
var fields       = ["displayName", "name", "phoneNumbers"];
navigator.contacts.find(fields, onSuccess, onError, options);

