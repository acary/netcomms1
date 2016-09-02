var server1 = {name: "primary_one", IP: "192.168.0.0", "encrypted": false};
var server2 = {name: "primary_two", IP: "192.168.0.1", "encrypted": "WEP"};

if (server1.encrypted) {
    alert(server1.name + " is encrypted");
} else if (server2.encrypted) {
    alert(server2.name + " is encrypted");
}
