app.controller('userCtrl', ['$scope','$http', '$location', 'auth','user', function($scope,$http,$location,auth,user){
	// const that = this;

	 this.regUser = (regData) =>{   
		$http.post('/api/users', this.regData).then(function(data){
			console.log(data.data.success)
			if (data.data.success) {
				console.log(data.data.success)
				$location.path('/');
			}
		})
	}
}]);