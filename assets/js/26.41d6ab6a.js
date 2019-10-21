(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{223:function(t,e,o){"use strict";o.r(e);var n=o(0),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"introduction-to-cluster-logging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-cluster-logging","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction to cluster logging")]),t._v(" "),o("p",[t._v("You can deploy cluster logging to aggregate logs for a range of OpenShift Container Platform services.")]),t._v(" "),o("p",[t._v("The built-in cluster logging components are based upon Elasticsearch, Fluentd, and Kibana (EFK). The collector, Fluentd, is deployed to each node in the OpenShift Container Platform cluster. It collects all node and container logs and writes them to Elasticsearch (ES). Kibana is the centralized, web UI where users and administrators can create rich visualizations and dashboards with the aggregated data.")]),t._v(" "),o("h2",{attrs:{id:"about-cluster-logging-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#about-cluster-logging-components","aria-hidden":"true"}},[t._v("#")]),t._v(" About cluster logging components")]),t._v(" "),o("p",[t._v("There are four different types of cluster logging components:")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("logStore")]),t._v(": This is where the logs will be stored. The current implementation is "),o("code",[t._v("Elasticsearch")]),t._v(".")]),t._v(" "),o("li",[o("code",[t._v("collection")]),t._v(": This is the component that collects logs from the node, formats them, and stores them in the logStore. The current implementation is "),o("code",[t._v("Fluentd")]),t._v(".")]),t._v(" "),o("li",[o("code",[t._v("visualization")]),t._v(": This is the UI component used to view logs, graphs, charts, and so forth. The current implementation is "),o("code",[t._v("Kibana")]),t._v(".")]),t._v(" "),o("li",[o("code",[t._v("curation")]),t._v(": This is the component that trims logs by age. The current implementation is "),o("code",[t._v("Curator")]),t._v(".")])]),t._v(" "),o("p",[t._v("For more information about the OpenShift Cluster Logging facility, see the documentation at "),o("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.1/logging/efk-logging.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.openshift.com/container-platform/4.1/logging/efk-logging.html"),o("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);