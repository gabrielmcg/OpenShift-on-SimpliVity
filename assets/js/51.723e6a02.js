(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{280:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"known-issues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),n("p",[e._v("Known issues in this release of Red Hat OpenShift Container Platform (OCP) on HPE SimpliVity:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Disaster recovery for OpenShift Container Platform is broken for various deployments, including bare metal and vSphere. ("),n("a",{attrs:{href:"https://bugzilla.redhat.com/show_bug.cgi?id=1718436",target:"_blank",rel:"noopener noreferrer"}},[e._v("BZ#1718436"),n("OutboundLink")],1),e._v(")")])]),e._v(" "),n("li",[n("p",[e._v("The playbooks make the master nodes non-schedulable. By default, the OCP 4.2 installer generates Kubernetes manifests which would make the master nodes schedulable in an attempt to support clusters with smaller footprints. However, a limitation with Kubernetes means router pods running on control plane machines will not be reachable by the ingress load balancer. The playbooks modify a manifest generated by the installer prior to running the actual installation in order to make the master nodes non-schedulable.")])]),e._v(" "),n("li",[n("p",[e._v("Ansible "),n("code",[e._v("2.9.1")]),e._v(" has a known issues that causes the cluster deployment to fail. The tested and recommended version of Ansible is "),n("code",[e._v("2.8.5")]),e._v(". Versions newer than "),n("code",[e._v("2.9.1")]),e._v(" may work but have not been tested.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);