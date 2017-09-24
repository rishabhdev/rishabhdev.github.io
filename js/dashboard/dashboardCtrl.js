/**
 * Created by rishabhdev on 15/09/17.
 */

angular.module("gitapp").controller('dashboardCtrl',function($scope,apiService,API_URL,moment){

    $scope.API_URL = API_URL;
    $scope.bucket = {};
    console.log(moment);
    $scope.dateRangeSelectorOptions = {
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        eventHandlers: {
            'show.daterangepicker': function(ev, picker) {
                console.log('ho');
                return false;
            }
        }
    };


    $scope.data = [{"date":"2016-09-11","adrequest":115},{"date":"2016-09-12","adrequest":235},{"date":"2016-09-14","adrequest":175},{"date":"2016-09-15","adrequest":245},{"date":"2016-09-17","adrequest":525},{"date":"2016-09-18","adrequest":295},{"date":"2016-09-20","adrequest":75},{"date":"2016-09-21","adrequest":805},{"date":"2016-09-23","adrequest":1025},{"date":"2016-09-24","adrequest":1025},{"date":"2016-09-26","adrequest":1565},{"date":"2016-09-27","adrequest":135},{"date":"2016-09-29","adrequest":845},{"date":"2016-09-30","adrequest":875},{"date":"2016-10-02","adrequest":945},{"date":"2016-10-03","adrequest":1485},{"date":"2016-10-05","adrequest":1225},{"date":"2016-10-06","adrequest":175},{"date":"2016-10-08","adrequest":125},{"date":"2016-10-09","adrequest":2605},{"date":"2016-10-11","adrequest":1975},{"date":"2016-10-12","adrequest":525},{"date":"2016-10-14","adrequest":1505},{"date":"2016-10-15","adrequest":735},{"date":"2016-10-17","adrequest":1275},{"date":"2016-10-18","adrequest":445},{"date":"2016-10-20","adrequest":2725},{"date":"2016-10-21","adrequest":2805},{"date":"2016-10-23","adrequest":1435},{"date":"2016-10-24","adrequest":1455},{"date":"2016-10-26","adrequest":245},{"date":"2016-10-27","adrequest":4725},{"date":"2016-10-29","adrequest":4345},{"date":"2016-10-30","adrequest":3705},{"date":"2016-11-01","adrequest":305},{"date":"2016-11-02","adrequest":1645},{"date":"2016-11-04","adrequest":4165},{"date":"2016-11-05","adrequest":3415},{"date":"2016-11-07","adrequest":1065},{"date":"2016-11-08","adrequest":275},{"date":"2016-11-10","adrequest":2135},{"date":"2016-11-11","adrequest":2335},{"date":"2016-11-13","adrequest":1425},{"date":"2016-11-14","adrequest":2185},{"date":"2016-11-16","adrequest":6545},{"date":"2016-11-17","adrequest":6245},{"date":"2016-11-19","adrequest":5935},{"date":"2016-11-20","adrequest":6835},{"date":"2016-11-22","adrequest":655},{"date":"2016-11-23","adrequest":4585},{"date":"2016-11-25","adrequest":2145},{"date":"2016-11-26","adrequest":305},{"date":"2016-11-28","adrequest":5225},{"date":"2016-11-29","adrequest":345},{"date":"2016-12-01","adrequest":2545},{"date":"2016-12-02","adrequest":3985},{"date":"2016-12-04","adrequest":8035},{"date":"2016-12-05","adrequest":1315},{"date":"2016-12-07","adrequest":455},{"date":"2016-12-08","adrequest":1685},{"date":"2016-12-10","adrequest":4985},{"date":"2016-12-11","adrequest":6125},{"date":"2016-12-13","adrequest":4815},{"date":"2016-12-14","adrequest":4935},{"date":"2016-12-16","adrequest":2965},{"date":"2016-12-17","adrequest":6745},{"date":"2016-12-19","adrequest":7695},{"date":"2016-12-20","adrequest":3445},{"date":"2016-12-22","adrequest":5725},{"date":"2016-12-23","adrequest":3145},{"date":"2016-12-25","adrequest":6685},{"date":"2016-12-26","adrequest":5595},{"date":"2016-12-28","adrequest":8645},{"date":"2016-12-29","adrequest":7275},{"date":"2016-12-31","adrequest":3405},{"date":"2017-01-01","adrequest":8285},{"date":"2017-01-03","adrequest":6765},{"date":"2017-01-04","adrequest":9345},{"date":"2017-01-06","adrequest":10965},{"date":"2017-01-07","adrequest":8795},{"date":"2017-01-09","adrequest":3065},{"date":"2017-01-10","adrequest":11885},{"date":"2017-01-12","adrequest":11905},{"date":"2017-01-13","adrequest":4095},{"date":"2017-01-15","adrequest":8785},{"date":"2017-01-16","adrequest":11085},{"date":"2017-01-18","adrequest":3185},{"date":"2017-01-19","adrequest":9365},{"date":"2017-01-21","adrequest":5595},{"date":"2017-01-22","adrequest":13225},{"date":"2017-01-24","adrequest":12325},{"date":"2017-01-25","adrequest":8785},{"date":"2017-01-27","adrequest":2505},{"date":"2017-01-28","adrequest":5855},{"date":"2017-01-30","adrequest":6535},{"date":"2017-01-31","adrequest":10655},{"date":"2017-02-02","adrequest":8455},{"date":"2017-02-03","adrequest":9625},{"date":"2017-02-05","adrequest":14395},{"date":"2017-02-06","adrequest":11395},{"date":"2017-02-08","adrequest":8505},{"date":"2017-02-09","adrequest":2415},{"date":"2017-02-11","adrequest":11915},{"date":"2017-02-12","adrequest":6315},{"date":"2017-02-14","adrequest":6785},{"date":"2017-02-15","adrequest":7455},{"date":"2017-02-17","adrequest":12255},{"date":"2017-02-18","adrequest":11185},{"date":"2017-02-20","adrequest":5495},{"date":"2017-02-21","adrequest":12365},{"date":"2017-02-23","adrequest":655},{"date":"2017-02-24","adrequest":10655},{"date":"2017-02-26","adrequest":895},{"date":"2017-02-27","adrequest":10515},{"date":"2017-03-01","adrequest":14175},{"date":"2017-03-02","adrequest":3815},{"date":"2017-03-04","adrequest":485},{"date":"2017-03-05","adrequest":3715},{"date":"2017-03-07","adrequest":10465},{"date":"2017-03-08","adrequest":10185},{"date":"2017-03-10","adrequest":11005},{"date":"2017-03-11","adrequest":8505},{"date":"2017-03-13","adrequest":7175},{"date":"2017-03-14","adrequest":4945},{"date":"2017-03-16","adrequest":7645},{"date":"2017-03-17","adrequest":9375},{"date":"2017-03-19","adrequest":5595},{"date":"2017-03-20","adrequest":16075},{"date":"2017-03-22","adrequest":15995},{"date":"2017-03-23","adrequest":2235},{"date":"2017-03-25","adrequest":18035},{"date":"2017-03-26","adrequest":5615},{"date":"2017-03-28","adrequest":12095},{"date":"2017-03-29","adrequest":8505},{"date":"2017-03-31","adrequest":955},{"date":"2017-04-01","adrequest":14785},{"date":"2017-04-03","adrequest":10385},{"date":"2017-04-04","adrequest":10045},{"date":"2017-04-06","adrequest":7085},{"date":"2017-04-07","adrequest":2065},{"date":"2017-04-09","adrequest":135},{"date":"2017-04-10","adrequest":1025},{"date":"2017-04-12","adrequest":1015},{"date":"2017-04-13","adrequest":19505},{"date":"2017-04-15","adrequest":1815},{"date":"2017-04-16","adrequest":6815},{"date":"2017-04-18","adrequest":17915},{"date":"2017-04-19","adrequest":22015},{"date":"2017-04-21","adrequest":22315},{"date":"2017-04-22","adrequest":16515},{"date":"2017-04-24","adrequest":10705},{"date":"2017-04-25","adrequest":8895},{"date":"2017-04-27","adrequest":2965},{"date":"2017-04-28","adrequest":20135},{"date":"2017-04-30","adrequest":21375},{"date":"2017-05-01","adrequest":3445},{"date":"2017-05-03","adrequest":19845},{"date":"2017-05-04","adrequest":5595},{"date":"2017-05-06","adrequest":22755},{"date":"2017-05-07","adrequest":4985},{"date":"2017-05-09","adrequest":8505},{"date":"2017-05-10","adrequest":4305},{"date":"2017-05-12","adrequest":4475},{"date":"2017-05-13","adrequest":7445},{"date":"2017-05-15","adrequest":15655},{"date":"2017-05-16","adrequest":19495},{"date":"2017-05-18","adrequest":23145},{"date":"2017-05-19","adrequest":21555},{"date":"2017-05-21","adrequest":8045},{"date":"2017-05-22","adrequest":20215},{"date":"2017-05-24","adrequest":2835},{"date":"2017-05-25","adrequest":23265},{"date":"2017-05-27","adrequest":16405},{"date":"2017-05-28","adrequest":13605},{"date":"2017-05-30","adrequest":6265},{"date":"2017-05-31","adrequest":525},{"date":"2017-06-02","adrequest":8495},{"date":"2017-06-03","adrequest":21205},{"date":"2017-06-05","adrequest":7795},{"date":"2017-06-06","adrequest":7265},{"date":"2017-06-08","adrequest":16055},{"date":"2017-06-09","adrequest":24375},{"date":"2017-06-11","adrequest":18875},{"date":"2017-06-12","adrequest":3855},{"date":"2017-06-14","adrequest":1855},{"date":"2017-06-15","adrequest":14075},{"date":"2017-06-17","adrequest":6775},{"date":"2017-06-18","adrequest":14245},{"date":"2017-06-20","adrequest":21035},{"date":"2017-06-21","adrequest":19355},{"date":"2017-06-23","adrequest":3345},{"date":"2017-06-24","adrequest":16805},{"date":"2017-06-26","adrequest":27175},{"date":"2017-06-27","adrequest":23085},{"date":"2017-06-29","adrequest":23145},{"date":"2017-06-30","adrequest":26495},{"date":"2017-07-02","adrequest":8245},{"date":"2017-07-03","adrequest":15335},{"date":"2017-07-05","adrequest":665},{"date":"2017-07-06","adrequest":7895},{"date":"2017-07-08","adrequest":19795},{"date":"2017-07-09","adrequest":23665},{"date":"2017-07-11","adrequest":25245},{"date":"2017-07-12","adrequest":22155},{"date":"2017-07-14","adrequest":6215},{"date":"2017-07-15","adrequest":23455},{"date":"2017-07-17","adrequest":14085},{"date":"2017-07-18","adrequest":17665},{"date":"2017-07-20","adrequest":8465},{"date":"2017-07-21","adrequest":26375},{"date":"2017-07-23","adrequest":11145},{"date":"2017-07-24","adrequest":8795},{"date":"2017-07-26","adrequest":13125},{"date":"2017-07-27","adrequest":19205},{"date":"2017-07-29","adrequest":5405},{"date":"2017-07-30","adrequest":17115},{"date":"2017-08-01","adrequest":11575},{"date":"2017-08-02","adrequest":26215},{"date":"2017-08-04","adrequest":23535},{"date":"2017-08-05","adrequest":5415},{"date":"2017-08-07","adrequest":33185},{"date":"2017-08-08","adrequest":12295},{"date":"2017-08-10","adrequest":32425},{"date":"2017-08-11","adrequest":6065},{"date":"2017-08-13","adrequest":13155},{"date":"2017-08-14","adrequest":12515},{"date":"2017-08-16","adrequest":1365},{"date":"2017-08-17","adrequest":24445},{"date":"2017-08-19","adrequest":24245},{"date":"2017-08-20","adrequest":165},{"date":"2017-08-22","adrequest":6115},{"date":"2017-08-23","adrequest":1155},{"date":"2017-08-25","adrequest":8855},{"date":"2017-08-26","adrequest":21115},{"date":"2017-08-28","adrequest":26165},{"date":"2017-08-29","adrequest":18355},{"date":"2017-08-31","adrequest":16155},{"date":"2017-09-01","adrequest":21365},{"date":"2017-09-03","adrequest":7515},{"date":"2017-09-04","adrequest":23845},{"date":"2017-09-06","adrequest":30135},{"date":"2017-09-07","adrequest":19495},{"date":"2017-09-09","adrequest":5635},{"date":"2017-09-10","adrequest":2015},{"date":"2017-09-12","adrequest":395},{"date":"2017-09-13","adrequest":1995},{"date":"2017-09-15","adrequest":9015},{"date":"2017-09-16","adrequest":14035},{"date":"2017-09-18","adrequest":26095},{"date":"2017-09-19","adrequest":32735},{"date":"2017-09-21","adrequest":8545},{"date":"2017-09-22","adrequest":14905},{"date":"2017-09-24","adrequest":26045},{"date":"2017-09-25","adrequest":30425},{"date":"2017-09-27","adrequest":35805},{"date":"2017-09-28","adrequest":36405},{"date":"2017-09-30","adrequest":32425},{"date":"2017-10-01","adrequest":27445},{"date":"2017-10-03","adrequest":10505},{"date":"2017-10-04","adrequest":37135},{"date":"2017-10-06","adrequest":3835},{"date":"2017-10-07","adrequest":21685},{"date":"2017-10-09","adrequest":7915},{"date":"2017-10-10","adrequest":15285},{"date":"2017-10-12","adrequest":18245},{"date":"2017-10-13","adrequest":13435}];
    $scope.bucket.dateRange = {startDate: moment().subtract(6, 'days'), endDate: moment()};
    $scope.$watch('bucket.dateRange',function(value){

        apiService.getAdRequests({startDate:value.startDate.format("YYYY-MM-DD"),endDate:moment(value.endDate).format("YYYY-MM-DD")})
            .then(function(res){
                console.log(res.data);
                $scope.data = res.data.data;
                console.log("$scope.data",$scope.data);
            });
    });


});