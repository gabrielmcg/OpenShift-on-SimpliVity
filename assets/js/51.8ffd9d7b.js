(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{240:function(e,t,o){"use strict";o.r(t);var a=o(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"new-features-in-this-release"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-features-in-this-release","aria-hidden":"true"}},[e._v("#")]),e._v(" New features in this release")]),e._v(" "),o("p",[e._v("This release of the Reference Configuration for Red Hat OpenShift Container Platform (OCP) on HPE SimpliVity\nsupports version 4.2 of the OpenShift Container Platform (OCP).")]),e._v(" "),o("h2",{attrs:{id:"container-storage-interface-csi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#container-storage-interface-csi","aria-hidden":"true"}},[e._v("#")]),e._v(" Container Storage Interface (CSI)")]),e._v(" "),o("p",[e._v("Originally, volume plugins were required to be implemented as part of the core Kubernetes codebase (in-tree).\nThe Container Storage Interface (CSI) is a standard for exposing arbitrary block and file storage systems to containerized\nworkloads on container orchestration systems like Kubernetes. Using CSI, third-party storage providers can write and\ndeploy plugins exposing new storage systems in Kubernetes without ever having to touch the core Kubernetes code.")]),e._v(" "),o("p",[e._v("One of the goals of Kubernetes CSI is to make implementations transparent to users by leveraging the existing internal\nvolume controller mechanism. This allows Kubernetes to drive CSI-backed operations such as dynamic provisioning, attachment,\nand mounting using existing primitives such as StorageClasses, PersistentVolumeClaims, and PersistentVolumes.")]),e._v(" "),o("p",[e._v("Support for Container Storage Interface (CSI) is now available in OpenShift Container Platform 4.2.")]),e._v(" "),o("p",[e._v("For more information, see the section on "),o("a",{attrs:{href:"../storage/csi"}},[e._v("Container Storage Interface")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"sysdig"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sysdig","aria-hidden":"true"}},[e._v("#")]),e._v(" Sysdig")]),e._v(" "),o("p",[e._v("You can use the playbook "),o("code",[e._v("playbooks/sysdig.yml")]),e._v(" to integrate your cluster with Sysdig. The implementation in this solution uses the Software as a Service (SaaS) version of Sysdig at "),o("code",[e._v("app.sysdigcloud.com")]),e._v(". The playbook deploys the Sysdig Agent software on all OpenShift node, with captured data relayed back to your Sysdig SaaS Cloud portal.")]),e._v(" "),o("p",[e._v("For more information, see the section on "),o("a",{attrs:{href:"../post-deploy/sysdig"}},[e._v("Sysdig Integration")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"installation-behind-proxy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation-behind-proxy","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation behind proxy")]),e._v(" "),o("p",[e._v("OpenShift Container Platform 4.2 introduces support for installing and updating an OpenShift Container Platform cluster through a corporate proxy server on user-provisioned infrastructure (UPI). Proxy information ("),o("code",[e._v("httpProxy")]),e._v(", "),o("code",[e._v("httpsProxy")]),e._v(", and "),o("code",[e._v("noProxy")]),e._v(") can be defined and used during the installation process and can also be managed post-installation via the cluster Proxy object.")]),e._v(" "),o("p",[e._v("For more information, see the section on "),o("a",{attrs:{href:"../config-core/proxy-config"}},[e._v("Proxy configuration")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"cluster-logging-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cluster-logging-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Cluster logging changes")]),e._v(" "),o("p",[e._v("The solution now supports two distinct profiles for deploying cluster logging. The "),o("code",[e._v("small")]),e._v(" profile deploys a single instance of Elasticsearch and a single instance of Kibana, with reduced CPU and memory requirements. This is useful for proof of concept deployments, where there may be limited resources and no need for redundancy. In contrast, the "),o("code",[e._v("large")]),e._v(" profile can be used to deploy a highly available, production-ready instance of cluster logging.")]),e._v(" "),o("p",[e._v("For more information, see the section on "),o("a",{attrs:{href:"../logging/logging-intro"}},[e._v("Cluster logging")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"automatic-provisioning-of-datastores"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#automatic-provisioning-of-datastores","aria-hidden":"true"}},[e._v("#")]),e._v(" Automatic provisioning of datastores")]),e._v(" "),o("p",[e._v("It is now possible to take advantage of functionality that is specific to HPE SimpliVity to automatically provision\ndatastores.")]),e._v(" "),o("p",[e._v("For more information, see the section on "),o("a",{attrs:{href:"../config-core/simplivity-config"}},[e._v("HPE SimpliVity configuration")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"cluster-verification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cluster-verification","aria-hidden":"true"}},[e._v("#")]),e._v(" Cluster verification")]),e._v(" "),o("p",[e._v("After the OCP cluster is sucessfully deployed using "),o("code",[e._v("site.yml")]),e._v(", a final cluster verification playbook is run to execute additional verification tasks.")]),e._v(" "),o("p",[e._v("For more information, see the section on "),o("a",{attrs:{href:"../post-deploy/cluster-verification"}},[e._v("Cluster verification")]),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);