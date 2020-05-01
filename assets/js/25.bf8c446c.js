(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{257:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"proxy-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Proxy configuration")]),e._v(" "),r("p",[e._v("OpenShift Container Platform 4.2 introduces support for installing and updating an OpenShift Container Platform cluster through a corporate proxy server on user-provisioned infrastructure (UPI).")]),e._v(" "),r("p",[e._v("This release of the Reference Configuration for Red Hat OpenShift Container Platform (OCP) on HPE SimpliVity\nsupports deploying OCP in environments that require the use of a proxy to access the internet.\nConfiguration variables for the playbooks must be specified, while the Ansible controller itself must also\nbe properly configured.")]),e._v(" "),r("h2",{attrs:{id:"proxy-configuration-variables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy-configuration-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Proxy configuration variables")]),e._v(" "),r("p",[e._v("All variables related to proxy configuration are described in the table below.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("http_proxy")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v('Hostname or IP address of the HTTP proxy server and the proxy port number separated by a colon. For example: "http://web-proxy.hpecloud.org:8080".'),r("br"),r("br"),e._v("Mandatory if proxy support is required.")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("https_proxy")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Hostname or IP address of the HTTP proxy server and the proxy port number separated by a colon. Typically, this is identical to the "),r("code",[e._v("http_proxy")]),e._v(" value."),r("br"),r("br"),e._v("Mandatory if proxy support is required.")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("no_proxy")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("A comma-separated list of hostnames, IP addresses, or network ranges that should bypass the proxy server. The list should include: localhost, the configured domain name used to deploy the OCP cluster, the DHCP subnet CIDR, and the vCenter hostname. "),r("br"),r("br"),e._v("Mandatory if proxy support is required.")])])])]),e._v(" "),r("p",[e._v("A sample proxy configuration is provided in the file "),r("code",[e._v("group_vars/all/vars.yml.sample")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('#\n# Proxy Configuration\n#\n#http_proxy: "http://web-proxy.hpecloud.org:8080"\n#https_proxy: "http://web-proxy.hpecloud.org:8080"\n#no_proxy: "localhost,.{{ domain_name }},{{ dhcp_subnet }},{{ vcenter_hostname }}"\n')])])]),r("p",[e._v("The sample "),r("code",[e._v("no_proxy")]),e._v(" value uses a number of variables ("),r("code",[e._v("domain_name")]),e._v(", "),r("code",[e._v("dhcp_subnet")]),e._v(" and "),r("code",[e._v("vcenter_hostname")]),e._v(")\nas well as the name "),r("code",[e._v("localhost")]),e._v(". After variable substitution, this would evaluate to a string similar to:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('no_proxy: "localhost,.hpecloud.org,10.15.163.0/24,vcentergen10.am2.cloudra.local"\n')])])]),r("h2",{attrs:{id:"configuring-the-ansible-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-ansible-controller","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuring the Ansible controller")]),e._v(" "),r("p",[e._v("The Ansible controller should be configured to match the proxy requirements for your environment. The only "),r("strong",[e._v("required")]),e._v(" proxy configuration on the Ansible node is to ensure that the solution playbooks can install any necessary software packages, such as a local HTTP server. This can be done, for example, by adding a proxy entry to the "),r("code",[e._v("/etc/dnf/dnf.conf")]),e._v(" file or by setting system-wide proxy settings in the "),r("code",[e._v("/etc/environment")]),e._v(" file.")]),e._v(" "),r("p",[e._v("The following is an example of how to configure a proxy server in the "),r("code",[e._v("/etc/dnf/dnf.conf")]),e._v(" file:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[main]\ngpgcheck=1\ninstallonly_limit=3\nclean_requirements_on_remove=True\nbest=False\nskip_if_unavailable=True\nproxy=http://web-proxy.hpecloud.org:8080\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);