/**
 * Created by rishabhdev on 15/09/17.
 */

angular.module("gitapp").controller('dashboardCtrl',function($scope,apiService,API_URL,moment){
    $scope.API_URL = API_URL;
    $scope.bucket = {};
    $scope.dateRangeSelectorOptions = {
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    };


    $scope.data = [];
    $scope.bucket.apiError  = true;
    $scope.bucket.dateRange = {startDate: moment().subtract(6, 'days'), endDate: moment()};
    $scope.$watch('bucket.dateRange',function(value){
        $scope.loadingData  = true;

        apiService.getAdRequests({startDate:value.startDate.format("YYYY-MM-DD"),endDate:moment(value.endDate).format("YYYY-MM-DD")})
            .then(function(res){
                $scope.data = res.data.data;
                $scope.loadingData  = false;

            });
    });


});
