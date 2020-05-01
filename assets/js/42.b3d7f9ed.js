(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{385:function(e,t,o){"use strict";o.r(t);var s=o(33),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"logging-into-the-ocp-cluster-for-the-first-time"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging-into-the-ocp-cluster-for-the-first-time"}},[e._v("#")]),e._v(" Logging into the OCP cluster for the first time")]),e._v(" "),o("p",[e._v("Once the "),o("code",[e._v("site.yml")]),e._v(" playbook has run successfully to completion, the debug output will contain details on how to access the cluster:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('ok: [localhost] => {\n    "res": {\n        "changed": true,\n        "cmd": "/home/core/kits/openshift-install --dir /home/core/.ocp wait-for install-complete\\n",\n        "delta": "0:10:59.853011",\n        "end": "2019-09-26 07:37:54.920491",\n        "failed": false,\n        "rc": 0,\n        "start": "2019-09-26 07:26:55.067480",\n        "stderr": "level=info msg=\\"Waiting up to 30m0s for the cluster at https://api.ocp.hpecloud.org:6443 to initialize...\\"\\nlevel=info msg=\\"Waiting up to 10m0s for the openshift-console route to be created...\\"\\nlevel=info msg=\\"Install complete!\\"\\nlevel=info msg=\\"To access the cluster as the system:admin user when using \'oc\', run \'export KUBECONFIG=/home/core/.ocp/auth/kubeconfig\'\\"\\nlevel=info msg=\\"Access the OpenShift web-console here: https://console-openshift-console.apps.ocp.hpecloud.org\\"\\nlevel=info msg=\\"Login to the console with user: kubeadmin, password: UQVIT-7jBcB-VIQ9q-L2sNH\\"",\n        "stderr_lines": [\n            "level=info msg=\\"Waiting up to 30m0s for the cluster at https://api.ocp.hpecloud.org:6443 to initialize...\\"",\n            "level=info msg=\\"Waiting up to 10m0s for the openshift-console route to be created...\\"",\n            "level=info msg=\\"Install complete!\\"",\n            "level=info msg=\\"To access the cluster as the system:admin user when using \'oc\', run \'export KUBECONFIG=/home/core/.ocp/auth/kubeconfig\'\\"",\n            "level=info msg=\\"Access the OpenShift web-console here: https://console-openshift-console.apps.ocp.hpecloud.org\\"",\n            "level=info msg=\\"Login to the console with user: kubeadmin, password: UQVIT-7jBcB-VIQ9q-L2sNH\\""\n        ],\n        "stdout": "",\n        "stdout_lines": []\n    }\n}\n')])])]),o("p",[o("strong",[e._v("Note")]),e._v(": This debug output is also logged to the "),o("code",[e._v("~/OpenShift-on-SimpliVity/ansible.log")]),e._v(" file.")]),e._v(" "),o("p",[e._v("To log into the cluster as the "),o("code",[e._v("system:admin")]),e._v(" user when using the "),o("code",[e._v("oc")]),e._v(" client, issue the following commands\nusing the username and password displayed. The password is also available at "),o("code",[e._v("~/.ocp/auth/kubeadmin-password")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ export KUBECONFIG=/home/core/.ocp/auth/kubeconfig\n\n$ oc login -u kubeadmin -p UQVIT-7jBcB-VIQ9q-L2sNH\n")])])]),o("p",[e._v("Access the web console at the URL provided in the above debug output, using the same username "),o("code",[e._v("kubeadmin")]),e._v(" and password:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("https://console-openshift-console.apps.ocp.hpecloud.org\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);