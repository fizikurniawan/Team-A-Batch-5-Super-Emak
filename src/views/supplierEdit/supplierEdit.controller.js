(function () {
  angular
    .module('app')
    .controller('supplierEditCtrl', controller)

  function controller(supplierService, $state, $stateParams) {
    var vm = this
    vm.currentSupplier = {}
    vm.nameEdit = null
    vm.addressEdit = null
    //
    vm.getSupplierById = getSupplierById
    vm.editSupplier = editSupplier

    getSupplierById()

    ////
    function getSupplierById() {
      vm.currentSupplier = supplierService.getSupplierById($stateParams.id)

      vm.nameEdit = vm.currentSupplier.name
      vm.addressEdit = vm.currentSupplier.address     
    }
    
    function editSupplier() {
      var id = $stateParams.id
      var payload = {
        name: vm.nameEdit,
        address: vm.addressEdit
      }

      supplierService.editSupplier(id, payload)
      vm.nameEdit = null
      vm.addressEdit = null
      $state.go('supplier')
    }
  }
})();