(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{293:function(t,a,e){"use strict";e.r(a);var s=e(37),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"metrics-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metrics-analysis","aria-hidden":"true"}},[t._v("#")]),t._v(" Metrics Analysis")]),t._v(" "),e("p",[t._v("As part of the analysis process, Flagger can validate service level objectives (SLOs) like\navailability, error rate percentage, average response time and any other objective based on app specific metrics.\nIf a drop in performance is noticed during the SLOs analysis,\nthe release will be automatically rolled back with minimum impact to end-users.")]),t._v(" "),e("h2",{attrs:{id:"builtin-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#builtin-metrics","aria-hidden":"true"}},[t._v("#")]),t._v(" Builtin metrics")]),t._v(" "),e("p",[t._v("Flagger comes with two builtin metric checks: HTTP request success rate and duration.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("success"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rate\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minimum req success rate (non 5xx responses)")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# percentage (0-100)")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("min")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("duration\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# maximum req duration P99")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# milliseconds")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n")])])]),e("p",[t._v("For each metric you can specify a range of accepted values with "),e("code",[t._v("thresholdRange")]),t._v("\nand the window size or the time series with "),e("code",[t._v("interval")]),t._v(".\nThe builtin checks are available for every service mesh / ingress controller\nand are implemented with "),e("router-link",{attrs:{to:"/faq.html#metrics"}},[t._v("Prometheus queries")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"custom-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-metrics","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom metrics")]),t._v(" "),e("p",[t._v("The canary analysis can be extended with custom metric checks. Using a "),e("code",[t._v("MetricTemplate")]),t._v(" custom resource, you\nconfigure Flagger to connect to a metric provider and run a query that returns a "),e("code",[t._v("float64")]),t._v(" value.\nThe query result is used to validate the canary based on the specified threshold range.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger.app/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricTemplate\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("metric\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# can be prometheus or datadog")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# API URL")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# name of the secret containing the API credentials")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# metric query")]),t._v("\n")])])]),e("p",[t._v("The following variables are available in query templates:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("name")]),t._v(" (canary.metadata.name)")]),t._v(" "),e("li",[e("code",[t._v("namespace")]),t._v(" (canary.metadata.namespace)")]),t._v(" "),e("li",[e("code",[t._v("target")]),t._v(" (canary.spec.targetRef.name)")]),t._v(" "),e("li",[e("code",[t._v("service")]),t._v(" (canary.spec.service.name)")]),t._v(" "),e("li",[e("code",[t._v("ingress")]),t._v(" (canary.spec.ingresRef.name)")]),t._v(" "),e("li",[e("code",[t._v("interval")]),t._v(" (canary.spec.canaryAnalysis.metrics[].interval)")])]),t._v(" "),e("p",[t._v("A canary analysis metric can reference a template with "),e("code",[t._v("templateRef")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my metric"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("templateRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("metric\n          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# namespace is optional")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# when not specified, the canary namespace will be used")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# accepted values")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("min")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# metric query time window")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n")])])]),e("h2",{attrs:{id:"prometheus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prometheus","aria-hidden":"true"}},[t._v("#")]),t._v(" Prometheus")]),t._v(" "),e("p",[t._v("You can create custom metric checks targeting a Prometheus server\nby setting the provider type to "),e("code",[t._v("prometheus")]),t._v(" and writing the query in PromQL.")]),t._v(" "),e("p",[t._v("Prometheus template example:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger.app/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricTemplate\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("found"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("percentage\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" istio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prometheus\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//promethues.istio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    100 - sum(\n        rate(\n            istio_requests_total{\n              reporter="destination",\n              destination_workload_namespace="{{ namespace }}",\n              destination_workload="{{ target }}",\n              response_code!="404"\n            }[{{ interval }}]\n        )\n    )\n    /\n    sum(\n        rate(\n            istio_requests_total{\n              reporter="destination",\n              destination_workload_namespace="{{ namespace }}",\n              destination_workload="{{ target }}"\n            }[{{ interval }}]\n        )\n    ) * 100')]),t._v("\n")])])]),e("p",[t._v("Reference the template in the canary analysis:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"404s percentage"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("templateRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("found"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("percentage\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" istio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n")])])]),e("p",[t._v("The above configuration validates the canary by checking\nif the HTTP 404 req/sec percentage is below 5 percent of the total traffic.\nIf the 404s rate reaches the 5% threshold, then the canary fails.")]),t._v(" "),e("p",[t._v("Prometheus gRPC error rate example:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger.app/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricTemplate\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grpc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("percentage\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prometheus\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//flagger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("promethues.flagger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    100 - sum(\n        rate(\n            grpc_server_handled_total{\n              grpc_code!="OK",\n              kubernetes_namespace="{{ namespace }}",\n              kubernetes_pod_name=~"{{ target }}-[0-9a-zA-Z]+(-[0-9a-zA-Z]+)"\n            }[{{ interval }}]\n        )\n    )\n    /\n    sum(\n        rate(\n            grpc_server_started_total{\n              kubernetes_namespace="{{ namespace }}",\n              kubernetes_pod_name=~"{{ target }}-[0-9a-zA-Z]+(-[0-9a-zA-Z]+)"\n            }[{{ interval }}]\n        )\n    ) * 100')]),t._v("\n")])])]),e("p",[t._v("The above template is for gPRC services instrumented with "),e("a",{attrs:{href:"https://github.com/grpc-ecosystem/go-grpc-prometheus",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-grpc-prometheus"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"datadog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datadog","aria-hidden":"true"}},[t._v("#")]),t._v(" Datadog")]),t._v(" "),e("p",[t._v("You can create custom metric checks using the Datadog provider.")]),t._v(" "),e("p",[t._v("Create a secret with your Datadog API credentials:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" datadog\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" istio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datadog_api_key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("datadog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("key\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datadog_application_key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("datadog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("application"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("key\n")])])]),e("p",[t._v("Datadog template example:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger.app/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricTemplate\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("found"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("percentage\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" istio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" datadog\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api.datadoghq.com\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" datadog\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    100 - (\n      sum:istio.mesh.request.count{\n        reporter:destination,\n        destination_workload_namespace:{{ namespace }},\n        destination_workload:{{ target }},\n        !response_code:404\n      }.as_count()\n      / \n      sum:istio.mesh.request.count{\n        reporter:destination,\n        destination_workload_namespace:{{ namespace }},\n        destination_workload:{{ target }}\n      }.as_count()\n    ) * 100")]),t._v("\n")])])]),e("p",[t._v("Reference the template in the canary analysis:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"404s percentage"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("templateRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("found"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("percentage\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" istio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n")])])]),e("h2",{attrs:{id:"amazon-cloudwatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazon-cloudwatch","aria-hidden":"true"}},[t._v("#")]),t._v(" Amazon CloudWatch")]),t._v(" "),e("p",[t._v("You can create custom metric checks using the CloudWatch metrics provider.")]),t._v(" "),e("p",[t._v("CloudWatch template example:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger.app/v1alpha1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricTemplate\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloudwatch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rate\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloudwatch\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("region")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("northeast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1 ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# specify the region of your metrics")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    [\n        {\n            "Id": "e1",\n            "Expression": "m1 / m2",\n            "Label": "ErrorRate"\n        },\n        {\n            "Id": "m1",\n            "MetricStat": {\n                "Metric": {\n                    "Namespace": "MyKubernetesCluster",\n                    "MetricName": "ErrorCount",\n                    "Dimensions": [\n                        {\n                            "Name": "appName",\n                            "Value": "{{ name }}.{{ namespace }}"\n                        }\n                    ]\n                },\n                "Period": 60,\n                "Stat": "Sum",\n                "Unit": "Count"\n            },\n            "ReturnData": false\n        },\n        {\n            "Id": "m2",\n            "MetricStat": {\n                "Metric": {\n                    "Namespace": "MyKubernetesCluster",\n                    "MetricName": "RequestCount",\n                    "Dimensions": [\n                        {\n                            "Name": "appName",\n                            "Value": "{{ name }}.{{ namespace }}"\n                        }\n                    ]\n                },\n                "Period": 60,\n                "Stat": "Sum",\n                "Unit": "Count"\n            },\n            "ReturnData": false\n        }\n    ]')]),t._v("\n")])])]),e("p",[t._v("The query format documentation can be found "),e("a",{attrs:{href:"https://aws.amazon.com/premiumsupport/knowledge-center/cloudwatch-getmetricdata-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Reference the template in the canary analysis:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app error rate"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("templateRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloudwatch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rate\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n")])])]),e("p",[e("strong",[t._v("Note")]),t._v(" that Flagger need AWS IAM permission to perform "),e("code",[t._v("cloudwatch:GetMetricData")]),t._v(" to use this provider.")])])},[],!1,null,null,null);a.default=n.exports}}]);