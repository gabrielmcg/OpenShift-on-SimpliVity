(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{278:function(t,e,i){"use strict";i.r(e);var r=i(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"verify-prerequisites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#verify-prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Verify prerequisites")]),t._v(" "),i("p",[t._v("Before you start deployment, you must assemble the information required to assign values for each\nvariable used by the playbooks. The variables are fully documented in the section\n"),i("a",{attrs:{href:"../config-core/ansible-config"}},[t._v("Configuring the solution")]),t._v(".\nA brief overview of the information required is presented in the table below.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("Component")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Details")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Virtual Infrastructure")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("ESXi cluster of three machines"),i("br"),i("br"),t._v("vCenter 6.7U3 (CSI)"),i("br"),i("br"),t._v("vCenter 6.7U2 (non-CSI)")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("If you want HA you need three machines in the cluster and you need to deploy 3 masters, one per machine. "),i("br"),i("br"),t._v("The FQDN of your vCenter server and the name of the Datacenter. You will also need administrator credentials in order to create templates and spin up virtual machines.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("VLAN with access to Internet "),i("br"),t._v("(to pull Red Hat artifacts)")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Portgroup connected to all machines in your ESX cluster")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The playbooks install DHCP services on this VLAN so no other DHCP service should be running on this VLAN"),i("br"),i("br"),t._v("You will need one IP address for each VM configured in the Ansible inventory."),i("br"),i("br"),t._v("For more information, see the section on "),i("a",{attrs:{href:"../config-core/proxy-config"}},[t._v("Proxy configuration")]),t._v(".")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Routed subnet for use on the above VLAN")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Frontend Network / VLAN")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("External IP address for each load balancer plus one for the frontend VIP")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("NTP Services")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("IP addresses of time servers (NTP)")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Time services must be configured in your environment. The deployed solution uses certificates that are time-sensitive.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("DNS Services")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("IP addresses of DNS servers")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The DNS services deployed by the solution forwards unresolved requests to these DNS servers")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Red Hat Network Subscription")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Organization ID and authorization key"),i("br"),t._v("Alternatively a username and password.")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("The subscription must contain valid licenses for both Red Hat Enterprise Linux 7.6 and OpenShift Container Platform 4")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);