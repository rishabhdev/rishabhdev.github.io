/**
 * Created by rishabhdev on 23/09/17.
 */

angular.module("gitapp")
    .directive("timeseries", [function () {
        return {
            restrict: 'E',
            template: "<div class='timeseries'></div>",
            scope: {
                data: "=data"
            },
            link: {
                post: function (scope, element) {

                    scope.$watch("data",function(newVal,oldVal){
                        if(newVal !== oldVal) {
                            element.find("div").html('');
                            var data = newVal.map(function (item) {
                                return {
                                    date: new Date(item.date),
                                    'Ad Request': item.adrequest
                                };
                            });

                            var chart = d3.timeseries()
                                .addSerie(data, {x: 'date', y: 'Ad Request'}, {
                                    interpolate: 'monotone',
                                    width: 1.5
                                })
                                .yscale.domain([0]) // show 0 on y axis
                                .margin.left(40)
                                .width(900);

                            chart(element.find("div")[0]);
                        }
                    })

                }
            }

        }
    }])