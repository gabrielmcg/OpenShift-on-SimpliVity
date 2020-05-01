(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{213:function(t,e,r){"use strict";r.r(e);var n=r(0),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"openshift-artifacts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#openshift-artifacts","aria-hidden":"true"}},[t._v("#")]),t._v(" OpenShift artifacts")]),t._v(" "),r("h2",{attrs:{id:"documentation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#documentation","aria-hidden":"true"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),r("h3",{attrs:{id:"architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),r("p",[t._v("An introduction to the OpenShift Container Platform architecture is available at\n"),r("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/architecture/architecture.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.openshift.com/container-platform/4.2/architecture/architecture.html"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),r("p",[t._v("OpenShift Container Platform supports two types of installation scenarios:")]),t._v(" "),r("ul",[r("li",[t._v("Installer-Provisioned Infrastructure (IPI) where the installation program is responsible for deploying and maintaining the underlying infrastructure, as well as the cluster itself. An example of this is the deployment to Amazon Web Services (AWS).")]),t._v(" "),r("li",[t._v("User-Provisioned Infrastructure (UPI) where the user is responsible for setting up and maintaining the underlying infrastructure, and the installation program  deploys the cluster on top of this. An example of this style of installation is deployment to bare metal or to VMware vSphere.")])]),t._v(" "),r("p",[t._v("As this solution runs on HPE SimpliVity, it follows the methodology for User-Provisioned Infrastructure, and it\nhelps you to deploy the underlying VMs for the cluster itself and for supporting machines.")]),t._v(" "),r("p",[t._v("More information on the general installation process is available at\n"),r("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/architecture/architecture-installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.openshift.com/container-platform/4.2/architecture/architecture-installation.html"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Documentation specific to installation on a vSphere cluster is at\n"),r("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/installing/installing_vsphere/installing-vsphere.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.openshift.com/container-platform/4.2/installing/installing_vsphere/installing-vsphere.html"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"release-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#release-notes","aria-hidden":"true"}},[t._v("#")]),t._v(" Release notes")]),t._v(" "),r("p",[t._v("OpenShift Container Platform provides regular updates, so it is important to follow the release\ndetails provided and to upgrade regularly. The OpenShift release notes for 4.2 are available at\n"),r("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/release_notes/ocp-4-2-release-notes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.openshift.com/container-platform/4.2/release_notes/ocp-4-2-release-notes.html"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"red-hat-coreos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-coreos","aria-hidden":"true"}},[t._v("#")]),t._v(" Red Hat CoreOS")]),t._v(" "),r("p",[t._v("Download the Red Hat CoreOS OVA for OCP 4.2 from "),r("a",{attrs:{href:"https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/4.2/latest/rhcos-4.2.0-x86_64-vmware.ova",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/4.2/latest/rhcos-4.2.0-x86_64-vmware.ova"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("This downloaded OVA will be used for the  master and worker nodes in the initial cluster deployment.\nAs part of the installation process, templates will be created from the master and worker OVAs.")]),t._v(" "),r("h2",{attrs:{id:"openshift-install-program"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#openshift-install-program","aria-hidden":"true"}},[t._v("#")]),t._v(" OpenShift install program")]),t._v(" "),r("p",[t._v("The OpenShift "),r("code",[t._v("openshift-install")]),t._v(" program, which is used by the playbooks to install the cluster, is available in the folder\n"),r("a",{attrs:{href:"https://mirror.openshift.com/pub/openshift-v4/clients/ocp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirror.openshift.com/pub/openshift-v4/clients/ocp/"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("At the time of writing, the current version is OpenShift 4.2.9 and the\ncorresponding install program is available at\n"),r("a",{attrs:{href:"https://mirror.openshift.com/pub/openshift-v4/clients/ocp/4.2.9/openshift-install-linux-4.2.9.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirror.openshift.com/pub/openshift-v4/clients/ocp/4.2.9/openshift-install-linux-4.2.9.tar.gz"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("If you want to use latest version of the OCP 4.2 "),r("code",[t._v("openshift-install")]),t._v(" software, it is available in the folder\n"),r("a",{attrs:{href:"https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest-4.2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest-4.2/"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("Download the install program to the Ansible machine, unpack the file and note down the\npath for the "),r("code",[t._v("openshift-install")]),t._v(" program as you will use this when configuring the solution.")]),t._v(" "),r("h2",{attrs:{id:"openshift-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#openshift-clients","aria-hidden":"true"}},[t._v("#")]),t._v(" OpenShift clients")]),t._v(" "),r("p",[t._v("Two client programs are used to interact with a deployed cluster - "),r("code",[t._v("oc")]),t._v(" and  "),r("code",[t._v("kubectl")]),t._v(". These programs are available for download in a single file. This Openshift client software is available at\n"),r("a",{attrs:{href:"https://mirror.openshift.com/pub/openshift-v4/clients/ocp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirror.openshift.com/pub/openshift-v4/clients/ocp/"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("At the time of writing, the current version is OpenShift 4.2.9 and the\ncorresponding client software is available at\n"),r("a",{attrs:{href:"https://mirror.openshift.com/pub/openshift-v4/cclients/ocp/4.2.9/openshift-client-linux-4.2.9.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirror.openshift.com/pub/openshift-v4/clients/ocp/4.2.9/openshift-client-linux-4.2.9.tar.gz"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("If you want to use latest version of the OCP 4.2 client software, it is available in the folder "),r("a",{attrs:{href:"https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest-4.2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest-4.2/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Download the client file to the Ansible machine, unpack the file and note down the\npath for the "),r("code",[t._v("oc")]),t._v(" and "),r("code",[t._v("kubectl")]),t._v(" programs as you will use this when configuring the solution.")]),t._v(" "),r("h2",{attrs:{id:"downloading-and-unpacking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#downloading-and-unpacking","aria-hidden":"true"}},[t._v("#")]),t._v(" Downloading and unpacking")]),t._v(" "),r("p",[t._v("An example of the commands used to download and unpack the required software is shown below (for OCP version 4.2.9):")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("$ mkdir ~/kits\n$ cd ~/kits\n$ wget https://mirror.openshift.com/pub/openshift-v4/clients/ocp/4.2.9/openshift-install-linux-4.2.9.tar.gz\n$ wget https://mirror.openshift.com/pub/openshift-v4/clients/ocp/4.2.9/openshift-client-linux-4.2.9.tar.gz\n$ wget https://mirror.openshift.com/pub/openshift-v4/dependencies/rhcos/4.2/latest/rhcos-4.2.0-x86_64-vmware.ova\n$ tar -xvf openshift-install-linux-4.2.9.tar.gz\n$ tar -xvf openshift-client-linux-4.2.9.tar.gz\n")])])]),r("h2",{attrs:{id:"pull-secret"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-secret","aria-hidden":"true"}},[t._v("#")]),t._v(" Pull secret")]),t._v(" "),r("p",[t._v("From the OpenShift Infrastructure Providers page, download your installation pull secret. This pull secret allows you to authenticate with the services that are provided by the included authorities, including Quay.io, which serves the container images for OpenShift Container Platform components. The pull secret will be used in your configuration using the variable "),r("code",[t._v("vault.pull_secret")]),t._v(", in the "),r("code",[t._v("group_vars/all/vault.yml")]),t._v(" file.")])])}),[],!1,null,null,null);e.default=o.exports}}]);