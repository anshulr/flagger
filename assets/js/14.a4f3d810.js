(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{274:function(e,r,t){"use strict";t.r(r);var s=t(37),o=Object(s.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/weaveworks/flagger",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flagger"),t("OutboundLink")],1),e._v(" is a "),t("strong",[e._v("Kubernetes")]),e._v(" operator that automates the promotion of\ncanary deployments using "),t("strong",[e._v("Istio")]),e._v(", "),t("strong",[e._v("Linkerd")]),e._v(", "),t("strong",[e._v("App Mesh")]),e._v(", "),t("strong",[e._v("NGINX")]),e._v(", "),t("strong",[e._v("Contour")]),e._v(" or "),t("strong",[e._v("Gloo")]),e._v(" routing for\ntraffic shifting and "),t("strong",[e._v("Prometheus")]),e._v(" metrics for canary analysis. The canary analysis can be extended with webhooks for\nrunning system integration/acceptance tests, load tests, or any other custom validation.")]),e._v(" "),t("p",[e._v("Flagger implements a control loop that gradually shifts traffic to the canary while measuring key performance indicators\nlike HTTP requests success rate, requests average duration and pods health.\nBased on analysis of the "),t("strong",[e._v("KPIs")]),e._v(" a canary is promoted or aborted, and the analysis result is published to "),t("strong",[e._v("Slack")]),e._v(" or "),t("strong",[e._v("MS Teams")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/weaveworks/flagger/master/docs/diagrams/flagger-canary-overview.png",alt:"Flagger overview diagram"}})]),e._v(" "),t("p",[e._v("Flagger can be configured with Kubernetes custom resources and is compatible with any CI/CD solutions made for Kubernetes.\nSince Flagger is declarative and reacts to Kubernetes events,\nit can be used in "),t("strong",[e._v("GitOps")]),e._v(" pipelines together with Flux CD or JenkinsX.")]),e._v(" "),t("p",[e._v("To get started with Flagger, chose one of the supported routing providers\nand "),t("a",{attrs:{href:"../install/flagger-install-on-kubernetes"}},[e._v("install")]),e._v(" Flagger with Helm or Kustomize.")]),e._v(" "),t("p",[e._v("After install Flagger, you can follow one of the tutorials:")]),e._v(" "),t("p",[t("strong",[e._v("Service mesh tutorials")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"../tutorials/istio-progressive-delivery"}},[e._v("Istio")])]),e._v(" "),t("li",[t("a",{attrs:{href:"../tutorials/linkerd-progressive-delivery"}},[e._v("Linkerd")])]),e._v(" "),t("li",[t("a",{attrs:{href:"../tutorials/appmesh-progressive-delivery"}},[e._v("AWS App Mesh")])])]),e._v(" "),t("p",[t("strong",[e._v("Ingress controller tutorials")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"../tutorials/contour-progressive-delivery"}},[e._v("Contour")])]),e._v(" "),t("li",[t("a",{attrs:{href:"../tutorials/gloo-progressive-delivery"}},[e._v("Gloo")])]),e._v(" "),t("li",[t("a",{attrs:{href:"../tutorials/nginx-progressive-delivery"}},[e._v("NGINX Ingress")])])]),e._v(" "),t("p",[t("strong",[e._v("Hands-on GitOps workshops")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/stefanprodan/gitops-istio",target:"_blank",rel:"noopener noreferrer"}},[e._v("Istio"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://helm.workshop.flagger.dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linkerd"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://eks.hands-on.flagger.dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS App Mesh"),t("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=o.exports}}]);