(function() {
    angular.module('app')
        .component('categories', {
            templateUrl: './src/views/categories/categories.template.html',
            controller: 'CategoriesController',
            controllerAs: 'vm'
        })
})()