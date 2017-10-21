var utmApp = angular.module('utmApp', [])
 utmApp.controller('utmAddController', ['$scope', function($scope) {

    $scope.utmAddSearchYandex = function() { //Кнопка отвечает за постановку ЮТМки для Яндекс:Поиск
    	var imputData = $(".input_href").val().indexOf('?') + 1; //Проверяет содержится ли ?
    	if (imputData > 0) {

  			$scope.utm = '&utm_source=yandex.search&utm_medium=cpc&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}';
    	}
			else {
  			$scope.utm = '?utm_source=yandex.search&utm_medium=cpc&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}';
			};
    };

    $scope.utmAddContextYandex = function() { //Кнопка отвечает за постановку ЮТМки для Яндекс:РСЯ
    	var imputData = $(".input_href").val().indexOf('?') + 1; //Проверяет содержится ли ?
    	if (imputData > 0) {
  			$scope.utm ='&utm_source=yandex.context&utm_medium=cpc&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}';
    	}
			else {
  			$scope.utm = '?utm_source=yandex.context&utm_medium=cpc&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}';
			};
    };

    $scope.utmAddSearchGoogle = function() { //Кнопка отвечает за постановку ЮТМки для Гугл:Поиск
    	var imputData = $(".input_href").val().indexOf('?') + 1; //Проверяет содержится ли ?
    	if (imputData > 0) {
  			$scope.utm ='&utm_source=google.search&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}';
    	}
			else {
  			$scope.utm = '?utm_source=google.search&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}';
			};
    };


    $scope.utmAddContextGoogle = function() { //Кнопка отвечает за постановку ЮТМки для Гугл:КМС
    	var imputData = $(".input_href").val().indexOf('?') + 1; //Проверяет содержится ли ?
    	if (imputData > 0) {
  			$scope.utm ='&utm_source=google.kms&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&placement={placement}&utm_term={keyword}';
    	}
			else {
  			$scope.utm = '?utm_source=google.kms&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&placement={placement}&utm_term={keyword}';
			};
    };

    $scope.utmAddVKcpc = function() { //Кнопка отвечает за постановку ЮТМки для Вконтакте
    	var imputData = $(".input_href").val().indexOf('?') + 1; //Проверяет содержится ли ?
    	

    	if (imputData > 0) {
  			$scope.utm ='&utm_source=vk&utm_medium=social&utm_campaign=';
    	}
			else {
  			$scope.utm = '?utm_source=vk&utm_medium=social&utm_campaign=';
			};
    };


    $scope.utmAddOKcpc = function() { //Кнопка отвечает за постановку ЮТМки для Однокласников
    	var imputData = $(".input_href").val().indexOf('?') + 1; //Проверяет содержится ли ?
    	

    	if (imputData > 0) {
  			$scope.utm ='&utm_source=ok&utm_medium=social&utm_campaign=';
    	}
			else {
  			$scope.utm = '?utm_source=ok&utm_medium=social&utm_campaign=';
			};
    };   


    $scope.utmAddFBcpc = function() { //Кнопка отвечает за постановку ЮТМки для Фейсбука
    	var imputData = $(".input_href").val().indexOf('?') + 1; //Проверяет содержится ли ?
    	

    	if (imputData > 0) {
  			$scope.utm ='&utm_source=fb&utm_medium=social&utm_campaign=';
    	}
			else {
  			$scope.utm = '?utm_source=fb&utm_medium=social&utm_campaign=';
			};
    }; 

    $scope.utmAddINScpc = function() { //Кнопка отвечает за постановку ЮТМки для Фейсбука
    	var imputData = $(".input_href").val().indexOf('?') + 1; //Проверяет содержится ли ?
    	

    	if (imputData > 0) {
  			$scope.utm ='&utm_source=inst&utm_medium=social&utm_campaign=';
    	}
			else {
  			$scope.utm = '?utm_source=inst&utm_medium=social&utm_campaign=';
			};
    }; 


}]);

$(function () {                                      // Когда страница загрузится
    $('#menu a').each(function () {             // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href;                // получаем адрес ссылки
        if(location == link) {               // при совпадении адреса ссылки и адреса окна
            $(this).addClass('Active');  //добавляем класс
        }
    });
});

$(function(){
  $('#utm_campain').liTranslit();
});



$('#yandex.search_btm').click(function(){
  yaCounter44924509.userParams({
    user : {  // описание пользователя
      type : 'bronze', // бронзовый уровень
      bonus : 100 // 100 бонусных баллов
    },
    interests: { // интересы
      1 : 'спорт', 
      2 : 'автомобили' 
    },
    revenue : 'от 50 до 70 т.р.', // средний доход в месяц
      car : true // наличие машины
  });
});






