(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{269:function(t,e,a){"use strict";a.r(e);var s=a(0),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cluster-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-verification","aria-hidden":"true"}},[t._v("#")]),t._v(" Cluster verification")]),t._v(" "),a("p",[t._v("A cluster verification program is run as the last stage of the "),a("code",[t._v("site.yml")]),t._v(" deployment playbook. This program\ninstalls a sample Wordpress / MySql application, validates that it is working as expected and then tears down the\napplication so that there are no artefacts left behind in your cluster.")]),t._v(" "),a("p",[t._v("In the provision stage, the verification test initially deploys the application by:")]),t._v(" "),a("ul",[a("li",[t._v("Creating a namespace (project)")]),t._v(" "),a("li",[t._v("Creating a storage class used to provide persistent storage for WordPress and MySQL")]),t._v(" "),a("li",[t._v("Creating persistent volume claims (PVC) for WordPress and MySQL")]),t._v(" "),a("li",[t._v("Creating deployments for WordPress and MySQL")]),t._v(" "),a("li",[t._v("Creating services for WordPress and MySQL")]),t._v(" "),a("li",[t._v("Exposing a route to the WordPress application server")])]),t._v(" "),a("p",[t._v("The validation stage ensures that the MySQL and WordPress pods are ready and then it tests HTTP connectivity to the\nWordPress application server.")]),t._v(" "),a("p",[t._v("Finally, all resources that were created by the deployment are removed in the teardown stage.")]),t._v(" "),a("h2",{attrs:{id:"configuration-variables-for-verification-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-variables-for-verification-program","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration variables for verification program")]),t._v(" "),a("p",[t._v("The variables used to configure the verification program are listed in the following table.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_app_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-wordpress'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_proj_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-wordpress-ns'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_disp_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'HPE WordPress/MySQL validation deployment'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_desc")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'HPE Wordpress/MySQL Deployment'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_storage_name")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-wp-storage-class'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_mysql_pv_claim")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-mysql-pv-claim'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_mysql_svc")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-mysql-service'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_mysql_route")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-mysql-route'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_mysql_deploy")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-mysql-deploy'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_wp_pv_claim")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-wp-pv-claim'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_wp_svc")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-wordpress-service'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_wp_route")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-wordpress-route'")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("wp_wp_deploy")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("playbooks/roles/wordpress/defaults/main.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Defaults to "),a("code",[t._v("'hpe-wp-deploy'")])])])])]),t._v(" "),a("h2",{attrs:{id:"manually-running-the-verification-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-running-the-verification-program","aria-hidden":"true"}},[t._v("#")]),t._v(" Manually running the verification program")]),t._v(" "),a("p",[t._v("You can run the individual stages of the verification program using the playbook "),a("code",[t._v("playbooks/wordpress.yml")]),t._v(".")]),t._v(" "),a("p",[t._v("To simply provision the Wordpress / MySQL application, set the options to not validate and to not teardown the deployment.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/wordpress.yml -e "validate=no teardown=no"\n')])])]),a("p",[t._v("To run the validation tasks after the application has been provisioned:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/wordpress.yml -e "provision=no teardown=no"\n')])])]),a("p",[t._v("To run the teardown tasks:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/wordpress.yml -e "provision=no validate=no"\n')])])]),a("p",[t._v("Running the playbook without any options will perform all three tasks - provision, validate and teardown:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/wordpress.yml\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);