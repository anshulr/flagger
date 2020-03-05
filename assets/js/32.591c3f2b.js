(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{292:function(t,a,e){"use strict";e.r(a);var s=e(37),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"how-it-works"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/weaveworks/flagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flagger"),e("OutboundLink")],1),t._v(" can be configured to automate the release process\nfor Kubernetes workloads with a custom resource named canary.")]),t._v(" "),e("h2",{attrs:{id:"canary-resource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#canary-resource","aria-hidden":"true"}},[t._v("#")]),t._v(" Canary resource")]),t._v(" "),e("p",[t._v("The canary custom resource defines the release process of an application running on Kubernetes\nand is portable across clusters, service meshes and ingress providers.")]),t._v(" "),e("p",[t._v("For a deployment named "),e("em",[t._v("podinfo")]),t._v(", a canary release with progressive traffic shifting can be defined as:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger.app/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Canary\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9898")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("threshold")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxWeight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stepWeight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("success"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rate\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("min")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("duration\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("webhooks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" load"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//flagger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("loadtester.test/\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cmd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hey -z 1m -q 10 -c 2 http://podinfo-canary.test:9898/"')]),t._v("\n")])])]),e("p",[t._v("When you deploy a new version of an app, Flagger gradually shifts traffic to the canary,\nand at the same time, measures the requests success rate as well as the average response duration.\nYou can extend the canary analysis with custom metrics, acceptance and load testing\nto harden the validation process of your app release process.")]),t._v(" "),e("p",[t._v("If you are running multiple service meshes or ingress controllers in the same cluster,\nyou can override the global provider for a specific canary with "),e("code",[t._v("spec.provider")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"canary-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#canary-target","aria-hidden":"true"}},[t._v("#")]),t._v(" Canary target")]),t._v(" "),e("p",[t._v("A canary resource can target a Kubernetes Deployment or DaemonSet.")]),t._v(" "),e("p",[t._v("Kubernetes Deployment example:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("progressDeadlineSeconds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("autoscalerRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" autoscaling/v2beta1\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HorizontalPodAutoscaler\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n")])])]),e("p",[t._v("Based on the above configuration, Flagger generates the following Kubernetes objects:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("deployment/<targetRef.name>-primary")])]),t._v(" "),e("li",[e("code",[t._v("hpa/<autoscalerRef.name>-primary")])])]),t._v(" "),e("p",[t._v("The primary deployment is considered the stable release of your app, by default all traffic is routed to this version\nand the target deployment is scaled to zero.\nFlagger will detect changes to the target deployment (including secrets and configmaps) and will perform a\ncanary analysis before promoting the new version as primary.")]),t._v(" "),e("p",[t._v("If the target deployment uses secrets and/or configmaps, Flagger will create a copy of each object using the "),e("code",[t._v("-primary")]),t._v("\nprefix and will reference these objects in the primary deployment. You can disable the secrets/configmaps tracking\nwith the "),e("code",[t._v("-enable-config-tracking=false")]),t._v(" command flag in the Flagger deployment manifest under containers args\nor by setting "),e("code",[t._v("--set configTracking.enabled=false")]),t._v(" when installing Flagger with Helm.")]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(" that the target deployment must have a single label selector in the format "),e("code",[t._v("app: <DEPLOYMENT-NAME>")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n")])])]),e("p",[t._v("Besides "),e("code",[t._v("app")]),t._v(" Flagger supports "),e("code",[t._v("name")]),t._v(" and "),e("code",[t._v("app.kubernetes.io/name")]),t._v(" selectors.\nIf you use a different convention you can specify your label with\nthe "),e("code",[t._v("-selector-labels=my-app-label")]),t._v(" command flag in the Flagger deployment manifest under containers args\nor by setting "),e("code",[t._v("--set selectorLabels=my-app-label")]),t._v(" when installing Flagger with Helm.")]),t._v(" "),e("p",[t._v("The autoscaler reference is optional, when specified, Flagger will pause the traffic increase while the\ntarget and primary deployments are scaled up or down. HPA can help reduce the resource usage during the canary analysis.")]),t._v(" "),e("p",[t._v("The progress deadline represents the maximum time in seconds for the canary deployment to make progress\nbefore it is rolled back, defaults to ten minutes.")]),t._v(" "),e("h2",{attrs:{id:"canary-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#canary-service","aria-hidden":"true"}},[t._v("#")]),t._v(" Canary service")]),t._v(" "),e("p",[t._v("A canary resource dictates how the target workload is exposed inside the cluster.\nThe canary target should expose a TCP port that will be used by Flagger to create the ClusterIP Services.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9898")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("portName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9898")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("portDiscovery")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),e("p",[t._v("The container port from the target workload should match the "),e("code",[t._v("service.port")]),t._v(" or "),e("code",[t._v("service.targetPort")]),t._v(".\nThe "),e("code",[t._v("service.name")]),t._v(" is optional, defaults to "),e("code",[t._v("spec.targetRef.name")]),t._v(".\nThe "),e("code",[t._v("service.targetPort")]),t._v(" can be a container port number or name.\nThe "),e("code",[t._v("service.portName")]),t._v(" is optional (defaults to "),e("code",[t._v("http")]),t._v("), if your workload uses gPRC then set the port name to "),e("code",[t._v("grcp")]),t._v(".")]),t._v(" "),e("p",[t._v("If port discovery is enabled, Flagger scans the target workload and extracts the containers\nports excluding the port specified in the canary service and service mesh sidecar ports.\nThese ports will be used when generating the ClusterIP services.")]),t._v(" "),e("p",[t._v("Based on the canary spec service, Flagger creates the following Kubernetes ClusterIP service:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("<service.name>.<namespace>.svc.cluster.local")]),e("br"),t._v("\nselector "),e("code",[t._v("app=<name>-primary")])]),t._v(" "),e("li",[e("code",[t._v("<service.name>-primary.<namespace>.svc.cluster.local")]),e("br"),t._v("\nselector "),e("code",[t._v("app=<name>-primary")])]),t._v(" "),e("li",[e("code",[t._v("<service.name>-canary.<namespace>.svc.cluster.local")]),e("br"),t._v("\nselector "),e("code",[t._v("app=<name>")])])]),t._v(" "),e("p",[t._v("This ensures that traffic to "),e("code",[t._v("podinfo.test:9898")]),t._v(" will be routed to the latest stable release of your app.\nThe "),e("code",[t._v("podinfo-canary.test:9898")]),t._v(" address is available only during the\ncanary analysis and can be used for conformance testing or load testing.")]),t._v(" "),e("p",[t._v("Besides the port mapping, the service specification can contain URI match and rewrite rules,\ntimeout and retry polices:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9898")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prefix")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rewrite")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("retries")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("attempts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("perTryTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1s\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5s\n")])])]),e("p",[t._v("When using "),e("strong",[t._v("Istio")]),t._v(" as the mesh provider, you can also specify\nHTTP header operations, CORS and traffic policies, Istio gateways and hosts.\nThe Istio routing configuration can be found "),e("router-link",{attrs:{to:"/faq.html#istio-routing"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"canary-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#canary-status","aria-hidden":"true"}},[t._v("#")]),t._v(" Canary status")]),t._v(" "),e("p",[t._v("You can use kubectl to get the current status of canary deployments cluster wide:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl get canaries --all-namespaces\n\nNAMESPACE   NAME      STATUS        WEIGHT   LASTTRANSITIONTIME\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("        podinfo   Progressing   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-30T14:05:07Z\nprod        frontend  Succeeded     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-30T16:15:07Z\nprod        backend   Failed        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-30T17:05:07Z\n")])])]),e("p",[t._v("The status condition reflects the last known state of the canary analysis:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl -n "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" get canary/podinfo -oyaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/status/,0'")]),t._v("\n")])])]),e("p",[t._v("A successful rollout status:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("canaryWeight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("failedChecks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("iterations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lastAppliedSpec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"14788816656920327485"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lastPromotedSpec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"14788816656920327485"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lastTransitionTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-07-10T08:23:18Z"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lastUpdateTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-07-10T08:23:18Z"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Canary analysis completed successfully"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" promotion finished.\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("reason")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Succeeded\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"True"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promoted\n")])])]),e("p",[t._v("The "),e("code",[t._v("Promoted")]),t._v(" status condition can have one of the following reasons:\nInitialized, Waiting, Progressing, Promoting, Finalising, Succeeded or Failed.\nA failed canary will have the promoted status set to "),e("code",[t._v("false")]),t._v(",\nthe reason to "),e("code",[t._v("failed")]),t._v(" and the last applied spec will be different to the last promoted one.")]),t._v(" "),e("p",[t._v("Wait for a successful rollout:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),t._v(" canary/podinfo --for"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("condition"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("promoted\n")])])]),e("p",[t._v("CI example:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update the container image")]),t._v("\nkubectl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" image deployment/podinfo "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("podinfod")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stefanprodan/podinfo:3.0.1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wait for Flagger to detect the change")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ok")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("until")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ok}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    kubectl get canary/podinfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Progressing'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ok")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ok")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wait for the canary analysis to finish")]),t._v("\nkubectl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),t._v(" canary/podinfo --for"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("condition"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("promoted --timeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("5m\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check if the deployment was successful ")]),t._v("\nkubectl get canary/podinfo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" Succeeded\n")])])]),e("h2",{attrs:{id:"canary-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#canary-analysis","aria-hidden":"true"}},[t._v("#")]),t._v(" Canary analysis")]),t._v(" "),e("p",[t._v("The canary analysis defines:")]),t._v(" "),e("ul",[e("li",[t._v("the type of "),e("router-link",{attrs:{to:"/usage/deployment-strategies.html"}},[t._v("deployment strategy")])],1),t._v(" "),e("li",[t._v("the "),e("router-link",{attrs:{to:"/usage/metrics.html"}},[t._v("metrics")]),t._v(" used to validate the canary version")],1),t._v(" "),e("li",[t._v("the "),e("router-link",{attrs:{to:"/usage/webhooks.html"}},[t._v("webhooks")]),t._v(" used for conformance testing, load testing and manual gating")],1),t._v(" "),e("li",[t._v("the "),e("router-link",{attrs:{to:"/usage/alerting.html"}},[t._v("alerting settings")])],1)]),t._v(" "),e("p",[t._v("Spec:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# schedule interval (default 60s)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max number of failed metric checks before rollback")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("threshold")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max traffic percentage routed to canary")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# percentage (0-100)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxWeight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# canary increment step")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# percentage (0-100)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stepWeight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# total number of iterations")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# used for A/B Testing and Blue/Green")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("iterations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# canary match conditions")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# used for A/B Testing")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP header")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# key performance indicators")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# metric check")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# alerting")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alerts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# alert provider")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# external checks")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("webhooks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hook")]),t._v("\n")])])]),e("p",[t._v("The canary analysis runs periodically until it reaches the maximum traffic weight or the number of iterations.\nOn each run, Flagger calls the webhooks, checks the metrics and if the failed checks threshold is reached, stops the\nanalysis and rolls back the canary. If alerting is configured, Flagger will post the analysis result using the alert providers.")])])},[],!1,null,null,null);a.default=n.exports}}]);